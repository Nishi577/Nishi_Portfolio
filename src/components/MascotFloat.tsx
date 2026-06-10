// import { useEffect, useRef, useState } from "react";

// export default function MascotFloat() {
//     const [visible, setVisible] = useState(false);
//     const [position, setPosition] = useState<{ top: number; left: number } | null>(null);

//     useEffect(() => {
//         const hero = document.getElementById("top");
//         if (!hero) return;

//         const computePosition = () => {
//             const h1 = hero.querySelector("h1");
//             if (!h1) return;

//             const spans = h1.querySelectorAll("span");
//             let buildSpan: Element | null = null;
//             spans.forEach((span) => {
//                 if (span.textContent?.includes("Build")) buildSpan = span;
//             });

//             const target = buildSpan ?? h1;
//             const rect = (target as HTMLElement).getBoundingClientRect();
//             setPosition({
//                 top: rect.top + rect.height / 2 - 165,
//                 left: rect.right - 175,
//             });
//         };

//         const observer = new IntersectionObserver(
//             ([entry]) => {
//                 if (entry.isIntersecting) {
//                     computePosition();
//                     setVisible(true);
//                 } else {
//                     setVisible(false);
//                 }
//             },
//             { threshold: 0.85 }
//         );

//         observer.observe(hero);
//         window.addEventListener("resize", computePosition);
//         return () => {
//             observer.disconnect();
//             window.removeEventListener("resize", computePosition);
//         };
//     }, []);

//     if (!visible || !position) return null;

//     return (
//         <video
//             autoPlay
//             loop
//             muted
//             playsInline
//             aria-hidden="true"
//             style={{
//                 position: "fixed",
//                 top: position.top,
//                 left: position.left,
//                 width: "88px",
//                 height: "88px",
//                 zIndex: 9999,
//                 pointerEvents: "none",
//                 objectFit: "contain",
//                 // No mixBlendMode needed — WebM handles transparency natively
//             }}
//         >
//             {/* WebM with alpha = true transparency, no background bleed */}
//             <source src="/mascot/mascot_wave.webm" type="video/webm" />
//             {/* MP4 fallback (will show bg on Safari, but WebM covers Chrome/Firefox) */}
//             <source src="/mascot/mascot_wave.mp4" type="video/mp4" />
//         </video>
//     );
// }



import { useEffect, useRef, useState } from "react";

export default function MascotFloat() {
    const [visible, setVisible] = useState(false);
    const [position, setPosition] = useState<{ top: number; left: number } | null>(null);

    useEffect(() => {
        const hero = document.getElementById("top");
        if (!hero) return;

        const computePosition = () => {
            const h1 = hero.querySelector("h1");
            if (!h1) return;

            const spans = h1.querySelectorAll("span");
            let buildSpan: Element | null = null;
            spans.forEach((span) => {
                if (span.textContent?.includes("Build")) buildSpan = span;
            });

            const target = (buildSpan ?? h1) as HTMLElement;

            // Walk up to get absolute offset from document top
            let offsetTop = 30;
            let offsetLeft = 0;
            let el: HTMLElement | null = target;
            while (el) {
                offsetTop += el.offsetTop;
                offsetLeft += el.offsetLeft;
                el = el.offsetParent as HTMLElement | null;
            }

            setPosition({
                top: offsetTop + target.offsetHeight / 2 - 30,
                left: offsetLeft + target.offsetWidth - 345,
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

    return (
        <video
            autoPlay
            loop
            muted
            playsInline
            aria-hidden="true"
            style={{
                position: "absolute",   // ← was "fixed", now tracks with page
                top: position.top,
                left: position.left,
                width: "135px",
                height: "135px",
                zIndex: 9999,
                pointerEvents: "none",
                objectFit: "contain",
            }}
        >
            <source src="/mascot/mascot_wave.webm" type="video/webm" />
            <source src="/mascot/mascot_wave.mp4" type="video/mp4" />
        </video>
    );
}