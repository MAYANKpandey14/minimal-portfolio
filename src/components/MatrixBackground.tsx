import { useEffect, useRef } from 'react';

const MatrixBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;

    const resizeCanvas = () => {
      const parent = canvas.parentElement;
      canvas.width = parent ? parent.offsetWidth : window.innerWidth;
      canvas.height = parent ? parent.offsetHeight : window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const chars = '01010101アイウエオカキクケコサシスセソタチツテト<>{}[]=+/:-*#';
    const fontSize = 15;
    const columns = Math.max(1, Math.floor(canvas.width / fontSize));
    const drops: number[] = Array(columns).fill(1).map(() => Math.floor(Math.random() * -50));

    const draw = () => {
      // Trail effect: clear with slight opacity fade
      ctx.fillStyle = 'rgba(11, 15, 23, 0.18)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.font = `${fontSize}px "JetBrains Mono", monospace`;

      for (let i = 0; i < drops.length; i++) {
        const text = chars[Math.floor(Math.random() * chars.length)];
        const x = i * fontSize;
        const y = drops[i] * fontSize;

        // Bright leading character
        ctx.fillStyle = drops[i] * fontSize > canvas.height - 40 ? 'rgba(52, 211, 153, 0.9)' : 'rgba(16, 185, 129, 0.65)';
        ctx.fillText(text, x, y);

        if (y > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full z-0 pointer-events-none opacity-60"
    />
  );
};

export default MatrixBackground;
