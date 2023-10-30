import React from "react";
import "./calc.css";

export default function Calculator() {
  return (
    <div className="container">
      <div className="calculator">
        <div className="top">
          <div className="circle"></div>
        </div>
        <div className="display"></div>
        <div className="extra"></div>
        <div className="keyboard">
          <div className="grid-item nums">7</div>
          <div className="grid-item nums">8</div>
          <div className="grid-item nums">9</div>
          <div className="grid-item">⌫</div>
          <div className="grid-item nums">4</div>
          <div className="grid-item nums">5</div>
          <div className="grid-item nums">6</div>
          <div className="grid-item divide">÷</div>
          <div className="grid-item nums">1</div>
          <div className="grid-item nums">2</div>
          <div className="grid-item nums">3</div>
          <div className="grid-item">-</div>
          <div className="grid-item bot-left">0</div>
          <div className="grid-item">.</div>
          <div className="grid-item">=</div>
          <div className="grid-item bot-right">+</div>
        </div>
      </div>
    </div>
  );
}
