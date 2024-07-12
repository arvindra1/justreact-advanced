import React, { useState } from "react";

const MagnifyImage = ({
  src,
  width = 600,
  height = 600,
}: {
  src: string;
  width: number;
  height: number;
}) => {
  const [zoom, setZoom] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: any) => {
    const { left, top, width, height } = e.target.getBoundingClientRect();
    const x = ((e.pageX - left) / width) * 100;
    const y = ((e.pageY - top) / height) * 100;
    setPosition({ x, y });
  };

  return (
    <div style={{ position: "relative", width: "100%" }}>
      <img
        src={src}
        alt="Zoomable"
        style={{ width: `${width}px`, height: `${height}px` }}
        onMouseEnter={() => setZoom(true)}
        onMouseMove={handleMouseMove}
        onMouseLeave={() => setZoom(false)}
      />
      {zoom && (
        <div
          style={{
            position: "absolute",
            left: `${width + 20}px`, // 20px is the gap from the main image
            top: 0,
            width: `${width}px`,
            height: `${height}px`,
            overflow: "hidden",
            border: "1px solid black",
          }}
        >
          <img
            src={src}
            alt="Zoomed"
            style={{
              width: `${width * 2}px`,
              height: `${height * 2}px`,
              transform: `translate(-${position.x}%, -${position.y}%)`,
              transformOrigin: "0 0",
            }}
          />
        </div>
      )}
    </div>
  );
};

export default MagnifyImage;
