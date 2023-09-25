import React, { useState } from 'react';
import '../components/Sketchpad.css'

const SketchPad = ({ rows, cols, cells, updateCells }) => {
  const handleMouseOver = (index) => {
    updateCells(index);
  };

  return (
    <div className="sketchpad">
      {cells.map((cell, index) => (
        <div
          key={index}
          className={`cell ${cell}`}
          onMouseOver={() => handleMouseOver(index)}
        />
      ))}
    </div>
  );
};

export default SketchPad;
