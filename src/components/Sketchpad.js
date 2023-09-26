import React, { useState } from "react";
import "../components/Sketchpad.css";

const SketchPad = () => {
  const rows = 30;
  const cols = 30;
  const [cells, setCells] = useState(Array(rows * cols).fill(""));

  const updateCells = (index) => {
    setCells(cells.map((cell, i) => (i === index ? "filled" : cell)));
  };

  const handleMouseOver = (index) => {
    updateCells(index);
  };

  const handleClearAll = () => {
    setCells(Array(rows * cols).fill(""));
  };

  return (
    <>
      <div className="pad">
        <div className="buttons">
          <button className="button" onClick={handleClearAll}>
            Clear all!
          </button>
          <button className="button change-color">Change color</button>
        </div>
        <div className="sketchpad">
          {cells.map((cell, index) => (
            <div
              key={index}
              className={`cell ${cell}`}
              onMouseOver={() => handleMouseOver(index)}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default SketchPad;
