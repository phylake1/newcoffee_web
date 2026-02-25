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
    <section
      className="elementor-section elementor-top-section elementor-element elementor-element-67fe11f elementor-section-stretched elementor-section-full_width elementor-section-height-default"
      data-id="67fe11f"
      data-element_type="section"
      data-settings='{"stretch_section":"section-stretched","background_background":"classic","craftcoffee_ext_is_background_parallax":"false"}'
      style={{ position: "relative", overflow: "visible" }}
    >
      {/* Sol ok — section seviyesinde, hiçbir overflow tarafından kesilmez */}
      <button
        onClick={() => scroll("left")}
        aria-label="Önceki"
        style={{
          position: "absolute",
          left: "20px",
          top: "225px",
          zIndex: 999,
          width: "52px",
          height: "52px",
          borderRadius: "50%",
          border: "2px solid rgba(255,255,255,0.85)",
          background: "rgba(0,0,0,0.6)",
          color: "#fff",
          fontSize: "28px",
          lineHeight: "1",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0 4px 12px rgba(0,0,0,0.5)",
        }}
      >
        ‹
      </button>

      {/* Sağ ok — section seviyesinde */}
      <button
        onClick={() => scroll("right")}
        aria-label="Sonraki"
        style={{
          position: "absolute",
          right: "20px",
          top: "225px",
          zIndex: 999,
          width: "52px",
          height: "52px",
          borderRadius: "50%",
          border: "2px solid rgba(255,255,255,0.85)",
          background: "rgba(0,0,0,0.6)",
          color: "#fff",
          fontSize: "28px",
          lineHeight: "1",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0 4px 12px rgba(0,0,0,0.5)",
        }}
      >
        ›
      </button>

      {/* Görsel şeridi */}
      <div
        ref={scrollRef}
        style={{
          display: "flex",
          flexWrap: "nowrap",
          overflowX: "auto",
          overflowY: "visible",
          gap: "40px",
          width: "100%",
          minHeight: "450px",
          scrollbarWidth: "none",
          msOverflowStyle: "none",
          paddingLeft: "80px",
          paddingRight: "80px",
          boxSizing: "border-box",
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

      {/* Instagram butonu */}
      <div
        style={{ textAlign: "center", padding: "24px 0 8px" }}
        className="elementor-element elementor-element-9f23810 elementor-align-center elementor-widget elementor-widget-button"
      >
        <div className="elementor-widget-container">
          <div className="elementor-button-wrapper">
            <a
              href="https://instagram.com/newcoffee.com.tr"
              className="elementor-button-link elementor-button elementor-size-sm"
              role="button"
              target="_blank"
              rel="noreferrer"
            >
              <span className="elementor-button-content-wrapper">
                <span className="elementor-button-icon elementor-align-icon-left">
                  <i aria-hidden="true" className="fab fa-instagram"></i>
                </span>
                <span className="elementor-button-text">@newcoffee.com.tr</span>
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
