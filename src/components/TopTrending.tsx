import { useRef, useState, useEffect, useCallback, type JSX } from "react";

interface TrendingItem {
  id: number;
  rank: number;
  title: string;
  image: string;
}

const TRENDING_ITEMS: TrendingItem[] = [
  {
    id: 1,
    rank: 1,
    title: "ONE PIECE",
    image:
      "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABcwMiAXNKvtzgN1Kx06ht1pT-yTXiVSQy0BKogrxRHkSiGZlRtWZbq2ROt1kkWqfM2PWVvgDNFMw73KTzVFP0dnMIY1MsQEVJIeBdS5U2PG52vbiBsX9ajBuOg6ZrWR1H_X-.webp?r=df5",
  },
  {
    id: 2,
    rank: 2,
    title: "Truy Tìm Long Diên Hương",
    image:
      "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABe6MqGF6TmVXRJujuNaQU2_Ao6E0e_Y6-j8pSt9oVMc2kLuQy6w8a8D3-7hHyUgImtRKx4MzsRSVwvJQ_WTIVWK2mmqIoZeTANs.webp?r=6fc",
  },
  {
    id: 3,
    rank: 3,
    title: "Tiếng yêu này, anh dịch được không?",
    image:
      "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABdEEpTPD2i5UbL6aDoB8RaTwLPQqAeZxjs3gV5-Culu5CluKKCSqV3j3GVi1pQdeZTzUYSntFNLYkg9Kc1Z44l6LUXXt0gqCto8ozdubABeY731Mgpfho1Gh9kK-qQk5B3eM.webp?r=607",
  },
  {
    id: 4,
    rank: 4,
    title: "Nghệ thuật lừa dối của Sarah",
    image:
      "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABbq6JqPo8VTKio0oVJulqFrmyU6owi1AOcJMvNyFWcF42F5HKcnNtt9yNBgxN2K-iRkrpJxHCS34kRdeFDRkaoS2WM7171k21xieFjKSGPWgAz-ZnPuqGlFSCzQDjlKfl0WX.webp?r=fc4",
  },
  {
    id: 5,
    rank: 5,
    title: "Bộ Tứ Báo Thủ",
    image:
      "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABU_gaT8leToBz9Q3Uvo5fN5d-Th9iW1Js-fQR1En-CbxkevRuqUNXyuY3k7Hc7JOgxTmj4Wbcal63aY_P4aEhOPhoBBTCCNOIKQ.webp?r=5fd",
  },
  {
    id: 6,
    rank: 6,
    title: "Bạn trai theo yêu cầu",
    image:
      "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABaLlHugYIMs8l-hCfV7EdM53IVwMEL_5sMooTrYLGa9IPffa8LjFFBkQ1PVCU5mHy2ob_keVQ9lV8k57HJOXyNUqj3aT3rTtvXpUvkZtLZtuul5QuHXT0ECO3OAKfoDSsXyy.webp?r=e76",
  },
  {
    id: 7,
    rank: 7,
    title: "Mai",
    image:
      "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABZcdeMf4uVu2pi4WeYl_GDZ2yUlPOnE2RICEWzhdXbrzcmdQU0V-ciPNY1diaH5UmfCQ568hAL8C6ZN9_HB9lV-5O-RLztMD_78.webp?r=2c0",
  },
  {
    id: 8,
    rank: 8,
    title: "Cỗ máy chiến tranh",
    image:
      "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABZQ5asHTs2Tiz5Tm7in_k0GPko5culrW0K3QTbtozOOMjBF9bzBtGrhSGnxEa1xPjs_vwOlzvgtnJxhEnXlKI3uEXDRSy6ga303y6L1oLImpR_MTWzdNpmKaWsp_aotN1bOT.webp?r=a94",
  },
  {
    id: 9,
    rank: 9,
    title: "Bridgerton",
    image:
      "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABXkP0fbEQnghb9m7rZfpuQGiN5E4Mi92--Iefy8w7_38Ny5PmhARhFznX6UKh4DHIeXoijoCwvsP00swZQ-jTQxf9ACmscAPc_5cjDXWItBehJpudiuzcw-E5niDof_Ok_jO.webp?r=fb9",
  },
  {
    id: 10,
    rank: 10,
    title: "Trục ngọc",
    image:
      "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABZjSNWUZekBxi55x6N7LCmYKxRlFZnHaKI5RK6MlsoWG8Krw5z3b57vRX-slAjXASxFBvtus58D3iQCYGK-cEvU_RfAmlQAmHV4.webp?r=1ba",
  },
];

