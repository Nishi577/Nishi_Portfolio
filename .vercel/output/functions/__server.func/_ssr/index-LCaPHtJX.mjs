import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { C as CodeXml, A as ArrowDown, M as MapPin, G as GraduationCap, B as Building2, T as Trophy, a as Award, b as GitBranch, c as Mail, S as Star, d as Github, E as ExternalLink, e as Sparkles, U as Users, f as GitMerge, g as ArrowUpRight, h as Sun, i as Moon } from "../_libs/lucide-react.mjs";
import { m as motion, u as useMotionValue, a as useSpring, b as useTransform, A as AnimatePresence } from "../_libs/framer-motion.mjs";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
function FloatingObjects() {
  const containerRef = reactExports.useRef(null);
  const mouseRef = reactExports.useRef({ x: -9999, y: -9999 });
  reactExports.useEffect(() => {
    const onMove = (e) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener("mousemove", onMove);
    let raf = 0;
    const tick = () => {
      const c = containerRef.current;
      const scrollY = window.scrollY;
      if (c) {
        const nodes = c.querySelectorAll("[data-fo]");
        nodes.forEach((n, idx) => {
          const r = n.getBoundingClientRect();
          const cx = r.left + r.width / 2;
          const cy = r.top + r.height / 2;
          const dx = cx - mouseRef.current.x;
          const dy = cy - mouseRef.current.y;
          const dist = Math.hypot(dx, dy);
          if (dist < 300 && dist > 0) {
            const force = (1 - dist / 300) * 6;
            n.style.setProperty("--mx", `${dx / dist * force}px`);
            n.style.setProperty("--my", `${dy / dist * force}px`);
          } else {
            n.style.setProperty("--mx", `0px`);
            n.style.setProperty("--my", `0px`);
          }
          const speed = 0.1 + idx * 0.07 % 0.3;
          n.style.setProperty("--sy", `${-scrollY * speed}px`);
        });
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      ref: containerRef,
      "aria-hidden": true,
      className: "pointer-events-none fixed inset-0 z-0 overflow-hidden",
      style: { contain: "strict" },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("style", { children: `
        .fo { position: absolute; transform: translate(var(--mx,0), calc(var(--my,0) + var(--sy,0))); transition: transform 0.4s cubic-bezier(0.23,1,0.32,1); will-change: transform; }
        .fo-inner { animation-fill-mode: both; will-change: transform; }
        @keyframes fo-drift-1 { 0%,100% { transform: translate(0,0) rotate(0); } 50% { transform: translate(18px,-12px) rotate(180deg); } }
        @keyframes fo-drift-2 { 0%,100% { transform: translateY(0) scale(1); } 50% { transform: translateY(-20px) scale(1.12); } }
        @keyframes fo-drift-3 { 0%,100% { transform: translateY(0) rotate(45deg); } 50% { transform: translateY(14px) rotate(405deg); } }
        @keyframes fo-drift-4 { 0%,100% { transform: translate(0,0); } 50% { transform: translate(-10px,8px); } }
        @keyframes fo-drift-5 { 0%,100% { transform: translateY(0) scale(0.9); } 50% { transform: translateY(-25px) scale(1.1); } }
        @keyframes fo-drift-7 { 0%,100% { transform: translateY(0) rotate(0); } 50% { transform: translateY(18px) rotate(180deg); } }
        @keyframes fo-drift-8 { 0%,100% { transform: translate(0,0); } 50% { transform: translate(30px,-20px); } }
        @keyframes fo-drift-9 { 0%,100% { transform: rotate(0); opacity: 0.5; } 50% { transform: rotate(90deg); opacity: 1; } }
        @keyframes fo-drift-10 { 0%,100% { transform: translateX(0) scale(1); } 50% { transform: translateX(12px) scale(1.4); } }
        @keyframes fo-drift-11 { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-20px); } }
        @keyframes fo-drift-12 { 0%,100% { transform: translateX(0) rotate(-15deg); } 50% { transform: translateX(20px) rotate(15deg); } }
        @keyframes fo-pulse { 0%,100% { transform: scale(0.8); opacity: 0.6; } 50% { transform: scale(1.2); opacity: 1; } }
        @keyframes fo-blob { 0%,100% { transform: scale(1); } 50% { transform: scale(1.15); } }
        @keyframes fo-line { 0%,100% { width: 80px; transform: rotate(-8deg); } 50% { width: 120px; transform: rotate(8deg); } }
        @keyframes fo-dot-pulse { 0%,100% { opacity: 0.4; } 50% { opacity: 1; } }
      ` }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { "data-fo": true, className: "fo", style: { top: "8%", left: "6%" }, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fo-inner", style: { animation: "fo-drift-1 40s linear infinite" }, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { width: 120, height: 120, borderRadius: "50%", border: "2px solid var(--accent-lilac)" } }) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { "data-fo": true, className: "fo", style: { top: "12%", right: "8%" }, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fo-inner", style: { animation: "fo-drift-2 7s ease-in-out infinite" }, children: /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { width: "80", height: "80", viewBox: "0 0 100 100", style: { filter: "blur(1px)" }, children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M50,5 C75,10 95,30 90,55 C85,80 60,95 35,88 C10,80 5,55 12,30 C18,12 35,2 50,5 Z", fill: "var(--accent-yellow)", opacity: "0.6" }) }) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { "data-fo": true, className: "fo", style: { top: "22%", left: "18%" }, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fo-inner", style: { animation: "fo-drift-3 15s linear infinite" }, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { width: 28, height: 28, background: "var(--accent-maroon-soft)" } }) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { "data-fo": true, className: "fo", style: { top: "35%", right: "5%" }, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fo-inner", style: { animation: "fo-drift-4 8s ease-in-out infinite" }, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-3 gap-[12px]", children: Array.from({ length: 9 }).map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
          width: 6,
          height: 6,
          borderRadius: "50%",
          background: "var(--accent-lilac)",
          opacity: 0.7,
          animation: `fo-dot-pulse 2s ease-in-out infinite`,
          animationDelay: `${i * 0.2 % 2}s`
        } }, i)) }) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { "data-fo": true, className: "fo", style: { top: "45%", left: "3%" }, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fo-inner", style: { animation: "fo-drift-5 10s ease-in-out infinite" }, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { width: 64, height: 64, borderRadius: "50%", border: "3px solid var(--accent-maroon)" } }) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { "data-fo": true, className: "fo", style: { top: "52%", right: "12%" }, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fo-inner", style: { animation: "fo-line 4s ease-in-out infinite", height: 2, background: "var(--accent-yellow-warm)", transformOrigin: "left" } }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { "data-fo": true, className: "fo", style: { top: "60%", left: "10%" }, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fo-inner", style: { animation: "fo-drift-7 20s linear infinite" }, children: /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { width: "36", height: "36", viewBox: "0 0 36 36", children: /* @__PURE__ */ jsxRuntimeExports.jsx("polygon", { points: "18,2 34,32 2,32", fill: "var(--accent-blush)", opacity: "0.8" }) }) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { "data-fo": true, className: "fo", style: { top: "65%", right: "3%" }, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fo-inner", style: { animation: "fo-drift-8 18s ease-in-out infinite" }, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { width: 160, height: 160, borderRadius: "50%", background: "var(--accent-lilac)", opacity: 0.08, filter: "blur(40px)" } }) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { "data-fo": true, className: "fo", style: { top: "72%", left: "15%" }, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fo-inner", style: { animation: "fo-drift-9 12s ease-in-out infinite" }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", style: { width: 28, height: 28 }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute", style: { top: 11, left: 0, width: 28, height: 6, background: "var(--accent-maroon-soft)" } }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute", style: { top: 0, left: 11, width: 6, height: 28, background: "var(--accent-maroon-soft)" } })
        ] }) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { "data-fo": true, className: "fo", style: { top: "78%", right: "18%" }, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fo-inner", style: { animation: "fo-drift-10 5s ease-in-out infinite" }, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { width: 40, height: 40, borderRadius: "50%", border: "2px solid var(--border-yellow)" } }) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { "data-fo": true, className: "fo", style: { top: "30%", left: "88%" }, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fo-inner", style: { animation: "fo-drift-11 9s ease-in-out infinite" }, children: Array.from({ length: 5 }).map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
          width: 5,
          height: 5,
          borderRadius: "50%",
          background: "var(--accent-maroon)",
          marginLeft: i * 10,
          marginTop: i === 0 ? 0 : 9,
          animation: `fo-dot-pulse 2s ease-in-out infinite`,
          animationDelay: `${i * 0.15}s`
        } }, i)) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { "data-fo": true, className: "fo", style: { top: "88%", left: "25%" }, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fo-inner", style: { animation: "fo-drift-12 11s ease-in-out infinite" }, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { width: 50, height: 20, borderRadius: 99, background: "var(--accent-lilac)", opacity: 0.5 } }) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { "data-fo": true, className: "fo", style: { top: "18%", left: "45%" }, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fo-inner", style: { animation: "fo-pulse 3s ease-in-out infinite" }, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { width: 16, height: 16, borderRadius: "50%", background: "var(--accent-yellow)", boxShadow: "0 0 12px 4px var(--glow-yellow)" } }) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { "data-fo": true, className: "fo", style: { top: "2%", right: "0%" }, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fo-inner", style: { animation: "fo-blob 12s ease-in-out infinite" }, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { width: 200, height: 200, borderRadius: "50%", background: "var(--accent-maroon)", opacity: 0.05, filter: "blur(50px)" } }) }) })
      ]
    }
  );
}
function CustomCursor() {
  const dotRef = reactExports.useRef(null);
  const ringRef = reactExports.useRef(null);
  const [enabled, setEnabled] = reactExports.useState(false);
  reactExports.useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(pointer: coarse)").matches) return;
    setEnabled(true);
    let mx = window.innerWidth / 2;
    let my = window.innerHeight / 2;
    let rx = mx, ry = my;
    let raf = 0;
    const onMove = (e) => {
      mx = e.clientX;
      my = e.clientY;
    };
    const onDown = () => {
      if (dotRef.current) dotRef.current.style.transform += " scale(0.5)";
      if (ringRef.current) ringRef.current.style.transform += " scale(0.85)";
    };
    const onUp = () => {
      if (dotRef.current) dotRef.current.dataset.click = "1";
      setTimeout(() => {
        if (dotRef.current) delete dotRef.current.dataset.click;
      }, 220);
    };
    const tick = () => {
      rx += (mx - rx) * 0.1;
      ry += (my - ry) * 0.1;
      if (dotRef.current) dotRef.current.style.transform = `translate3d(${mx - 5}px, ${my - 5}px, 0)`;
      if (ringRef.current) ringRef.current.style.transform = `translate3d(${rx - 18}px, ${ry - 18}px, 0)`;
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
    };
  }, []);
  if (!enabled) return null;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        ref: dotRef,
        className: "pointer-events-none fixed left-0 top-0 z-[9999]",
        style: { width: 10, height: 10, borderRadius: "50%", background: "var(--accent-maroon)", transition: "background 0.2s" }
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        ref: ringRef,
        className: "pointer-events-none fixed left-0 top-0 z-[9999]",
        style: { width: 36, height: 36, borderRadius: "50%", border: "2px solid var(--accent-lilac)", transition: "border-color 0.3s, width 0.3s, height 0.3s" }
      }
    )
  ] });
}
function ThemeToggle() {
  const [dark, setDark] = reactExports.useState(false);
  reactExports.useEffect(() => {
    const stored = localStorage.getItem("theme");
    const isDark = stored === "dark";
    setDark(isDark);
    document.documentElement.classList.toggle("dark", isDark);
  }, []);
  const toggle = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "button",
    {
      onClick: toggle,
      "aria-label": "Toggle theme",
      className: "relative flex items-center justify-center w-9 h-9 rounded-full border transition-all hover:scale-110",
      style: { borderColor: "var(--border-maroon)", background: "var(--bg-primary)", color: "var(--accent-maroon)" },
      children: dark ? /* @__PURE__ */ jsxRuntimeExports.jsx(Sun, { className: "w-4 h-4" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Moon, { className: "w-4 h-4" })
    }
  );
}
const links$1 = [
  { label: "ABOUT", href: "#about" },
  { label: "WORK", href: "#work" },
  { label: "ARSENAL", href: "#arsenal" },
  { label: "RECOGNITION", href: "#recognition" },
  { label: "CONTACT", href: "#contact" }
];
function Navbar() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "nav",
    {
      className: "fixed top-0 left-0 right-0 z-50 px-6 md:px-10 py-5 flex items-center justify-between backdrop-blur-md",
      style: { background: "color-mix(in oklab, var(--bg-primary) 75%, transparent)" },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "a",
          {
            href: "#top",
            className: "flex items-center justify-center w-11 h-11 rounded-full border-2",
            style: { borderColor: "var(--accent-maroon)", color: "var(--accent-maroon)" },
            children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display text-lg font-bold leading-none", children: "NS" })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "hidden md:flex items-center gap-7 font-mono-jb text-[11px] tracking-[0.18em]",
            style: { color: "var(--text-secondary)" },
            children: links$1.map((l, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: l.href, className: "hover:text-[var(--accent-maroon)] transition-colors flex items-center gap-2", children: [
              l.label,
              i < links$1.length - 1 && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { color: "var(--accent-maroon-soft)" }, children: "·" })
            ] }, l.label))
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(ThemeToggle, {}),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "hidden sm:flex items-center gap-2 px-3 py-2 rounded-full",
              style: { background: "var(--text-primary)", color: "var(--accent-yellow)" },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(CodeXml, { className: "w-3.5 h-3.5" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono-jb text-[10px] tracking-wider", children: "DEV" })
              ]
            }
          )
        ] })
      ]
    }
  );
}
function Counter({ to, suffix = "" }) {
  const [v, setV] = reactExports.useState(0);
  reactExports.useEffect(() => {
    const start = performance.now();
    const dur = 1400;
    let raf = 0;
    const tick = (t) => {
      const p = Math.min(1, (t - start) / dur);
      const eased = 1 - Math.pow(1 - p, 3);
      setV(Math.round(to * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [to]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
    v,
    suffix
  ] });
}
const fade = {
  hidden: { opacity: 0, y: 28 },
  show: (i) => ({ opacity: 1, y: 0, transition: { delay: 0.15 + i * 0.12, duration: 0.7, ease: [0.25, 1, 0.5, 1] } })
};
function Hero() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "section",
    {
      id: "top",
      className: "relative min-h-screen flex items-center pt-28 pb-20 px-6 md:px-10",
      style: { background: "var(--bg-primary)" },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { "aria-hidden": true, className: "absolute inset-x-0 top-24 text-center pointer-events-none select-none", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "span",
          {
            className: "font-display font-bold tracking-[0.05em]",
            style: { fontSize: "clamp(60px, 14vw, 220px)", color: "var(--accent-maroon)", opacity: 0.06 },
            children: "NISHI SHAH"
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 max-w-6xl mx-auto w-full grid md:grid-cols-[1.4fr_1fr] gap-12 items-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              motion.div,
              {
                custom: 0,
                variants: fade,
                initial: "hidden",
                animate: "show",
                className: "inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-6 font-mono-jb text-[11px] tracking-[0.2em]",
                style: { background: "color-mix(in oklab, var(--accent-yellow) 18%, transparent)", color: "var(--text-yellow)" },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-1.5 h-1.5 rounded-full animate-pulse", style: { background: "var(--accent-yellow-warm)" } }),
                  " OPEN TO WORK · 2026"
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "h1",
              {
                className: "font-display font-bold text-[clamp(40px,7vw,82px)] leading-[1.02]",
                style: { color: "var(--text-primary)" },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(motion.span, { custom: 1, variants: fade, initial: "hidden", animate: "show", className: "block", children: "I Design, Build & Ship" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.span, { custom: 2, variants: fade, initial: "hidden", animate: "show", className: "block", children: [
                    "Products That",
                    " ",
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "relative inline-block", style: { color: "var(--accent-yellow-warm)" }, children: [
                      "Matter.",
                      /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { className: "absolute -bottom-2 left-0 w-full", height: "14", viewBox: "0 0 240 14", fill: "none", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                        motion.path,
                        {
                          d: "M2 8 Q60 2 120 7 T238 6",
                          stroke: "var(--accent-yellow-warm)",
                          strokeWidth: "3",
                          strokeLinecap: "round",
                          fill: "none",
                          initial: { pathLength: 0 },
                          animate: { pathLength: 1 },
                          transition: { delay: 1.1, duration: 0.7 }
                        }
                      ) })
                    ] })
                  ] })
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              motion.p,
              {
                custom: 3,
                variants: fade,
                initial: "hidden",
                animate: "show",
                className: "mt-6 max-w-xl text-[17px] leading-[1.65]",
                style: { color: "var(--text-body)" },
                children: [
                  "Frontend-focused full-stack developer & social impact technologist building thoughtful interfaces, ML-powered tools, and",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("em", { style: { color: "var(--text-yellow)" }, children: " products that actually move the needle" }),
                  "."
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { custom: 4, variants: fade, initial: "hidden", animate: "show", className: "mt-8 flex flex-wrap gap-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "a",
                {
                  href: "#work",
                  className: "group relative inline-flex items-center gap-2 px-6 py-3.5 rounded-full font-mono-jb text-xs tracking-[0.15em] transition-all hover:-translate-y-[3px]",
                  style: { background: "var(--accent-maroon)", color: "var(--bg-primary)", boxShadow: "0 6px 0 -2px var(--glow-maroon)" },
                  children: [
                    "VIEW MY WORK ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "transition-transform group-hover:translate-x-1", children: "→" })
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "a",
                {
                  href: "/nishi-shah-resume.pdf",
                  target: "_blank",
                  rel: "noopener noreferrer",
                  className: "group inline-flex items-center gap-2 px-6 py-3.5 rounded-full font-mono-jb text-xs tracking-[0.15em] border-2 transition-all",
                  style: { borderColor: "var(--accent-lilac)", color: "var(--text-lilac)" },
                  children: [
                    "DOWNLOAD RESUME ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowDown, { className: "w-3.5 h-3.5 group-hover:translate-y-1 transition-transform" })
                  ]
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              motion.div,
              {
                custom: 5,
                variants: fade,
                initial: "hidden",
                animate: "show",
                className: "mt-12 grid grid-cols-4 max-w-lg",
                children: [
                  { n: 4, s: "+", l: "Projects" },
                  { n: 89, s: "%", l: "ML Accuracy" },
                  { n: 3, s: "×", l: "Hackathons" },
                  { n: 8.9, s: "", l: "CGPA" }
                ].map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-4 first:pl-0 border-l", style: { borderColor: "var(--border-lilac)" }, children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display font-bold text-[44px] leading-none", style: { color: "var(--accent-maroon)" }, children: Number.isInteger(s.n) ? /* @__PURE__ */ jsxRuntimeExports.jsx(Counter, { to: s.n, suffix: s.s }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                    s.n,
                    s.s
                  ] }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2 font-mono-jb text-[10px] tracking-[0.18em] uppercase", style: { color: "var(--text-muted)" }, children: s.l })
                ] }, i))
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              initial: { opacity: 0, scale: 0.9 },
              animate: { opacity: 1, scale: 1 },
              transition: { delay: 0.8, duration: 0.9 },
              className: "relative hidden md:block aspect-square",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 rounded-full border-[3px] animate-spin-slower", style: { borderColor: "var(--accent-lilac)", opacity: 0.4, borderStyle: "dashed" } }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-10 right-6 w-40 h-40 rounded-full animate-breathe", style: { background: "var(--accent-yellow)", opacity: 0.28, filter: "blur(2px)" } }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-10 left-2 w-56 h-56 rounded-full border-2 animate-spin-slow", style: { borderColor: "var(--accent-maroon-soft)", borderStyle: "dashed" } }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    className: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full animate-glow",
                    style: { background: "var(--accent-maroon)", opacity: 0.9 }
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-8 right-12 w-3 h-3 rounded-full animate-float-y", style: { background: "var(--accent-yellow-warm)" } }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-20 left-12 w-2 h-2 rounded-full animate-float-x", style: { background: "var(--accent-blush)" } }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-1/2 left-1/2", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "animate-spin-slow", style: { width: 280, height: 280, marginLeft: -140, marginTop: -140 }, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-3 h-3 rounded-full", style: { background: "var(--accent-lilac-deep)" } }) }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-1/2 left-1/2", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "animate-spin-slower", style: { width: 360, height: 360, marginLeft: -180, marginTop: -180, animationDirection: "reverse" }, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute right-0 top-1/2 w-2.5 h-2.5 rounded-full", style: { background: "var(--accent-yellow-warm)" } }) }) })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 font-mono-jb text-[10px] tracking-[0.3em]",
              style: { color: "var(--text-muted)" },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "SCROLL" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-px h-8 block animate-scroll-hint", style: { background: "var(--accent-maroon)" } })
              ]
            }
          )
        ] })
      ]
    }
  );
}
const facts = [
  { icon: MapPin, label: "Location", value: "Mumbai, India" },
  { icon: GraduationCap, label: "Degree", value: "B.E. Information Technology" },
  { icon: Building2, label: "Institute", value: "A.P. Shah Institute of Technology" },
  { icon: Trophy, label: "CGPA", value: "8.9 / 10" },
  { icon: Award, label: "Hackathons", value: "3+ Competed" },
  { icon: GitBranch, label: "Open Source", value: "GSSoC Active Contributor" }
];
function About() {
  const ref = reactExports.useRef(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const tx = useSpring(useTransform(mx, [-1, 1], [-4, 4]), { stiffness: 90, damping: 16 });
  const ty = useSpring(useTransform(my, [-1, 1], [-4, 4]), { stiffness: 90, damping: 16 });
  const handleMove = (e) => {
    const r = ref.current?.getBoundingClientRect();
    if (!r) return;
    mx.set(((e.clientX - r.left) / r.width - 0.5) * 2);
    my.set(((e.clientY - r.top) / r.height - 0.5) * 2);
  };
  const reset = () => {
    mx.set(0);
    my.set(0);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "about", className: "relative py-28 px-6 md:px-10", style: { background: "var(--bg-section-2)" }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-6xl mx-auto", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center mb-16", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono-jb text-[11px] tracking-[0.25em] uppercase", style: { color: "var(--text-lilac)" }, children: "[ personal branding · interactive motion ]" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-[1.05fr_1fr] gap-16 md:gap-20 items-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 50 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, margin: "-100px" },
          transition: { duration: 0.9, ease: [0.25, 1, 0.5, 1] },
          className: "relative mx-auto w-full max-w-[502px]",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                "aria-hidden": true,
                className: "absolute -inset-24 pointer-events-none -z-10",
                style: { background: "radial-gradient(ellipse at center, color-mix(in oklab, var(--accent-lilac) 10%, transparent), transparent 65%)" }
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                ref,
                onMouseMove: handleMove,
                onMouseLeave: reset,
                className: "relative group",
                style: { aspectRatio: "3 / 4.4" },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    motion.div,
                    {
                      initial: { opacity: 0, scale: 0.9 },
                      whileInView: { opacity: 0.22, scale: 1 },
                      viewport: { once: true },
                      transition: { delay: 0.45, duration: 0.9 },
                      className: "absolute -inset-x-20 -inset-y-24 rounded-[50%] border animate-spin-slower pointer-events-none",
                      style: { borderColor: "var(--accent-yellow)", borderStyle: "dashed", animationDuration: "70s" }
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "div",
                    {
                      className: "absolute -inset-x-8 -inset-y-10 rounded-[50%] border-2 animate-spin-slower pointer-events-none transition-[animation-duration] group-hover:[animation-duration:40s]",
                      style: { borderColor: "var(--accent-maroon)", borderStyle: "dashed", opacity: 0.32 }
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    motion.div,
                    {
                      initial: { opacity: 0, scale: 0.92 },
                      whileInView: { opacity: 0.45, scale: 1 },
                      viewport: { once: true },
                      transition: { delay: 0.3, duration: 0.8 },
                      className: "absolute -inset-x-14 -inset-y-16 rounded-[50%] border animate-spin-slow pointer-events-none",
                      style: { borderColor: "var(--accent-lilac)", borderStyle: "dotted", animationDirection: "reverse" }
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    motion.div,
                    {
                      "aria-hidden": true,
                      animate: { opacity: [0.85, 1, 0.85] },
                      transition: { duration: 5, repeat: Infinity, ease: "easeInOut" },
                      className: "absolute -inset-10 blur-3xl pointer-events-none",
                      style: { background: "radial-gradient(ellipse at 30% 20%, var(--glow-maroon), transparent 60%), radial-gradient(ellipse at 70% 80%, var(--glow-lilac), transparent 60%), radial-gradient(ellipse at 50% 50%, var(--glow-yellow), transparent 70%)" }
                    }
                  ),
                  [
                    { t: "4%", l: "10%", d: "0s", c: "var(--accent-sage)" },
                    { t: "18%", l: "96%", d: "0.4s", c: "var(--accent-lilac)" },
                    { t: "42%", l: "-3%", d: "0.8s", c: "var(--accent-yellow)" },
                    { t: "70%", l: "100%", d: "1.2s", c: "var(--accent-sage)" },
                    { t: "88%", l: "8%", d: "0.6s", c: "var(--accent-maroon-soft)" },
                    { t: "96%", l: "78%", d: "1.6s", c: "var(--accent-lilac)" },
                    { t: "30%", l: "104%", d: "1.0s", c: "var(--accent-sage-deep)" },
                    { t: "-4%", l: "40%", d: "1.4s", c: "var(--accent-lilac)" },
                    { t: "-2%", l: "70%", d: "0.2s", c: "var(--accent-yellow)" },
                    { t: "55%", l: "-6%", d: "1.8s", c: "var(--accent-lilac)" },
                    { t: "12%", l: "-5%", d: "0.9s", c: "var(--accent-sage)" },
                    { t: "82%", l: "102%", d: "1.3s", c: "var(--accent-yellow)" },
                    { t: "102%", l: "30%", d: "0.5s", c: "var(--accent-sage-deep)" }
                  ].map((p, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                    motion.span,
                    {
                      initial: { opacity: 0, scale: 0 },
                      whileInView: { opacity: 0.7, scale: 1 },
                      viewport: { once: true },
                      transition: { delay: 0.5 + i * 0.08, duration: 0.5 },
                      className: "absolute w-1.5 h-1.5 rounded-full animate-pulse-soft pointer-events-none",
                      style: { top: p.t, left: p.l, background: p.c, boxShadow: `0 0 8px ${p.c}`, animationDelay: p.d }
                    },
                    i
                  )),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    motion.div,
                    {
                      style: { x: tx, y: ty },
                      whileHover: { scale: 1.04, y: -10 },
                      transition: { type: "spring", stiffness: 180, damping: 18 },
                      className: "relative w-full h-full",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "video",
                          {
                            src: "/avatar-motion.mp4",
                            autoPlay: true,
                            loop: true,
                            muted: true,
                            playsInline: true,
                            className: "absolute inset-0 w-full h-full object-cover object-center",
                            style: {
                              WebkitMaskImage: "radial-gradient(ellipse at center, black 50%, transparent 82%)",
                              maskImage: "radial-gradient(ellipse at center, black 50%, transparent 82%)"
                            }
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "div",
                          {
                            "aria-hidden": true,
                            className: "absolute inset-0 pointer-events-none",
                            style: {
                              background: "linear-gradient(180deg, color-mix(in oklab, var(--accent-lilac) 8%, transparent), transparent 30%, transparent 70%, color-mix(in oklab, var(--accent-maroon) 22%, transparent))",
                              WebkitMaskImage: "radial-gradient(ellipse at center, black 50%, transparent 82%)",
                              maskImage: "radial-gradient(ellipse at center, black 50%, transparent 82%)"
                            }
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs(
                          "div",
                          {
                            className: "absolute top-4 left-4 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full font-mono-jb text-[10px] tracking-wider backdrop-blur-md z-20",
                            style: { background: "color-mix(in oklab, var(--bg-primary) 70%, transparent)", color: "var(--text-primary)" },
                            children: [
                              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-1.5 h-1.5 rounded-full animate-pulse", style: { background: "var(--accent-sage-deep)" } }),
                              "LIVE · 2026"
                            ]
                          }
                        )
                      ]
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    motion.div,
                    {
                      "aria-hidden": true,
                      initial: { opacity: 0, scale: 0.94 },
                      whileInView: { opacity: 0.38, scale: 1 },
                      viewport: { once: true },
                      transition: { delay: 0.55, duration: 0.9 },
                      className: "absolute -inset-x-4 -inset-y-6 rounded-[50%] border animate-spin-slow pointer-events-none z-10",
                      style: { borderColor: "var(--accent-lilac)", borderStyle: "dashed", animationDirection: "reverse", animationDuration: "55s" }
                    }
                  )
                ]
              }
            )
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-mono-jb text-[11px] tracking-[0.3em] uppercase mb-4", style: { color: "var(--text-lilac)" }, children: "GET TO KNOW ME" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.h2,
          {
            initial: { opacity: 0, y: 24 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true },
            transition: { duration: 0.7 },
            className: "font-display text-[clamp(36px,5vw,56px)] font-bold leading-[1.05]",
            children: [
              "Building Technology ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
              "That ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { color: "var(--accent-maroon)" }, children: "Matters." })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 space-y-4 text-[16px] leading-[1.7]", style: { color: "var(--text-body)" }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
            "I'm ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { style: { color: "var(--text-primary)" }, children: "Nishi Shah" }),
            " — a frontend-focused full-stack developer with a sharp UX instinct. I design the surface and engineer what holds it up, so the product feels inevitable from the first click to the last query."
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
            "My work lives at the intersection of ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("em", { style: { color: "var(--text-yellow)" }, children: "AI/ML" }),
            " and social impact: financial inclusion for India's informal savings circles, public safety intelligence, women-first career mobility, and tooling that helps NGOs raise more, faster."
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
            "I've competed at ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { style: { color: "var(--text-primary)" }, children: "Smart India Hackathon 2025" }),
            ", AI Bharat Hackathon 2025, and GDG On Campus 2024, contribute through",
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { style: { color: "var(--text-primary)" }, children: "GSSoC" }),
            ", and hold 5 cloud & cybersecurity certifications."
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "I build on a simple conviction — the best technology disappears into the human problem it solves." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8 grid grid-cols-2 gap-3", children: facts.map((f, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: 16 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true },
            transition: { delay: i * 0.06, duration: 0.5 },
            className: "hover-lift group relative rounded-xl p-4 border",
            style: { borderColor: "var(--border-lilac)", background: "var(--bg-primary)", boxShadow: "0 2px 12px -6px var(--glow-maroon)" },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "span",
                {
                  className: "absolute top-2 right-2 w-1.5 h-1.5 rounded-full",
                  style: { background: "var(--accent-sage-deep)", boxShadow: "0 0 6px var(--glow-sage)" }
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(f.icon, { className: "w-4 h-4 mb-2", style: { color: "var(--accent-maroon)" } }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-mono-jb text-[10px] tracking-wider uppercase", style: { color: "var(--text-muted)" }, children: f.label }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-0.5 text-sm font-medium leading-snug", style: { color: "var(--text-primary)" }, children: f.value })
            ]
          },
          f.label
        )) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 flex flex-wrap gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "a",
            {
              href: "/nishi-shah-resume.pdf",
              target: "_blank",
              rel: "noopener noreferrer",
              className: "group inline-flex items-center gap-2 px-6 py-3.5 rounded-full font-mono-jb text-xs tracking-[0.15em] transition-all hover:-translate-y-[3px]",
              style: { background: "var(--accent-maroon)", color: "var(--bg-primary)", boxShadow: "0 6px 0 -2px var(--glow-maroon)" },
              children: [
                "DOWNLOAD RESUME ",
                /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowDown, { className: "w-3.5 h-3.5 group-hover:translate-y-1 transition-transform" })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "a",
            {
              href: "#contact",
              className: "group inline-flex items-center gap-2 px-6 py-3.5 rounded-full font-mono-jb text-xs tracking-[0.15em] border-2 transition-all hover:-translate-y-[3px]",
              style: { borderColor: "var(--accent-lilac)", color: "var(--text-lilac)" },
              children: [
                "CONTACT ME ",
                /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "w-3.5 h-3.5" })
              ]
            }
          )
        ] })
      ] })
    ] })
  ] }) });
}
const projects = [
  {
    idx: "01",
    name: "Saamvara",
    year: "2025",
    categories: ["Full Stack", "AI & ML", "Frontend"],
    featured: true,
    tagline: "AI-governed chit fund platform for India's informal savings circles.",
    desc: "Digitizes rotating savings communities with a Random Forest classifier (89% accuracy) for real-time member risk scores. Hindi Voice AI Foreman via Web Speech API and a portable ChitScore (0–1000) credit system across 10+ interactive screens.",
    tech: ["React", "TypeScript", "Vite", "Tailwind v4", "FastAPI", "Firebase", "Scikit-learn", "Web Speech"],
    metrics: [
      { label: "89% ML Accuracy", sage: true },
      { label: "10+ Screens", sage: false },
      { label: "AI Voice Foreman", sage: true }
    ],
    github: "https://github.com/Nishi577/saamavar-smart-group-savings.git",
    live: "https://saamavar-f28e7.firebaseapp.com/",
    // ✏️ replace
    image: "/public/Saamvara.png",
    // ✏️ replace with your image path
    accent: "var(--accent-yellow-warm)",
    tint: "var(--bg-section-3)"
  },
  {
    idx: "02",
    name: "SafeCity",
    year: "2025",
    categories: ["Full Stack", "AI & ML"],
    tagline: "Full-stack public safety intelligence platform.",
    desc: "Processes 500+ geotagged records via a Flask REST API with sub-200ms responses. Random Forest classifier on 1,200+ labeled incidents hits 83% accuracy, reducing triage effort ~60% with five interactive React visualizations.",
    tech: ["React.js", "Flask", "PostgreSQL", "Scikit-learn", "Pandas"],
    metrics: [
      { label: "500+ Records", sage: false },
      { label: "83% Accuracy", sage: true },
      { label: "Sub-200ms API", sage: true }
    ],
    github: "https://github.com/Nishi577/safecity",
    live: "https://safe-city-finale.vercel.app/",
    // ✏️ replace
    image: "/public/safecity.png",
    // ✏️ replace
    accent: "var(--accent-lilac)",
    tint: "var(--bg-section-2)"
  },
  {
    idx: "03",
    name: "BloomPath",
    year: "2024",
    categories: ["AI & ML", "Full Stack"],
    tagline: "ML-powered career platform built exclusively for women.",
    desc: "Matches users with flexible remote opportunities using a Random Forest model analyzing education, skills, availability, and location. AWS Bedrock personalizes recommendations; data persists in DynamoDB with full S3 deployment.",
    tech: ["Python", "React", "Scikit-learn", "AWS Bedrock", "DynamoDB", "S3"],
    metrics: [
      { label: "AWS Powered", sage: false },
      { label: "ML Recommendations", sage: true },
      { label: "Women-focused", sage: false }
    ],
    github: "https://github.com/Nishi577/BloomPath2.git",
    live: "http://bloompath-frontend-app.s3-website-us-east-1.amazonaws.com/",
    // ✏️ replace
    image: "/public/bloompath.png",
    // ✏️ replace
    accent: "var(--accent-blush)",
    tint: "var(--bg-section-4)"
  },
  {
    idx: "04",
    name: "ImpactSphere",
    year: "2024",
    categories: ["Full Stack", "Open Source"],
    tagline: "Dual-dashboard NGO donation platform with real-time reconciliation.",
    desc: "Tracks 200+ donations across 3 partner NGOs via donor and admin dashboards with session-based auth and role-gated views. A 6-table normalized MySQL schema collapses NGO reconciliation from hours to under 5 minutes.",
    tech: ["Flask", "MySQL", "Bootstrap", "HTML/CSS"],
    metrics: [
      { label: "200+ Donations", sage: false },
      { label: "3 NGOs", sage: false },
      { label: "<5 Min Reconciliation", sage: true }
    ],
    github: "https://github.com/Nishi577/impactsphere",
    live: "https://impact-sphere-olive.vercel.app/",
    // ✏️ replace
    image: "/public/impactsphere.png",
    // ✏️ replace
    accent: "var(--accent-maroon-soft)",
    tint: "var(--bg-section-2)"
  }
];
const FILTERS = ["All", "Frontend", "Full Stack", "AI & ML", "Open Source"];
function ProjectImage({ name, image, accent, tint }) {
  const [imgError, setImgError] = reactExports.useState(false);
  if (!imgError) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "relative w-full h-full min-h-[260px] rounded-xl overflow-hidden border",
        style: { borderColor: "var(--border-lilac)", background: tint },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "img",
            {
              src: image,
              alt: `${name} preview`,
              onError: () => setImgError(true),
              className: "w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500",
              style: { background: "color-mix(in oklab, var(--accent-maroon) 15%, transparent)" }
            }
          )
        ]
      }
    );
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "relative w-full h-full min-h-[260px] rounded-xl overflow-hidden border",
      style: { borderColor: "var(--border-lilac)", background: tint },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "flex items-center gap-1.5 px-3 py-2 border-b",
            style: { borderColor: "var(--border-lilac)", background: "color-mix(in oklab, var(--bg-primary) 60%, transparent)" },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-2.5 h-2.5 rounded-full", style: { background: "var(--accent-maroon-soft)" } }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-2.5 h-2.5 rounded-full", style: { background: "var(--accent-yellow-warm)" } }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-2.5 h-2.5 rounded-full", style: { background: "var(--accent-sage-deep)" } }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "ml-3 font-mono-jb text-[10px] tracking-wider", style: { color: "var(--text-muted)" }, children: [
                name.toLowerCase(),
                ".app"
              ] })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative p-5 h-full", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-3xl font-bold leading-none mb-3", style: { color: "var(--text-primary)" }, children: name }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-2 w-3/4 rounded-full", style: { background: accent, opacity: 0.7 } }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-2 w-1/2 rounded-full", style: { background: "var(--accent-lilac)", opacity: 0.5 } }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-2 w-2/3 rounded-full", style: { background: "var(--accent-maroon-soft)", opacity: 0.4 } })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-5 grid grid-cols-3 gap-2", children: [0, 1, 2].map((i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "h-14 rounded-md border",
              style: { borderColor: "var(--border-lilac)", background: "color-mix(in oklab, var(--bg-primary) 40%, transparent)" }
            },
            i
          )) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "absolute bottom-4 right-4 w-12 h-12 rounded-full animate-pulse-soft",
              style: { background: accent, opacity: 0.4, filter: "blur(4px)" }
            }
          )
        ] })
      ]
    }
  );
}
function Projects() {
  const [filter, setFilter] = reactExports.useState("All");
  const visible = projects.filter((p) => filter === "All" || p.categories.includes(filter));
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "work", className: "relative py-28 px-6 md:px-10", style: { background: "var(--bg-section-3)" }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-6xl mx-auto", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-center gap-4 mb-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-px w-16", style: { background: "var(--accent-maroon)" } }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display text-[clamp(36px,5vw,56px)] font-bold relative", children: [
        "Selected ",
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "relative", children: [
          "Work",
          /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { className: "absolute -bottom-3 left-0 w-full", height: "10", viewBox: "0 0 120 10", fill: "none", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.path,
            {
              d: "M2 6 Q30 1 60 6 T118 5",
              stroke: "var(--accent-maroon)",
              strokeWidth: "2.5",
              fill: "none",
              strokeLinecap: "round",
              initial: { pathLength: 0 },
              whileInView: { pathLength: 1 },
              viewport: { once: true },
              transition: { duration: 0.7 }
            }
          ) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-px w-16", style: { background: "var(--accent-maroon)" } })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap justify-center gap-2 mb-12", children: FILTERS.map((f) => {
      const active = filter === f;
      return /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          onClick: () => setFilter(f),
          className: "relative px-4 py-2 rounded-full font-mono-jb text-[11px] tracking-[0.15em] uppercase border transition-all hover:-translate-y-[2px]",
          style: {
            borderColor: active ? "var(--accent-maroon)" : "var(--border-lilac)",
            background: active ? "var(--accent-maroon)" : "var(--bg-primary)",
            color: active ? "var(--bg-primary)" : "var(--text-secondary)",
            boxShadow: active ? "0 6px 20px -8px var(--glow-maroon)" : "none"
          },
          children: [
            active && /* @__PURE__ */ jsxRuntimeExports.jsx(
              "span",
              {
                className: "absolute -top-1 -right-1 w-2 h-2 rounded-full animate-pulse",
                style: { background: "var(--accent-sage)", boxShadow: "0 0 8px var(--glow-sage)" }
              }
            ),
            f
          ]
        },
        f
      );
    }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { mode: "popLayout", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-10", children: visible.map((p, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.article,
      {
        layout: true,
        initial: { opacity: 0, y: 40 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: -20 },
        transition: { duration: 0.6, delay: i * 0.05, ease: [0.25, 1, 0.5, 1] },
        className: "group relative grid md:grid-cols-[1.1fr_1fr] gap-0 rounded-2xl overflow-hidden border transition-all hover:-translate-y-2",
        style: {
          borderColor: p.featured ? "var(--accent-maroon)" : "var(--border-maroon)",
          background: "var(--bg-primary)",
          boxShadow: p.featured ? "0 20px 60px -20px var(--glow-maroon), 0 0 0 1px var(--glow-lilac)" : "0 4px 24px -8px var(--glow-maroon)"
        },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "absolute left-0 top-0 bottom-0 w-1 transition-all group-hover:w-2",
              style: { background: p.accent, boxShadow: `0 0 16px ${p.accent}` }
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-8 md:p-10 order-2 md:order-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-mono-jb text-[11px] tracking-wider", style: { color: "var(--text-muted)" }, children: [
                p.idx,
                " · ",
                p.year,
                " · ",
                p.categories[0]
              ] }),
              p.featured && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "span",
                {
                  className: "inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full font-mono-jb text-[10px] tracking-wider",
                  style: { background: "var(--accent-maroon)", color: "var(--bg-primary)" },
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "w-3 h-3", fill: "currentColor" }),
                    "FEATURED",
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-1.5 h-1.5 rounded-full", style: { background: "var(--accent-sage)" } })
                  ]
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: "font-display text-[36px] md:text-[44px] font-bold leading-none transition-transform group-hover:translate-x-1",
                style: { color: "var(--text-primary)" },
                children: p.name
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display italic text-lg mt-3 mb-4", style: { color: "var(--text-secondary)" }, children: p.tagline }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[15px] leading-[1.7]", style: { color: "var(--text-body)" }, children: p.desc }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-5 flex flex-wrap gap-2", children: p.metrics.map((m) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "span",
              {
                className: "inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full font-mono-jb text-[11px]",
                style: {
                  background: "color-mix(in oklab, var(--accent-maroon) 8%, transparent)",
                  color: "var(--accent-maroon)",
                  border: "1px solid var(--border-maroon)"
                },
                children: [
                  m.sage && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-1.5 h-1.5 rounded-full", style: { background: "var(--accent-sage-deep)", boxShadow: "0 0 6px var(--glow-sage)" } }),
                  m.label
                ]
              },
              m.label
            )) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-5 flex flex-wrap gap-2", children: p.tech.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsx(
              "span",
              {
                className: "px-2.5 py-1 rounded-md font-mono-jb text-[10px] transition-all hover:scale-105",
                style: { background: "var(--bg-section-2)", color: "var(--accent-maroon)", border: "1px solid var(--border-lilac)" },
                children: t
              },
              t
            )) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex gap-5 font-mono-jb text-xs", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "a",
                {
                  href: p.github,
                  target: "_blank",
                  rel: "noopener noreferrer",
                  className: "inline-flex items-center gap-1.5 transition-colors hover:text-[var(--accent-maroon)]",
                  style: { color: "var(--text-yellow)" },
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Github, { className: "w-3.5 h-3.5" }),
                    " GitHub"
                  ]
                }
              ),
              p.live && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "a",
                {
                  href: p.live,
                  target: "_blank",
                  rel: "noopener noreferrer",
                  className: "inline-flex items-center gap-1.5 transition-colors hover:text-[var(--accent-maroon)]",
                  style: { color: "var(--text-yellow)" },
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(ExternalLink, { className: "w-3.5 h-3.5" }),
                    " Live"
                  ]
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "relative p-6 md:p-8 order-1 md:order-2 transition-transform duration-500 group-hover:scale-[1.02]",
              style: { background: p.tint },
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(ProjectImage, { name: p.name, image: p.image, accent: p.accent, tint: p.tint })
            }
          )
        ]
      },
      p.name
    )) }) })
  ] }) });
}
const skills = [
  { name: "Frontend Development", pct: 92 },
  { name: "Backend & APIs", pct: 78 },
  { name: "ML / Data Science", pct: 72 },
  { name: "Cloud & Databases", pct: 75 },
  { name: "Dev Tools & Workflow", pct: 80 }
];
const marquee = ["React.js", "Python", "Vite", "MySQL", "Wix", "Firebase", "Dev Cockpiece", "TypeScript", "FastAPI", "AWS Bedrock", "DynamoDB", "Tailwind", "Scikit-learn"];
function Skills() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "arsenal", className: "relative py-28 px-6 md:px-10", style: { background: "var(--bg-section-4)" }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-5xl mx-auto", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-mono-jb text-[11px] tracking-[0.25em] uppercase mb-3", style: { color: "var(--text-lilac)" }, children: "WHAT I BUILD WITH" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-[clamp(36px,5vw,56px)] font-bold", children: "Technical Arsenal" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-16 space-y-6", children: skills.map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-[180px_1fr_50px] items-center gap-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[15px]", style: { color: "var(--text-body)" }, children: s.name }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative h-2 rounded-full", style: { background: "var(--border-maroon)" }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.div,
        {
          initial: { width: 0 },
          whileInView: { width: `${s.pct}%` },
          viewport: { once: true },
          transition: { delay: i * 0.12, duration: 1, ease: [0.25, 1, 0.5, 1] },
          className: "absolute inset-y-0 left-0 rounded-full",
          style: { background: "linear-gradient(90deg, var(--accent-maroon-soft), var(--accent-maroon))" },
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "absolute -right-1 -top-1 w-4 h-4 rounded-full",
              style: { background: "var(--accent-yellow)", boxShadow: "0 0 8px var(--glow-yellow)" }
            }
          )
        }
      ) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-right font-mono-jb text-sm", style: { color: "var(--accent-maroon)" }, children: [
        s.pct,
        "%"
      ] })
    ] }, s.name)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-20 overflow-hidden border-y py-4", style: { borderColor: "var(--border-maroon)" }, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex animate-marquee whitespace-nowrap", children: [...marquee, ...marquee].map((m, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-mono-jb text-[13px] mx-5 flex items-center gap-5", style: { color: "var(--text-secondary)" }, children: [
      m,
      " ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { color: "var(--accent-yellow-warm)" }, children: "·" })
    ] }, i)) }) })
  ] }) });
}
const events = [
  { year: "2025", name: "Smart India Hackathon 2025", desc: "Built a full-stack government-problem prototype in 36 hours among 1,000s of national teams.", tint: "var(--accent-yellow)", Icon: Trophy },
  { year: "2025", name: "AI Bharat Hackathon 2025", desc: "Shipped an ML solution under tight 24-hour constraints with end-to-end deployment.", tint: "var(--accent-maroon-soft)", Icon: Sparkles },
  { year: "2024", name: "GDG On Campus Hackathon 2024", desc: "Live demo to industry judges. Praised for UX quality and product polish.", tint: "var(--accent-lilac)", Icon: Users },
  { year: "2026", name: "GSSoC 2026", desc: "3+ merged PRs across features, bugfixes, and docs via async Git workflows.", tint: "var(--accent-blush)", Icon: GitMerge }
];
function Hackathons() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "recognition", className: "relative py-28 px-6 md:px-10", style: { background: "var(--bg-section-5)" }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-5xl mx-auto", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-center text-[clamp(36px,5vw,60px)] font-bold leading-tight", children: "Compete. Contribute. Repeat.".split(" ").map((w, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.span,
      {
        initial: { opacity: 0, y: -30 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { delay: i * 0.15, duration: 0.6 },
        className: "inline-block mr-3",
        children: w
      },
      i
    )) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center mt-2 font-mono-jb text-[11px] tracking-[0.25em] uppercase", style: { color: "var(--text-lilac)" }, children: "Recognition & Impact" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-20 relative", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[2px]", style: { background: "var(--border-maroon)" } }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-12", children: events.map((e, i) => {
        const left = i % 2 === 0;
        const Icon = e.Icon;
        return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative grid grid-cols-[1fr_auto_1fr] items-center gap-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: left ? "" : "invisible", children: left && /* @__PURE__ */ jsxRuntimeExports.jsx(EventCard, { e, from: "left", Icon }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.div,
            {
              initial: { scale: 0 },
              whileInView: { scale: 1 },
              viewport: { once: true },
              transition: { duration: 0.5 },
              className: "relative w-4 h-4 rounded-full border-[3px]",
              style: { background: "var(--accent-maroon)", borderColor: "var(--accent-maroon)" },
              children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 rounded-full animate-ping", style: { background: "var(--accent-maroon)", opacity: 0.3 } })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: !left ? "" : "invisible", children: !left && /* @__PURE__ */ jsxRuntimeExports.jsx(EventCard, { e, from: "right", Icon }) })
        ] }, i);
      }) })
    ] })
  ] }) });
}
function EventCard({ e, from, Icon }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      initial: { opacity: 0, x: from === "left" ? -50 : 50 },
      whileInView: { opacity: 1, x: 0 },
      viewport: { once: true },
      transition: { duration: 0.6, ease: [0.25, 1, 0.5, 1] },
      className: "rounded-2xl p-6 border flex gap-4",
      style: { background: "var(--bg-primary)", borderColor: "var(--border-maroon)" },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "shrink-0 w-12 h-12 rounded-xl flex items-center justify-center", style: { background: e.tint, opacity: 0.95 }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "w-5 h-5", style: { color: "var(--text-primary)" } }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-2 font-mono-jb text-[11px]", style: { color: "var(--text-muted)" }, children: e.year }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-bold text-lg mt-1", style: { color: "var(--accent-maroon)" }, children: e.name }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm mt-1.5", style: { color: "var(--text-body)" }, children: e.desc })
        ] })
      ]
    }
  );
}
const certs = [
  "Google Cloud Cybersecurity",
  "AWS Generative AI Foundations",
  "AWS ML for NLP",
  "Oracle Database Foundations",
  "Cisco Junior Cybersecurity Analyst"
];
function Certs() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "relative py-12", style: { background: "var(--bg-section-2)" }, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-hidden group", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex animate-marquee whitespace-nowrap group-hover:[animation-play-state:paused]", children: [...certs, ...certs, ...certs].map((c, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      className: "mx-3 inline-flex items-center px-5 py-3 rounded-full border-l-[3px] border transition-all hover:scale-[1.06]",
      style: { background: "var(--bg-primary)", borderColor: "var(--border-lilac)", borderLeftColor: "var(--accent-maroon)" },
      children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-sans text-[13px]", style: { color: "var(--text-body)" }, children: c })
    },
    i
  )) }) }) });
}
const links = [
  {
    label: "nishi.shah.025@gmail.com",
    href: "mailto:nishi.shah.025@gmail.com",
    icon: "✉️",
    display: "Email"
  },
  {
    label: "Nishi577",
    href: "https://github.com/Nishi577",
    icon: "🐙",
    display: "GitHub"
  },
  {
    label: "nishi-shah-602607368",
    href: "https://linkedin.com/in/nishi-shah-602607368",
    icon: "💼",
    display: "LinkedIn"
  }
];
function Contact() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "contact", className: "relative overflow-hidden py-32 px-6 md:px-10", style: { background: "var(--bg-footer)" }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { "aria-hidden": true, className: "absolute -top-40 -left-20 w-[400px] h-[400px] rounded-full animate-breathe", style: { background: "var(--accent-maroon)", opacity: 0.12, filter: "blur(80px)" } }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { "aria-hidden": true, className: "absolute top-20 right-0 w-[300px] h-[300px] rounded-full animate-float-y", style: { background: "var(--accent-lilac)", opacity: 0.1, filter: "blur(80px)", animationDuration: "8s" } }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { "aria-hidden": true, className: "absolute bottom-0 left-1/3 w-[350px] h-[350px] rounded-full animate-drift", style: { background: "var(--accent-yellow)", opacity: 0.07, filter: "blur(80px)", animationDuration: "10s" } }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative max-w-4xl mx-auto text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-mono-jb text-[11px] tracking-[0.3em] uppercase", style: { color: "var(--accent-blush)" }, children: "Contact" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display font-bold leading-[1.05] mt-6", style: { fontSize: "clamp(48px, 8vw, 88px)", color: "#FAF6F0" }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(motion.span, { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.7 }, className: "block", children: "Let's Build" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(motion.span, { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { delay: 0.15, duration: 0.7 }, className: "block", children: "Something" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.span,
          {
            initial: { opacity: 0, y: 30 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true },
            transition: { delay: 0.3, duration: 0.7 },
            className: "block",
            style: { color: "var(--accent-yellow)" },
            children: "That Matters."
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-14 flex flex-wrap justify-center gap-8", children: links.map((l) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "a",
        {
          href: l.href,
          target: "_blank",
          rel: "noopener noreferrer",
          className: "group inline-flex items-center gap-1.5 text-xl transition-colors",
          style: { color: "#FAF6F0" },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "relative", children: [
              l.label,
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "span",
                {
                  className: "absolute -bottom-1 left-0 h-px w-full origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300",
                  style: { background: "var(--accent-yellow)" }
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { className: "w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-[var(--accent-yellow)]" })
          ]
        },
        l.label
      )) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "mt-24 pt-6 border-t flex flex-col md:flex-row items-center justify-between gap-3 font-mono-jb text-[11px]",
          style: { borderColor: "rgba(250,246,240,0.1)", color: "var(--text-muted)" },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: "© 2026 Nishi Shah" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-1.5 h-1.5 rounded-full animate-pulse", style: { background: "var(--accent-maroon-soft)" } }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-1.5 h-1.5 rounded-full animate-pulse", style: { background: "var(--accent-lilac)", animationDelay: "0.3s" } }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-1.5 h-1.5 rounded-full animate-pulse", style: { background: "var(--accent-yellow)", animationDelay: "0.6s" } })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: "Frontend · Full-Stack · ML" })
          ]
        }
      )
    ] })
  ] });
}
function MarqueeBand({
  reverse = false,
  bg = "var(--bg-primary)",
  color = "var(--accent-maroon)",
  items
}) {
  const repeated = [...items, ...items, ...items];
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative overflow-hidden py-6 border-y", style: { background: bg, borderColor: "var(--border-maroon)" }, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `flex whitespace-nowrap ${reverse ? "animate-marquee-reverse" : "animate-marquee"}`, children: repeated.map((t, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-display italic text-[28px] md:text-[40px] mx-8 flex items-center gap-8", style: { color }, children: [
    t,
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-block w-2.5 h-2.5 rounded-full", style: { background: "var(--accent-yellow-warm)" } })
  ] }, i)) }) });
}
function Index() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative min-h-screen overflow-x-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(FloatingObjects, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CustomCursor, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Navbar, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Hero, {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx(MarqueeBand, { items: ["Design", "Build", "Ship", "Iterate", "Repeat"] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(About, {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Projects, {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx(MarqueeBand, { reverse: true, bg: "var(--bg-section-4)", color: "var(--accent-lilac-deep)", items: ["Frontend", "Full-Stack", "Machine Learning", "Social Impact", "Open Source"] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Skills, {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Hackathons, {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Certs, {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Contact, {})
      ] })
    ] })
  ] });
}
export {
  Index as component
};
