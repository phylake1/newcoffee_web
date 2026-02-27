"use client";

import { useState } from "react";

export default function MapOverlay() {
  const [active, setActive] = useState(true);

  return (
    <div style={{ position: "relative", width: "100%", height: "500px" }}>
      {active && (
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            zIndex: 10,
            cursor: "pointer",
            background: "transparent",
          }}
          onClick={() => setActive(false)}
          onMouseLeave={() => setActive(true)}
          title="Haritada gezinmek için tıklayın"
        />
      )}
      <iframe
        style={{ width: "100%", height: "500px", border: "0", marginBottom: "-9px" }}
        src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d19905.696399556287!2d-0.3007084089960577!3d51.417531259591925!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1s2334+Peterson+Street+Kingston+UK+London+H14D!5e0!3m2!1sen!2s!4v1546697086219"
        width="600"
        height="450"
      />
    </div>
  );
}