import { useState, useEffect } from "react";

export default function CurveContainer() {
  const [style, setStyle] = useState({ width: "200%", left: "-50%" });

  useEffect(() => {
    const update = () => {
      const w = window.innerWidth;
      if (w >= 1920) setStyle({ width: "120%", left: "-10%" });
      else if (w >= 1280) setStyle({ width: "130%", left: "-15%" });
      else if (w >= 960) setStyle({ width: "150%", left: "-25%" });
      else if (w >= 600) setStyle({ width: "180%", left: "-40%" });
      else setStyle({ width: "200%", left: "-50%" });
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return (
    <div
      className="absolute bottom-0 left-0 right-0 z-20 overflow-hidden"
      style={{ height: "80px" }}
    >
      <div
        style={{
          boxSizing: "border-box",
          position: "absolute",
          height: "100%",
          top: 0,
          margin: "auto",
          display: "flex",
          alignItems: "center",
          border: "solid 0.25rem transparent",
          borderTopLeftRadius: "50% 100%",
          borderTopRightRadius: "50% 100%",
          borderBottom: "none",
          background: `
            radial-gradient(
              50% 500% at 50% -420%,
              rgba(64, 97, 231, 0.4) 80%,
              rgba(0, 0, 0, 0.1) 100%
            ),
            black
          `,
          backgroundClip: "padding-box",
          ...style,
        }}
      >
        {/* Giả lập ::before */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            zIndex: -1,
            marginTop: "-0.25rem",
            borderRadius: "inherit",
            background: `linear-gradient(
              to right,
              rgba(33, 13, 22, 1) 16%,
              rgba(184, 40, 105, 1),
              rgba(229, 9, 20, 1),
              rgba(184, 40, 105, 1),
              rgba(33, 13, 22, 1) 84%
            )`,
          }}
        />
      </div>
    </div>
  );
}
