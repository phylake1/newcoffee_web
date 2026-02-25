"use client";

import { useRef } from "react";

const images = [
  "/images/11.jpeg",
  "/images/4.jpeg",
  "/images/5.jpeg",
  "/images/6.jpeg",
  "/images/10.jpeg",
];

export default function GallerySlider() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    scrollRef.current?.scrollBy({ left: dir === "right" ? 520 : -520, behavior: "smooth" });
  };

  return (
    <div
      className="elementor-element elementor-element-67fe11f"
      style={{ backgroundColor: "#f0e9da", padding: "0" }}
    >
      {/* Grid: [ok] [galeri şeridi] [ok] */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "60px 1fr 60px",
          alignItems: "center",
          width: "100%",
        }}
      >
        {/* Sol ok */}
        <button
          onClick={() => scroll("left")}
          aria-label="Önceki"
          style={{
            width: "48px",
            height: "48px",
            borderRadius: "50%",
            border: "2px solid rgba(255,255,255,0.9)",
            background: "rgba(0,0,0,0.55)",
            color: "#fff",
            fontSize: "26px",
            lineHeight: "1",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: "0 auto",
            padding: "0",
            boxShadow: "0 2px 10px rgba(0,0,0,0.4)",
            flexShrink: 0,
          }}
        >
          ‹
        </button>

        {/* Görsel şeridi */}
        <div
          ref={scrollRef}
          style={{
            display: "flex",
            flexWrap: "nowrap",
            overflowX: "auto",
            gap: "40px",
            minHeight: "450px",
            alignItems: "center",
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          } as React.CSSProperties}
        >
          {images.map((src, i) => (
            <div key={i} style={{ flexShrink: 0 }}>
              <img
                src={src}
                alt=""
                style={{ height: "450px", width: "auto", display: "block" }}
              />
            </div>
          ))}
        </div>

        {/* Sağ ok */}
        <button
          onClick={() => scroll("right")}
          aria-label="Sonraki"
          style={{
            width: "48px",
            height: "48px",
            borderRadius: "50%",
            border: "2px solid rgba(255,255,255,0.9)",
            background: "rgba(0,0,0,0.55)",
            color: "#fff",
            fontSize: "26px",
            lineHeight: "1",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: "0 auto",
            padding: "0",
            boxShadow: "0 2px 10px rgba(0,0,0,0.4)",
            flexShrink: 0,
          }}
        >
          ›
        </button>
      </div>

      {/* Instagram butonu */}
      <div style={{ textAlign: "center", paddingBottom: "20px", paddingTop: "16px" }}>
        <a
          href="https://instagram.com/newcoffee.com.tr"
          className="elementor-button-link elementor-button elementor-size-sm"
          role="button"
          target="_blank"
          rel="noreferrer"
        >
          <span className="elementor-button-content-wrapper">
            <span className="elementor-button-icon elementor-align-icon-left">
              <i aria-hidden="true" className="fab fa-instagram" />
            </span>
            <span className="elementor-button-text">@newcoffee.com.tr</span>
          </span>
        </a>
      </div>
    </div>
  );
}
