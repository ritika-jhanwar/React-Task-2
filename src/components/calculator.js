import React from "react";
import "./calc.css";

export default function Calculator() {
  return (
    <div className="container">
      <div className="calculator">
        <div className="keyboard">
          <div className="grid-item">7</div>
          <div className="grid-item">8</div>
          <div className="grid-item">9</div>
          <div className="grid-item">⌫</div>
          <div className="grid-item">4</div>
          <div className="grid-item">5</div>
          <div className="grid-item">6</div>
          <div className="grid-item">÷</div>
          <div className="grid-item">1</div>
          <div className="grid-item">2</div>
          <div className="grid-item">3</div>
          <div className="grid-item">-</div>
          <div className="grid-item">0</div>
          <div className="grid-item">.</div>
          <div className="grid-item">=</div>
          <div className="grid-item">+</div>
        </div>
      </div>
    </div>
  );
}
