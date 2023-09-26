import "./App.css";
import SketchPad from "./components/Sketchpad";
import { useState } from "react";

function App() {
  return (
    <>
      <div className="container">
        <h1>Sketchpad</h1>
      </div>
      <SketchPad />
    </>
  );
}

export default App;
