"use client";

import React from "react";


const ThreeDScene = () => {
  return (
    <div className="three-d-wrapper">
      <div className="scene">
        <div className="floor" />

        <div className="walls">
          <div className="wall main">
            {[0, 8, 9, 10, 11, 12, 13, 14, 15].map((i) => (
              <i key={i} style={{ "--i": i } as React.CSSProperties} />
            ))}
          </div>
          {[...Array(8)].map((_, w) => (
            <div key={w} className="wall out" style={{ "--w": w } as React.CSSProperties}>
              {[0, 8, 9, 10, 11, 12, 13, 14, 15].map((i) => (
                <i key={i} style={{ "--i": i } as React.CSSProperties} />
              ))}
            </div>
          ))}
        </div>

        <div className="balls">
          {[0, 1.5, 3, 4.5, 6, 7.5].map((b, index) => (
            <div
              key={index}
              className="ball-container"
              style={{ "--b": b } as React.CSSProperties}
            >
              <div className="ball" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ThreeDScene;
