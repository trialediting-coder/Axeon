import React, { useEffect, useRef } from 'react';

export const LuminousGlassShader: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
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

    // Recreates the luminous diagonal soft coral/peach light streak across frosted glass
    const fsSource = `
      precision highp float;
      uniform vec2 u_resolution;
      uniform float u_time;
      uniform vec2 u_mouse;

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
        
        vec2 p = st - vec2(0.5);
        p.x *= aspect;

        float t = u_time * 0.2;

        // Base soft ambient background: luminous off-white
        vec3 bg = vec3(0.976, 0.973, 0.969); // #FAF8F7

        // Diagonal beam rotation (-35 degrees, from top-right towards bottom-left)
        float angle = radians(-32.0 + sin(t * 0.5) * 2.0);
        vec2 rotP = vec2(
          p.x * cos(angle) - p.y * sin(angle),
          p.x * sin(angle) + p.y * cos(angle)
        );

        // Soft wavy beam displacement
        float wave = sin(rotP.x * 2.5 + t * 0.8) * 0.08 + sin(rotP.y * 1.5 - t * 0.4) * 0.05;
        float distToBeam = abs(rotP.y + wave - 0.05);

        // Primary soft coral/peach beam glow
        float beamGlow = exp(-distToBeam * 3.6);
        float beamCore = exp(-distToBeam * 8.5);

        // Secondary ambient diffusion
        float diffuseGlow = exp(-length(p - vec2(0.2, 0.1)) * 1.8);

        // Colors: Luminous Royal Blue & Ice Cyan
        vec3 blueCore = vec3(0.12, 0.44, 0.96);   // Luminous royal blue #1E70F5
        vec3 cyanSoft = vec3(0.58, 0.82, 0.98);   // Soft azure / sky glow #94D1FA
        vec3 iceTint = vec3(0.91, 0.95, 1.00);    // Ambient soft ice tint

        vec3 beamColor = mix(cyanSoft, blueCore, beamCore * 0.75);
        
        // Frosted glass refraction / fluted ripples
        float glassFlutes = sin((rotP.x + rotP.y * 0.5) * 28.0) * 0.015;
        beamGlow = clamp(beamGlow + glassFlutes * beamGlow, 0.0, 1.0);

        // Composite the scene
        vec3 color = bg;
        color = mix(color, iceTint, diffuseGlow * 0.4);
        color = mix(color, beamColor, beamGlow * 0.58);

        // Subtle film grain for organic paper/glass feel
        float grain = (hash(gl_FragCoord.xy + fract(u_time * 5.0)) - 0.5) * 0.025;
        color += grain;

        gl_FragColor = vec4(color, 1.0);
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
  }, []);

  return (
    <canvas
      id="luminous-shader-canvas"
      ref={canvasRef}
      className="fixed inset-0 z-0 pointer-events-none w-full h-full"
    />
  );
};