function ArrowButton({
  direction,
  onClick,
  visible,
}: {
  direction: "left" | "right";
  onClick: () => void;
  visible: boolean;
}): JSX.Element {
  return (
    <div
      aria-hidden="true"
      style={{
        position: "absolute",
        top: 0,
        bottom: 0,
        ...(direction === "right" ? { right: 0 } : { left: 0 }),
        zIndex: 30,
        // Fade gradient như Netflix
        background:
          direction === "right"
            ? "linear-gradient(to left, rgba(0,0,0,0.7) 0%, transparent 100%)"
            : "linear-gradient(to right, rgba(0,0,0,0.7) 0%, transparent 100%)",
        width: "80px",
        display: "flex",
        alignItems: "center",
        justifyContent: direction === "right" ? "flex-end" : "flex-start",
        opacity: visible ? 1 : 0,
        pointerEvents: visible ? "auto" : "none",
        transition: "opacity 0.2s ease",
      }}
    >
      <button
        aria-label={direction === "right" ? "Tiếp theo" : "Trước"}
        onClick={onClick}
        style={{
          // Netflix style: nền trong suốt, chỉ có icon
          background: "none",
          border: "none",
          cursor: "pointer",
          color: "#fff",
          padding: "8px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "50%",
          transition: "transform 0.15s ease",
        }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLButtonElement).style.transform = "scale(1.2)";
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLButtonElement).style.transform = "scale(1)";
        }}
      >
        <svg
          viewBox="0 0 24 24"
          width="24"
          height="24"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          role="img"
        >
          {direction === "right" ? (
            // ChevronRightMedium
            <path
              fill="currentColor"
              fillRule="evenodd"
              d="m15.586 12-7.293 7.293 1.414 1.414 8-8a1 1 0 0 0 0-1.414l-8-8-1.414 1.414z"
              clipRule="evenodd"
            />
          ) : (
            // ChevronLeftMedium — đúng path từ HTML Netflix
            <path
              fill="currentColor"
              fillRule="evenodd"
              d="m8.414 12 7.293 7.293-1.414 1.414-8-8a1 1 0 0 1 0-1.414l8-8 1.414 1.414z"
              clipRule="evenodd"
            />
          )}
        </svg>
      </button>
    </div>
  );
}

// ── Card ──────────────────────────────────────────────────
function TrendingCard({ item }: { item: TrendingItem }): JSX.Element {
  const POSTER_W = 182;
  const POSTER_H = 252;
  const NUM_W = 90;
  const OVERLAP = 35;

  return (
    <li
      className="flex-shrink-0 flex items-end"
      style={{ height: `${POSTER_H}px` }}
    >
      {/* Số rank */}
      <div
        className="flex-shrink-0 flex items-end justify-center"
        style={{
          width: `${NUM_W}px`,
          height: `${POSTER_H - 20}px`,
          position: "relative",
          zIndex: 20,
        }}
      >
        <span
          aria-hidden="true"
          className="font-black leading-none select-none"
          style={{
            fontSize: item.rank >= 10 ? "5.5rem" : "6.5rem",
            color: "#000",
            WebkitTextStroke: "2.5px #ffffff",
            paintOrder: "stroke fill",
            letterSpacing: "-0.02em",
          }}
        >
          {item.rank}
        </span>
      </div>

      {/* Poster */}
      <div
        className="flex-shrink-0 relative group cursor-pointer"
        style={{
          marginLeft: `-${OVERLAP}px`,
          width: `${POSTER_W}px`,
          zIndex: 10,
        }}
      >
        <span
          className="block w-full group-hover:scale-105 transition-transform duration-300 origin-bottom"
          style={{
            height: `${POSTER_H}px`,
            width: `${POSTER_W}px`,
            backgroundImage: item.image ? `url("${item.image}")` : "none",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            borderRadius: "8px",
            display: "block",
          }}
          role="img"
          aria-label={item.title}
        />
      </div>
    </li>
  );
}

// ── Main ──────────────────────────────────────────────────
export default function TopTrending(): JSX.Element {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canLeft, setCanLeft] = useState(false);
  const [canRight, setCanRight] = useState(true);
  const [hovered, setHovered] = useState(false); // ← hover state của section

  const updateArrows = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    setCanLeft(el.scrollLeft > 4);
    setCanRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 4);
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    updateArrows();
    el.addEventListener("scroll", updateArrows);
    window.addEventListener("resize", updateArrows);
    return () => {
      el.removeEventListener("scroll", updateArrows);
      window.removeEventListener("resize", updateArrows);
    };
  }, [updateArrows]);

  const scroll = (dir: "left" | "right") => {
    scrollRef.current?.scrollBy({
      left: dir === "right" ? 600 : -600,
      behavior: "smooth",
    });
  };

  return (
    <section className="w-full mb-14 md:mb-16 bg-black">
      <h2 className="text-white text-xl md:text-2xl font-bold mb-2 px-6 md:px-14">
        Hiện đang thịnh hành
      </h2>

      <div
        className="relative px-10"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {/* ← Arrow trái — gắn thẳng vào parent relative */}
        <ArrowButton
          direction="left"
          onClick={() => scroll("left")}
          visible={hovered && canLeft} // ← gộp 2 điều kiện
        />

        {/* Fade trái */}
        {canLeft && (
          <div
            className="absolute left-10 top-0 bottom-0 w-16 z-20 pointer-events-none"
            style={{
              background: "linear-gradient(to right, #000 40%, transparent)",
            }}
          />
        )}

        {/* Scrollable */}
        <div
          ref={scrollRef}
          className="overflow-x-auto"
          style={{
            overflowY: "visible",
            scrollbarWidth: "none",
            paddingTop: "12px",
            paddingBottom: "12px",
          }}
        >
          <ul className="flex" style={{ width: "max-content", gap: "4px" }}>
            {TRENDING_ITEMS.map((item) => (
              <TrendingCard key={item.id} item={item} />
            ))}
          </ul>
        </div>

        {/* Fade phải */}
        {canRight && (
          <div
            className="absolute right-10 top-0 bottom-0 w-16 z-20 pointer-events-none"
            style={{
              background: "linear-gradient(to left, #000 40%, transparent)",
            }}
          />
        )}

        {/* ← Arrow phải — gắn thẳng vào parent relative */}
        <ArrowButton
          direction="right"
          onClick={() => scroll("right")}
          visible={hovered && canRight} // ← gộp 2 điều kiện
        />
      </div>
    </section>
  );
}
