import { type JSX } from "react";
import MovieGrid from "./MovieGrid";
import CurveContainer from "./CurveContainer";
import HeroEmailForm from "./HeroEmailForm";

export default function HeroBanner(): JSX.Element {
  return (
    <section
      className="relative w-full overflow-hidden"
      style={{ minHeight: "92vh" }}
    >
      {/* ── Layer 1: Background poster grid ── */}
      <div className="absolute inset-0 z-0">
        <MovieGrid />
      </div>

      {/* ── Layer 2: Top → Bottom overlay ── */}
      <div
        className="absolute inset-0 z-10"
        style={{
          background:
            "linear-gradient(to bottom, rgba(0,0,0,0.35) 0%, rgba(0,0,0,0.6) 45%, rgba(0,0,0,0.95) 100%)",
        }}
      />

      {/* ── Layer 3: Left & Right vignette ── */}
      <div
        className="absolute inset-0 z-10"
        style={{
          background:
            "linear-gradient(to right, rgba(0,0,0,0.75) 0%, transparent 18%, transparent 82%, rgba(0,0,0,0.75) 100%)",
        }}
      />

      {/* ── Layer 4: Content ── */}
      <div
        className="relative z-20 flex flex-col items-center justify-center text-center h-full px-4"
        style={{ minHeight: "92vh" }}
      >
        {/* Heading */}
        <h1
          className="text-4xl md:text-5xl lg:text-[3.6rem] font-black text-white max-w-2xl leading-tight mb-5"
          style={{ textShadow: "2px 2px 10px rgba(0,0,0,0.7)" }}
        >
          Phim, series không giới hạn và nhiều nội dung khác
        </h1>

        {/* Price */}
        <p
          className="text-base md:text-xl font-semibold text-white mb-6"
          style={{ textShadow: "1px 1px 6px rgba(0,0,0,0.8)" }}
        >
          Giá từ <span className="underline underline-offset-2">74.000 đ</span>.{" "}
          Hủy bất kỳ lúc nào.
        </p>

        {/* Email Form — floating label, giống Netflix gốc */}
        <HeroEmailForm />
      </div>

      {/* ── Curved bottom divider ── */}
      <CurveContainer />
    </section>
  );
}
