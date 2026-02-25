"use client";

import { useRef } from "react";

const ChevronLeft = () => (
  <svg viewBox="0 0 100 100" width="24" height="24">
    <path d="M 10,50 L 60,100 L 70,90 L 30,50 L 70,10 L 60,0 Z" fill="white" />
  </svg>
);

const ChevronRight = () => (
  <svg viewBox="0 0 100 100" width="24" fill="white" height="24">
    <path d="M 90,50 L 40,100 L 30,90 L 70,50 L 30,10 L 40,0 Z" />
  </svg>
);

export default function GallerySlider() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    scrollRef.current?.scrollBy({ left: dir === "right" ? 520 : -520, behavior: "smooth" });
  };

  return (
    // Tek grid hücresi — galeri + oklar üst üste, içerik sıkışmaz
    <div style={{ display: "grid", width: "100%" }}>

      {/* Görsel şeridi — grid cell 1/1 */}
      <div
        ref={scrollRef}
        className="horizontal-gallery-wrapper"
        data-autoplay="0" data-loop="0" data-navigation="1"
        data-pagination="0" data-parallax="1" data-fullscreen="0"
        style={{
          gridColumn: "1", gridRow: "1",
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        } as React.CSSProperties}
      >
        <div className="horizontal-gallery-cell" style={{ marginRight: "40px" }}>
          <img className="horizontal-gallery-cell-img" src="/images/11.jpeg" alt="" style={{ height: "450px" }} />
        </div>
        <div className="horizontal-gallery-cell" style={{ marginRight: "40px" }}>
          <img className="horizontal-gallery-cell-img" src="/images/4.jpeg" alt="" style={{ height: "450px" }} />
        </div>
        <div className="horizontal-gallery-cell" style={{ marginRight: "40px" }}>
          <img className="horizontal-gallery-cell-img" src="/images/5.jpeg" alt="" style={{ height: "450px" }} />
        </div>
        <div className="horizontal-gallery-cell" style={{ marginRight: "40px" }}>
          <img className="horizontal-gallery-cell-img" src="/images/6.jpeg" alt="" style={{ height: "450px" }} />
        </div>
        <div className="horizontal-gallery-cell" style={{ marginRight: "40px" }}>
          <img className="horizontal-gallery-cell-img" src="/images/10.jpeg" alt="" style={{ height: "450px" }} />
        </div>
      </div>

      <button
        onClick={() => scroll("left")}
        aria-label="Önceki"
        style={{
          gridColumn: "1", gridRow: "1",
          justifySelf: "start", alignSelf: "center",
          position: "relative", zIndex: 2,
          width: "44px", height: "44px",
          background: "hsla(0,0%,100%,0)",
          border: "none", borderRadius: "0",
          cursor: "pointer", padding: "0",
          display: "flex", alignItems: "center", justifyContent: "center",
          marginLeft: "20px",
        }}
      >
        <ChevronLeft />
      </button>

      <button
        onClick={() => scroll("right")}
        aria-label="Sonraki"
        style={{
          gridColumn: "1", gridRow: "1",
          justifySelf: "end", alignSelf: "center",
          position: "relative", zIndex: 2,
          width: "44px", height: "44px",
          background: "hsla(0,0%,100%,0)",
          border: "none", borderRadius: "0",
          cursor: "pointer", padding: "0",
          display: "flex", alignItems: "center", justifyContent: "center",
          marginRight: "20px",
        }}
      >
        <ChevronRight />
      </button>

    </div>
  );
}
