import React, { useEffect, useRef, useState } from 'react';

// Try to load shaders/react dynamically or fall back to high performance canvas WebGL implementation
export const HeroShader: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [ShaderComponents, setShaderComponents] = useState<any>(null);

  useEffect(() => {
    let isMounted = true;
    import('shaders/react')
      .then((mod) => {
        if (isMounted && mod) {
          setShaderComponents(mod);
        }
      })
      .catch(() => {
        // Fallback to WebGL canvas below
      });
    return () => {
      isMounted = false;
    };
  }, []);

  useEffect(() => {
    if (ShaderComponents) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const gl = canvas.getContext('webgl2') || canvas.getContext('webgl');
    if (!gl) return;

    let animationFrameId: number;

    const resize = () => {
      if (!canvas) return;
      canvas.width = window.innerWidth * Math.min(window.devicePixelRatio || 1, 2);
      canvas.height = window.innerHeight * Math.min(window.devicePixelRatio || 1, 2);
      gl.viewport(0, 0, canvas.width, canvas.height);
    };

    resize();
    window.addEventListener('resize', resize);

    const vsSource = `
      attribute vec2 position;
      void main() {
        gl_Position = vec4(position, 0.0, 1.0);
      }
    `;

    // High fidelity shader combining Swirl, ChromaFlow, FlutedGlass, and FilmGrain
    const fsSource = `
      precision highp float;
      uniform vec2 u_resolution;
      uniform float u_time;

      vec3 orange = vec3(1.0, 0.3725, 0.0118); // #ff5f03
      vec3 lightA = vec3(1.0, 1.0, 1.0);       // #ffffff
      vec3 lightB = vec3(0.941, 0.941, 0.941); // #f0f0f0

      float hash(vec2 p) {
        return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123);
      }

      float noise(vec2 p) {
        vec2 i = floor(p);
        vec2 f = fract(p);
        vec2 u = f * f * (3.0 - 2.0 * f);
        return mix(mix(hash(i + vec2(0.0, 0.0)), hash(i + vec2(1.0, 0.0)), u.x),
                   mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), u.x), u.y);
      }

      void main() {
        vec2 st = gl_FragCoord.xy / u_resolution.xy;
        float aspect = u_resolution.x / u_resolution.y;
        vec2 p = (st - 0.5);
        p.x *= aspect;

        float t = u_time * 0.15;

        // 1. Swirl detail: 1.7
        float r = length(p);
        float angle = atan(p.y, p.x);
        float swirl = angle + (1.0 - smoothstep(0.0, 1.5, r)) * sin(r * 1.7 * 6.283 - t * 2.0) * 1.2;
        vec2 swirlP = vec2(cos(swirl), sin(swirl)) * r;

        // 2. ChromaFlow (momentum 13, radius 3.5)
        float flow1 = sin(swirlP.x * 3.5 + t * 1.3) + cos(swirlP.y * 3.5 - t * 0.9);
        float flow2 = sin((swirlP.x + swirlP.y) * 2.5 + t * 1.8);
        float flow = smoothstep(-0.4, 0.8, flow1 * 0.5 + flow2 * 0.5);

        // 3. FlutedGlass (angle: 31 deg, frequency: 8, highlight: 0.12, refraction: 4)
        float rad = radians(31.0);
        vec2 rotP = vec2(
          p.x * cos(rad) - p.y * sin(rad),
          p.x * sin(rad) + p.y * cos(rad)
        );
        float flute = sin(rotP.x * 8.0 * 6.28318);
        float glassRefract = flute * 0.04 * (4.0 / 4.0);
        float highlight = pow(clamp(flute * 0.5 + 0.5, 0.0, 1.0), 8.0) * 0.12;

        // Base gradient from Swirl colors (#ffffff to #f0f0f0)
        vec3 base = mix(lightA, lightB, clamp(st.y + glassRefract, 0.0, 1.0));

        // Blend with ChromaFlow orange glow (#ff5f03)
        vec3 col = mix(base, orange, flow * 0.42);
        col += vec3(highlight);

        // 4. FilmGrain (strength: 0.05)
        float grain = (hash(gl_FragCoord.xy + fract(u_time * 10.0)) - 0.5) * 0.05;
        col += grain;

        gl_FragColor = vec4(col, 0.85);
      }
    `;

    const createShader = (glCtx: WebGLRenderingContext, type: number, source: string) => {
      const shader = glCtx.createShader(type);
      if (!shader) return null;
      glCtx.shaderSource(shader, source);
      glCtx.compileShader(shader);
      if (!glCtx.getShaderParameter(shader, glCtx.COMPILE_STATUS)) {
        console.error(glCtx.getShaderInfoLog(shader));
        glCtx.deleteShader(shader);
        return null;
      }
      return shader;
    };

    const vs = createShader(gl, gl.VERTEX_SHADER, vsSource);
    const fs = createShader(gl, gl.FRAGMENT_SHADER, fsSource);
    if (!vs || !fs) return;

    const program = gl.createProgram();
    if (!program) return;
    gl.attachShader(program, vs);
    gl.attachShader(program, fs);
    gl.linkProgram(program);

    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      console.error(gl.getProgramInfoLog(program));
      return;
    }

    gl.useProgram(program);

    const buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([
        -1.0, -1.0,
         1.0, -1.0,
        -1.0,  1.0,
        -1.0,  1.0,
         1.0, -1.0,
         1.0,  1.0,
      ]),
      gl.STATIC_DRAW
    );

    const posLoc = gl.getAttribLocation(program, 'position');
    gl.enableVertexAttribArray(posLoc);
    gl.vertexAttribPointer(posLoc, 2, gl.FLOAT, false, 0, 0);

    const resLoc = gl.getUniformLocation(program, 'u_resolution');
    const timeLoc = gl.getUniformLocation(program, 'u_time');

    const startTime = performance.now();
    const render = () => {
      const elapsed = (performance.now() - startTime) / 1000;
      gl.uniform2f(resLoc, canvas.width, canvas.height);
      gl.uniform1f(timeLoc, elapsed);
      gl.drawArrays(gl.TRIANGLES, 0, 6);
      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [ShaderComponents]);

  // If shaders/react components are available and rendered
  if (ShaderComponents && ShaderComponents.Shader) {
    const { Shader, Swirl, ChromaFlow, FlutedGlass, FilmGrain } = ShaderComponents;
    return (
      <div className="absolute inset-0 z-10 pointer-events-none w-full h-full">
        <Shader className="w-full h-full">
          {Swirl && <Swirl colorA="#ffffff" colorB="#f0f0f0" detail={1.7} />}
          {ChromaFlow && (
            <ChromaFlow
              baseColor="#ffffff"
              downColor="#ff5f03"
              leftColor="#ff5f03"
              rightColor="#ff5f03"
              upColor="#ff5f03"
              momentum={13}
              radius={3.5}
            />
          )}
          {FlutedGlass && (
            <FlutedGlass
              aberration={0.61}
              angle={31}
              frequency={8}
              highlight={0.12}
              highlightSoftness={0}
              lightAngle={-90}
              refraction={4}
              shape="rounded"
              softness={1}
              speed={0.15}
            />
          )}
          {FilmGrain && <FilmGrain strength={0.05} />}
        </Shader>
      </div>
    );
  }

  return (
    <canvas
      id="hero-shader-canvas"
      ref={canvasRef}
      className="absolute inset-0 z-10 pointer-events-none w-full h-full"
    />
  );
};
