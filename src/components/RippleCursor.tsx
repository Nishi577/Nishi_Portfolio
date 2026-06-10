import { useEffect, useRef } from "react";

type Particle = {
  x: number; y: number;
  vx: number; vy: number;
  size: number;
  color: string;
  alpha: number;
  decay: number;
  gravity: number;
  rotation: number;
  rotSpeed: number;
  shape: "star" | "dot" | "blob";
};

const COLORS = ["#7B1C3E", "#A78BFA", "#F5D547", "#c94478", "#c9a8fb", "#f9e87a"];

function spawnGlitter(particles: Particle[], x: number, y: number, strong: boolean) {
  const count = strong ? 38 : 4;
  for (let i = 0; i < count; i++) {
    const angle = Math.random() * Math.PI * 2;
    const speed = strong ? Math.random() * 9 + 3 : Math.random() * 4 + 1;
    particles.push({
      x, y,
      vx: Math.cos(angle) * speed,
      vy: Math.sin(angle) * speed - (strong ? Math.random() * 5 + 2 : Math.random() * 2),
      size: strong ? Math.random() * 5 + 2 : Math.random() * 3 + 1,
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
      alpha: strong ? 1 : 0.85,
      decay: Math.random() * 0.022 + 0.012,
      gravity: 0.18,
      rotation: Math.random() * Math.PI * 2,
      rotSpeed: (Math.random() - 0.5) * 0.3,
      shape: Math.random() > 0.5 ? "star" : "dot",
    });
  }
  if (strong) {
    for (let i = 0; i < 6; i++) {
      const angle = Math.random() * Math.PI * 2;
      const speed = Math.random() * 7 + 4;
      particles.push({
        x, y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed - Math.random() * 4 - 2,
        size: Math.random() * 10 + 6,
        color: COLORS[Math.floor(Math.random() * COLORS.length)],
        alpha: 0.6,
        decay: 0.018,
        gravity: 0.22,
        rotation: 0, rotSpeed: 0,
        shape: "blob",
      });
    }
  }
}

function drawStar(ctx: CanvasRenderingContext2D, x: number, y: number, r: number, rotation: number) {
  ctx.beginPath();
  for (let i = 0; i < 8; i++) {
    const a = rotation + (i * Math.PI) / 4;
    const radius = i % 2 === 0 ? r : r * 0.45;
    i === 0
      ? ctx.moveTo(x + Math.cos(a) * radius, y + Math.sin(a) * radius)
      : ctx.lineTo(x + Math.cos(a) * radius, y + Math.sin(a) * radius);
  }
  ctx.closePath();
}

export default function SplashCursor() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let dpr = Math.min(window.devicePixelRatio || 1, 2);
    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    window.addEventListener("resize", resize);

    const particles: Particle[] = [];
    let lastMove = 0;

    const onMove = (e: MouseEvent) => {
      const now = performance.now();
      if (now - lastMove < 40) return;
      lastMove = now;
      spawnGlitter(particles, e.clientX, e.clientY, false);
    };
    const onDown = (e: MouseEvent) => spawnGlitter(particles, e.clientX, e.clientY, true);

    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mousedown", onDown, { passive: true });

    let raf = 0;
    const tick = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.x += p.vx; p.y += p.vy;
        p.vy += p.gravity;
        p.vx *= 0.97;
        p.alpha -= p.decay;
        p.size *= 0.98;
        p.rotation += p.rotSpeed;
        if (p.alpha <= 0 || p.size < 0.3) { particles.splice(i, 1); continue; }
        ctx.save();
        ctx.globalAlpha = Math.max(0, p.alpha);
        ctx.fillStyle = p.color;
        if (p.shape === "star") {
          drawStar(ctx, p.x, p.y, p.size, p.rotation);
          ctx.fill();
        } else {
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
          ctx.fill();
        }
        ctx.restore();
      }
      ctx.globalAlpha = 1;
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mousedown", onDown);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      style={{
        position: "fixed",
        inset: 0,
        width: "100vw",
        height: "100vh",
        pointerEvents: "none",
        zIndex: 9998,
      }}
    />
  );
}