import { Q as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { Q as QueryClientProvider } from "../_libs/tanstack__react-query.mjs";
import { c as createRouter, a as createRootRouteWithContext, u as useRouter, L as Link, O as Outlet, H as HeadContent, S as Scripts, b as createFileRoute, l as lazyRouteComponent } from "../_libs/tanstack__react-router.mjs";
import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/isbot.mjs";
const appCss = "/assets/styles-D_Rsjw3u.css";
function reportLovableError(error, context = {}) {
  if (typeof window === "undefined") return;
  window.__lovableEvents?.captureException?.(
    error,
    {
      source: "react_error_boundary",
      route: window.location.pathname,
      ...context
    },
    {
      mechanism: "react_error_boundary",
      handled: false,
      severity: "error"
    }
  );
}
const COLORS = ["#7B1C3E", "#A78BFA", "#F5D547", "#c94478", "#c9a8fb", "#f9e87a"];
function spawnGlitter(particles, x, y, strong) {
  const count = strong ? 38 : 4;
  for (let i = 0; i < count; i++) {
    const angle = Math.random() * Math.PI * 2;
    const speed = strong ? Math.random() * 9 + 3 : Math.random() * 4 + 1;
    particles.push({
      x,
      y,
      vx: Math.cos(angle) * speed,
      vy: Math.sin(angle) * speed - (strong ? Math.random() * 5 + 2 : Math.random() * 2),
      size: strong ? Math.random() * 5 + 2 : Math.random() * 3 + 1,
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
      alpha: strong ? 1 : 0.85,
      decay: Math.random() * 0.022 + 0.012,
      gravity: 0.18,
      rotation: Math.random() * Math.PI * 2,
      rotSpeed: (Math.random() - 0.5) * 0.3,
      shape: Math.random() > 0.5 ? "star" : "dot"
    });
  }
  if (strong) {
    for (let i = 0; i < 6; i++) {
      const angle = Math.random() * Math.PI * 2;
      const speed = Math.random() * 7 + 4;
      particles.push({
        x,
        y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed - Math.random() * 4 - 2,
        size: Math.random() * 10 + 6,
        color: COLORS[Math.floor(Math.random() * COLORS.length)],
        alpha: 0.6,
        decay: 0.018,
        gravity: 0.22,
        rotation: 0,
        rotSpeed: 0,
        shape: "blob"
      });
    }
  }
}
function drawStar(ctx, x, y, r, rotation) {
  ctx.beginPath();
  for (let i = 0; i < 8; i++) {
    const a = rotation + i * Math.PI / 4;
    const radius = i % 2 === 0 ? r : r * 0.45;
    i === 0 ? ctx.moveTo(x + Math.cos(a) * radius, y + Math.sin(a) * radius) : ctx.lineTo(x + Math.cos(a) * radius, y + Math.sin(a) * radius);
  }
  ctx.closePath();
}
function SplashCursor() {
  const canvasRef = reactExports.useRef(null);
  reactExports.useEffect(() => {
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
    const particles = [];
    let lastMove = 0;
    const onMove = (e) => {
      const now = performance.now();
      if (now - lastMove < 40) return;
      lastMove = now;
      spawnGlitter(particles, e.clientX, e.clientY, false);
    };
    const onDown = (e) => spawnGlitter(particles, e.clientX, e.clientY, true);
    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mousedown", onDown, { passive: true });
    let raf = 0;
    const tick = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        p.vy += p.gravity;
        p.vx *= 0.97;
        p.alpha -= p.decay;
        p.size *= 0.98;
        p.rotation += p.rotSpeed;
        if (p.alpha <= 0 || p.size < 0.3) {
          particles.splice(i, 1);
          continue;
        }
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
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "canvas",
    {
      ref: canvasRef,
      "aria-hidden": "true",
      style: {
        position: "fixed",
        inset: 0,
        width: "100vw",
        height: "100vh",
        pointerEvents: "none",
        zIndex: 9998
      }
    }
  );
}
function MascotFloat() {
  const [visible, setVisible] = reactExports.useState(false);
  const [position, setPosition] = reactExports.useState(null);
  reactExports.useEffect(() => {
    const hero = document.getElementById("top");
    if (!hero) return;
    const computePosition = () => {
      const h1 = hero.querySelector("h1");
      if (!h1) return;
      const spans = h1.querySelectorAll("span");
      let buildSpan = null;
      spans.forEach((span) => {
        if (span.textContent?.includes("Build")) buildSpan = span;
      });
      const target = buildSpan ?? h1;
      let offsetTop = 30;
      let offsetLeft = 0;
      let el = target;
      while (el) {
        offsetTop += el.offsetTop;
        offsetLeft += el.offsetLeft;
        el = el.offsetParent;
      }
      setPosition({
        top: offsetTop + target.offsetHeight / 2 - 30,
        left: offsetLeft + target.offsetWidth - 345
      });
    };
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          computePosition();
          setVisible(true);
        } else {
          setVisible(false);
        }
      },
      { threshold: 0.85 }
    );
    observer.observe(hero);
    window.addEventListener("resize", computePosition);
    return () => {
      observer.disconnect();
      window.removeEventListener("resize", computePosition);
    };
  }, []);
  if (!visible || !position) return null;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "video",
    {
      autoPlay: true,
      loop: true,
      muted: true,
      playsInline: true,
      "aria-hidden": "true",
      style: {
        position: "absolute",
        // ← was "fixed", now tracks with page
        top: position.top,
        left: position.left,
        width: "135px",
        height: "135px",
        zIndex: 9999,
        pointerEvents: "none",
        objectFit: "contain"
      },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("source", { src: "/mascot/mascot_wave.webm", type: "video/webm" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("source", { src: "/mascot/mascot_wave.mp4", type: "video/mp4" })
      ]
    }
  );
}
const MASCOT_OFFSET_FROM_SECTION_TOP_PX = 150;
function MascotRunner() {
  const [go, setGo] = reactExports.useState(false);
  const [runKey, setRunKey] = reactExports.useState(0);
  const [sectionTop, setSectionTop] = reactExports.useState(null);
  const intervalRef = reactExports.useRef(null);
  const computeSectionTop = () => {
    const section = document.getElementById("arsenal");
    if (!section) return;
    let top = 0;
    let el = section;
    while (el) {
      top += el.offsetTop;
      el = el.offsetParent;
    }
    setSectionTop(top + MASCOT_OFFSET_FROM_SECTION_TOP_PX);
  };
  reactExports.useEffect(() => {
    const section = document.getElementById("arsenal");
    if (!section) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          computeSectionTop();
          setGo(true);
          setRunKey((k) => k + 1);
          intervalRef.current = setInterval(() => {
            setRunKey((k) => k + 1);
          }, 9e3);
        } else {
          setGo(false);
          if (intervalRef.current) {
            clearInterval(intervalRef.current);
            intervalRef.current = null;
          }
        }
      },
      { threshold: 0.25 }
    );
    observer.observe(section);
    window.addEventListener("resize", computeSectionTop);
    return () => {
      observer.disconnect();
      window.removeEventListener("resize", computeSectionTop);
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);
  if (!go || sectionTop === null) return null;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("style", { children: `
                @keyframes mascot-run-across {
                    0%   { left: -80px; }
                    100% { left: 110vw; }
                }
                .mascot-run-anim {
                    animation: mascot-run-across 11s linear forwards;
                }
            ` }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "video",
      {
        autoPlay: true,
        loop: true,
        muted: true,
        playsInline: true,
        "aria-hidden": "true",
        className: "mascot-run-anim",
        style: {
          position: "absolute",
          // ← tracks with document
          top: `${sectionTop}px`,
          // ← absolute doc position
          left: 0,
          // animation handles horizontal
          width: "160px",
          height: "160px",
          objectFit: "contain",
          pointerEvents: "none",
          zIndex: 9999,
          imageRendering: "pixelated"
        },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("source", { src: "/mascot/mascot_run.webm", type: "video/webm" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("source", { src: "/mascot/mascot_run.mp4", type: "video/mp4" })
        ]
      },
      runKey
    )
  ] });
}
function NotFoundComponent() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-7xl font-bold text-foreground", children: "404" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-4 text-xl font-semibold text-foreground", children: "Page not found" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "The page you're looking for doesn't exist or has been moved." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Link,
      {
        to: "/",
        className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
        children: "Go home"
      }
    ) })
  ] }) });
}
function ErrorComponent({ error, reset }) {
  console.error(error);
  const router = useRouter();
  reactExports.useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-xl font-semibold tracking-tight text-foreground", children: "This page didn't load" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "Something went wrong on our end. You can try refreshing or head back home." }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex flex-wrap justify-center gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: () => {
            router.invalidate();
            reset();
          },
          className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
          children: "Try again"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "a",
        {
          href: "/",
          className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
          children: "Go home"
        }
      )
    ] })
  ] }) });
}
const Route$1 = createRootRouteWithContext()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Lovable App" },
      { name: "description", content: "Lovable Generated Project" },
      { name: "author", content: "Lovable" },
      { property: "og:title", content: "Lovable App" },
      { property: "og:description", content: "Lovable Generated Project" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:site", content: "@Lovable" }
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700;800&family=DM+Sans:ital,wght@0,400;0,500;0,700;1,400;1,500&family=JetBrains+Mono:wght@400;500&display=swap"
      }
    ]
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent
});
function RootShell({ children }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("html", { lang: "en", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("head", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(HeadContent, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("body", { children: [
      children,
      /* @__PURE__ */ jsxRuntimeExports.jsx(Scripts, {})
    ] })
  ] });
}
function RootComponent() {
  const { queryClient } = Route$1.useRouteContext();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(QueryClientProvider, { client: queryClient, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Outlet, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SplashCursor, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(MascotRunner, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(MascotFloat, {})
  ] });
}
const $$splitComponentImporter = () => import("./index-LCaPHtJX.mjs");
const Route = createFileRoute("/")({
  head: () => ({
    meta: [{
      title: "Nishi Shah — Frontend Engineer, Full-Stack Developer & ML Builder"
    }, {
      name: "description",
      content: "Portfolio of Nishi Shah — frontend-focused full-stack developer and social impact technologist building ML-powered products that matter."
    }, {
      property: "og:title",
      content: "Nishi Shah — Portfolio"
    }, {
      property: "og:description",
      content: "Frontend, full-stack, and ML projects with social impact."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter, "component")
});
const IndexRoute = Route.update({
  id: "/",
  path: "/",
  getParentRoute: () => Route$1
});
const rootRouteChildren = {
  IndexRoute
};
const routeTree = Route$1._addFileChildren(rootRouteChildren)._addFileTypes();
const getRouter = () => {
  const queryClient = new QueryClient();
  const router = createRouter({
    routeTree,
    context: { queryClient },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0
  });
  return router;
};
export {
  getRouter
};
