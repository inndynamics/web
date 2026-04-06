import { useEffect, useRef } from "react";

const NetworkVisualization = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    const dpr = window.devicePixelRatio || 1;

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.scale(dpr, dpr);
    };
    resize();
    window.addEventListener("resize", resize);

    interface Node {
      x: number; y: number; vx: number; vy: number; r: number; pulse: number; speed: number;
    }

    const nodes: Node[] = [];
    const count = 24;
    const w = () => canvas.getBoundingClientRect().width;
    const h = () => canvas.getBoundingClientRect().height;

    for (let i = 0; i < count; i++) {
      nodes.push({
        x: Math.random() * 500, y: Math.random() * 500,
        vx: (Math.random() - 0.5) * 0.3, vy: (Math.random() - 0.5) * 0.3,
        r: 2 + Math.random() * 3, pulse: Math.random() * Math.PI * 2,
        speed: 0.01 + Math.random() * 0.02,
      });
    }

    const draw = () => {
      const width = w();
      const height = h();
      ctx.clearRect(0, 0, width, height);

      // Update positions
      nodes.forEach(n => {
        n.x += n.vx; n.y += n.vy;
        n.pulse += n.speed;
        if (n.x < 0 || n.x > width) n.vx *= -1;
        if (n.y < 0 || n.y > height) n.vy *= -1;
        n.x = Math.max(0, Math.min(width, n.x));
        n.y = Math.max(0, Math.min(height, n.y));
      });

      // Draw connections
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 150) {
            const alpha = (1 - dist / 150) * 0.3;
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.strokeStyle = `rgba(79, 110, 247, ${alpha})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }

      // Draw nodes
      nodes.forEach(n => {
        const glow = 0.5 + Math.sin(n.pulse) * 0.3;
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r * (1 + Math.sin(n.pulse) * 0.2), 0, Math.PI * 2);
        ctx.fillStyle = `rgba(79, 110, 247, ${glow})`;
        ctx.fill();

        // Glow
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r * 3, 0, Math.PI * 2);
        const gradient = ctx.createRadialGradient(n.x, n.y, 0, n.x, n.y, n.r * 3);
        gradient.addColorStop(0, `rgba(79, 110, 247, ${glow * 0.3})`);
        gradient.addColorStop(1, "rgba(79, 110, 247, 0)");
        ctx.fillStyle = gradient;
        ctx.fill();
      });

      animationId = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return <canvas ref={canvasRef} className="w-full h-full" />;
};

export default NetworkVisualization;
