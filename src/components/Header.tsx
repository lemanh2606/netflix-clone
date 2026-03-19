import { useState, useRef, useEffect, type JSX } from "react";

// ── SVG Icons ──────────────────────────────────────────────
function GlobeIcon() {
  return (
    <svg
      viewBox="0 0 16 16"
      width="16"
      height="16"
      fill="none"
      aria-hidden="true"
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M10.77 5.33 10.5 6 9.34 8.94l-.57 1.44L7.33 14h1.78l.73-1.97h3.58l.74 1.97H16l-3.43-8.67zm-.15 4.6-.24.63h2.51l-1.26-3.35zm-1.1-5.09.1-.19h-3.2V2h-1.5v2.65H.55V6h3.77A11 11 0 0 1 0 10.43c.33.28.81.8 1.05 1.16 1.5-.91 2.85-2.36 3.88-4.02v5.1h1.49V7.52q.6.95 1.33 1.8l.57-1.43a12 12 0 0 1-1.34-1.9h2.09z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function CaretDownIcon() {
  return (
    <svg
      viewBox="0 0 16 16"
      width="16"
      height="16"
      fill="none"
      aria-hidden="true"
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M11.6 6.5c.15 0 .22.18.12.28l-3.48 3.48a.33.33 0 0 1-.48 0L4.28 6.78a.17.17 0 0 1 .12-.28z"
        clipRule="evenodd"
      />
    </svg>
  );
}

// ── Language options ───────────────────────────────────────
const LANGS = [
  { value: "vi-VN", lang: "vi", label: "Tiếng Việt" },
  { value: "en-VN", lang: "en", label: "English" },
];

// ── Custom Language Dropdown ───────────────────────────────
function LanguagePicker(): JSX.Element {
  const [selected, setSelected] = useState("vi-VN");
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  // Đóng khi click ngoài
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const current = LANGS.find((l) => l.value === selected)!;

  return (
    <div ref={ref} style={{ position: "relative" }}>
      {/* Trigger button */}
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="listbox"
        aria-expanded={open}
        style={{
          display: "flex",
          alignItems: "center",
          gap: "6px",
          backgroundColor: "transparent",
          border: "1px solid rgba(255,255,255,0.7)",
          borderRadius: "4px",
          color: "#fff",
          fontSize: "0.85rem",
          padding: "5px 10px 5px 8px",
          cursor: "pointer",
          whiteSpace: "nowrap",
          transition: "border-color 0.15s",
        }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLButtonElement).style.borderColor = "#fff";
        }}
        onMouseLeave={(e) => {
          if (!open)
            (e.currentTarget as HTMLButtonElement).style.borderColor =
              "rgba(255,255,255,0.7)";
        }}
      >
        <GlobeIcon />
        <span>{current.label}</span>
        <CaretDownIcon />
      </button>

      {/* Dropdown list */}
      {open && (
        <ul
          role="listbox"
          style={{
            position: "absolute",
            top: "calc(100% + 4px)",
            right: 0,
            minWidth: "140px",
            backgroundColor: "#fff",
            borderRadius: "4px",
            boxShadow: "0 4px 16px rgba(0,0,0,0.4)",
            padding: "4px 0",
            margin: 0,
            listStyle: "none",
            zIndex: 100,
          }}
        >
          {LANGS.map((l) => (
            <li
              key={l.value}
              role="option"
              aria-selected={selected === l.value}
              onClick={() => {
                setSelected(l.value);
                setOpen(false);
              }}
              style={{
                padding: "10px 16px",
                fontSize: "0.9rem",
                cursor: "pointer",
                color: selected === l.value ? "#fff" : "#141414",
                backgroundColor:
                  selected === l.value ? "#0071eb" : "transparent",
                transition: "background-color 0.1s",
              }}
              onMouseEnter={(e) => {
                if (selected !== l.value)
                  (e.currentTarget as HTMLLIElement).style.backgroundColor =
                    "#f0f0f0";
              }}
              onMouseLeave={(e) => {
                if (selected !== l.value)
                  (e.currentTarget as HTMLLIElement).style.backgroundColor =
                    "transparent";
              }}
            >
              {l.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

// ── Header ─────────────────────────────────────────────────
export default function Header(): JSX.Element {
  return (
    <header className="w-full flex items-center justify-between py-4">
      {/* Logo Netflix */}
      <div className="w-[120px] md:w-[148px]">
        <svg
          viewBox="0 0 111 30"
          aria-hidden="true"
          role="img"
          className="w-full fill-[#E50914]"
        >
          <g>
            <path d="M105.06233,14.2806261 L110.999156,30 C109.249227,29.7497422 107.500234,29.4366857 105.718437,29.1554972 L102.374168,20.4686475 L98.9371075,28.4375293 C97.2499766,28.1563408 95.5928391,28.061674 93.9057081,27.8432843 L99.9372012,14.0931671 L94.4680851,-5.68434189e-14 L99.5313525,-5.68434189e-14 L102.593495,7.87421502 L105.874965,-5.68434189e-14 L110.999156,-5.68434189e-14 L105.06233,14.2806261 Z M90.4686475,-5.68434189e-14 L85.8749649,-5.68434189e-14 L85.8749649,27.2499766 C87.3746368,27.3437061 88.9371075,27.4055675 90.4686475,27.5930265 L90.4686475,-5.68434189e-14 Z M81.9055207,26.93692 C77.7186241,26.6557316 73.5307901,26.4064111 69.250164,26.3117443 L69.250164,-5.68434189e-14 L73.9366389,-5.68434189e-14 L73.9366389,21.8745899 C76.6248008,21.9373887 79.3120255,22.1557784 81.9055207,22.2804387 L81.9055207,26.93692 Z M64.2496954,10.6561065 L64.2496954,15.3435186 L57.8442216,15.3435186 L57.8442216,25.9996251 L53.2186709,25.9996251 L53.2186709,-5.68434189e-14 L66.3436123,-5.68434189e-14 L66.3436123,4.68741213 L57.8442216,4.68741213 L57.8442216,10.6561065 L64.2496954,10.6561065 Z M45.3435186,4.68741213 L45.3435186,26.2498828 C43.7810479,26.2498828 42.1876465,26.2498828 40.6561065,26.3117443 L40.6561065,4.68741213 L35.8121661,4.68741213 L35.8121661,-5.68434189e-14 L50.2183897,-5.68434189e-14 L50.2183897,4.68741213 L45.3435186,4.68741213 Z M30.749836,15.5928391 C28.687787,15.5928391 26.2498828,15.5928391 24.4999531,15.6875059 L24.4999531,22.6562939 C27.2499766,22.4678976 30,22.2495079 32.7809542,22.1557784 L32.7809542,26.6557316 L19.812541,27.6876933 L19.812541,-5.68434189e-14 L32.7809542,-5.68434189e-14 L32.7809542,4.68741213 L24.4999531,4.68741213 L24.4999531,10.9991564 C26.3126816,10.9991564 29.0936358,10.9054269 30.749836,10.9054269 L30.749836,15.5928391 Z M4.78114163,12.9684132 L4.78114163,29.3429562 C3.09401069,29.5313525 1.59340144,29.7497422 0,30 L0,-5.68434189e-14 L4.4690224,-5.68434189e-14 L10.562377,17.0315868 L10.562377,-5.68434189e-14 L15.2497891,-5.68434189e-14 L15.2497891,28.061674 C13.5935889,28.3437998 11.906458,28.4375293 10.1246602,28.6868498 L4.78114163,12.9684132 Z" />
          </g>
        </svg>
      </div>

      {/* Right: Language + Đăng nhập */}
      <div className="flex items-center gap-3">
        <LanguagePicker />

        <a
          href="/vn/login"
          style={{
            backgroundColor: "#E50914",
            color: "#fff",
            fontSize: "0.9rem",
            fontWeight: 700,
            padding: "6px 16px",
            borderRadius: "4px",
            textDecoration: "none",
            whiteSpace: "nowrap",
            transition: "background-color 0.15s",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLAnchorElement).style.backgroundColor =
              "#f6121d";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLAnchorElement).style.backgroundColor =
              "#E50914";
          }}
        >
          Đăng nhập
        </a>
      </div>
    </header>
  );
}
