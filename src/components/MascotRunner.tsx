// import { useEffect, useRef, useState } from "react";

// export default function MascotRunner() {
//     const [go, setGo] = useState(false);
//     const [runKey, setRunKey] = useState(0);
//     const [barY, setBarY] = useState<number | null>(null);
//     const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

//     useEffect(() => {
//         const section = document.getElementById("arsenal");
//         if (!section) return;

//         const computeBarY = () => {
//             const firstBar = section.querySelector(".h-2.rounded-full");
//             if (firstBar) {
//                 const rect = (firstBar as HTMLElement).getBoundingClientRect();
//                 setBarY(window.innerHeight - rect.top - 4);
//             }
//         };

//         const observer = new IntersectionObserver(
//             ([entry]) => {
//                 if (entry.isIntersecting) {
//                     computeBarY();
//                     setGo(true);
//                     setRunKey(k => k + 1);
//                     intervalRef.current = setInterval(() => {
//                         computeBarY();
//                         setRunKey(k => k + 1);
//                     }, 9000);
//                 } else {
//                     setGo(false);
//                     if (intervalRef.current) {
//                         clearInterval(intervalRef.current);
//                         intervalRef.current = null;
//                     }
//                 }
//             },
//             { threshold: 0.25 }
//         );

//         observer.observe(section);
//         window.addEventListener("resize", computeBarY);
//         return () => {
//             observer.disconnect();
//             window.removeEventListener("resize", computeBarY);
//             if (intervalRef.current) clearInterval(intervalRef.current);
//         };
//     }, []);

//     if (!go || barY === null) return null;

//     return (
//         <>
//             <style>{`
//                 @keyframes mascot-run-across {
//                     0%   { left: -80px; }
//                     100% { left: 110vw; }
//                 }
//                 .mascot-run-anim {
//                     animation: mascot-run-across 11s linear forwards;
//                 }
//             `}</style>
//             <video
//                 key={runKey}
//                 autoPlay
//                 loop
//                 muted
//                 playsInline
//                 aria-hidden="true"
//                 className="mascot-run-anim"
//                 style={{
//                     position: "fixed",
//                     bottom: `${barY}px`,
//                     width: "72px",
//                     height: "72px",
//                     objectFit: "contain",
//                     pointerEvents: "none",
//                     zIndex: 9999,
//                     imageRendering: "pixelated",
//                 }}
//             >
//                 <source src="/mascot/mascot_run.webm" type="video/webm" />
//                 <source src="/mascot/mascot_run.mp4" type="video/mp4" />
//             </video>
//         </>
//     );
// }

// import { useEffect, useRef, useState } from "react";
// const MASCOT_BOTTOM_PX = 120;

// export default function MascotRunner() {
//     const [go, setGo] = useState(false);
//     const [runKey, setRunKey] = useState(0);
//     const [barY, setBarY] = useState<number | null>(null);
//     const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

//     useEffect(() => {
//         const section = document.getElementById("arsenal");
//         if (!section) return;

//         const computeBarY = () => {
//             const firstBar = section.querySelector(".h-2.rounded-full");
//             if (firstBar) {
//                 const rect = (firstBar as HTMLElement).getBoundingClientRect();
//                 setBarY(window.innerHeight - rect.top - 4);
//             }
//         };

//         const observer = new IntersectionObserver(
//             ([entry]) => {
//                 if (entry.isIntersecting) {
//                     computeBarY();
//                     setGo(true);
//                     setRunKey(k => k + 1);
//                     intervalRef.current = setInterval(() => {
//                         computeBarY();
//                         setRunKey(k => k + 1);
//                     }, 9000);
//                 } else {
//                     setGo(false);
//                     if (intervalRef.current) {
//                         clearInterval(intervalRef.current);
//                         intervalRef.current = null;
//                     }
//                 }
//             },
//             { threshold: 0.25 }
//         );

//         observer.observe(section);
//         window.addEventListener("resize", computeBarY);
//         return () => {
//             observer.disconnect();
//             window.removeEventListener("resize", computeBarY);
//             if (intervalRef.current) clearInterval(intervalRef.current);
//         };
//     }, []);

//     if (!go || barY === null) return null;

//     return (
//         <>
//             <style>{`
//                 @keyframes mascot-run-across {
//                     0%   { left: -80px; }
//                     100% { left: 110vw; }
//                 }
//                 .mascot-run-anim {
//                     animation: mascot-run-across 11s linear forwards;
//                 }
//             `}</style>
//             <video
//                 key={runKey}
//                 autoPlay
//                 loop
//                 muted
//                 playsInline
//                 aria-hidden="true"
//                 className="mascot-run-anim"
//                 style={{
//                     position: "fixed",
//                     bottom: `${barY}px`,
//                     width: "140px",
//                     height: "140px",
//                     objectFit: "contain",
//                     pointerEvents: "none",
//                     zIndex: 9999,
//                     imageRendering: "pixelated",
//                 }}
//             >
//                 <source src="/mascot/mascot_run.webm" type="video/webm" />
//                 <source src="/mascot/mascot_run.mp4" type="video/mp4" />
//             </video>
//         </>
//     );
// }



import { useEffect, useRef, useState } from "react";

// ✏️ pixels ABOVE the top of #arsenal section
const MASCOT_OFFSET_FROM_SECTION_TOP_PX = 150;

export default function MascotRunner() {
    const [go, setGo] = useState(false);
    const [runKey, setRunKey] = useState(0);
    const [sectionTop, setSectionTop] = useState<number | null>(null);
    const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

    const computeSectionTop = () => {
        const section = document.getElementById("arsenal");
        if (!section) return;

        // Walk offsetParent chain to get absolute doc position
        let top = 0;
        let el: HTMLElement | null = section;
        while (el) {
            top += el.offsetTop;
            el = el.offsetParent as HTMLElement | null;
        }

        setSectionTop(top + MASCOT_OFFSET_FROM_SECTION_TOP_PX);
    };

    useEffect(() => {
        const section = document.getElementById("arsenal");
        if (!section) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    computeSectionTop();
                    setGo(true);
                    setRunKey(k => k + 1);
                    intervalRef.current = setInterval(() => {
                        setRunKey(k => k + 1);
                    }, 9000);
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

    return (
        <>
            <style>{`
                @keyframes mascot-run-across {
                    0%   { left: -80px; }
                    100% { left: 110vw; }
                }
                .mascot-run-anim {
                    animation: mascot-run-across 11s linear forwards;
                }
            `}</style>
            <video
                key={runKey}
                autoPlay
                loop
                muted
                playsInline
                aria-hidden="true"
                className="mascot-run-anim"
                style={{
                    position: "absolute",   // ← tracks with document
                    top: `${sectionTop}px`, // ← absolute doc position
                    left: 0,               // animation handles horizontal
                    width: "160px",
                    height: "160px",
                    objectFit: "contain",
                    pointerEvents: "none",
                    zIndex: 9999,
                    imageRendering: "pixelated",
                }}
            >
                <source src="/mascot/mascot_run.webm" type="video/webm" />
                <source src="/mascot/mascot_run.mp4" type="video/mp4" />
            </video>
        </>
    );
}