import "./App.css";
import SketchPad from "./components/Sketchpad";
import { useState } from "react";

function App() {
  const rows = 20;
  const cols = 20;
  const [cells, setCells] = useState(Array(rows * cols).fill(''));

  const handleClearAll = () => {
    setCells(Array(rows * cols).fill(''));
  };

  const updateCells = (index) => {
    setCells(cells.map((cell, i) => (i === index ? 'filled' : cell)));
  };
  return (
    <>
      <div className="container">
        <h1>Sketchpad</h1>
      </div>
      <div className="pad">
        <button className="button" onClick={handleClearAll}>Clear all!</button>
        <SketchPad rows={rows} cols={cols} cells = {cells} updateCells = {updateCells} />
      </div>
    </>
  );
}

export default App;
