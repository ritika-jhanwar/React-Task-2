import React, { useState } from "react";
import "./calc.css";

export default function Calculator() {
  const [text, setText] = useState("");
  const handleButtonClick = (value) => {
    if (value === "=") {
      try {
        setText(eval(text).toString());
      } catch (error) {
        setText("Error");
      }
    } else if (value === "⌫") {
      setText(text.slice(0, -1));
    } else {
      setText(text + value);
    }
  };
  return (
    <div className="container">
      <div className="calculator">
        <div className="top">
          <div className="circle"></div>
        </div>
        <div className="display" value={text}>
          {text}
        </div>
        <div className="extra"></div>
        <div className="keyboard">
          <div
            className="grid-item nums"
            onClick={() => handleButtonClick("7")}
          >
            7
          </div>
          <div
            className="grid-item nums"
            onClick={() => handleButtonClick("8")}
          >
            8
          </div>
          <div
            className="grid-item nums"
            onClick={() => handleButtonClick("9")}
          >
            9
          </div>
          <div className="column-3">
            <div
              className="grid-item divide sym backspace"
              onClick={() => handleButtonClick("⌫")}
            >
              ⌫
            </div>
            <div
              className="grid-item divide sym"
              onClick={() => handleButtonClick("/")}
            >
              ÷
            </div>
            <div
              className="grid-item multiply sym"
              onClick={() => handleButtonClick("*")}
            >
              ×
            </div>
            <div
              className="grid-item subtract sym"
              onClick={() => handleButtonClick("-")}
            >
              -
            </div>
            <div
              className="grid-item bot-right add sym"
              onClick={() => handleButtonClick("+")}
            >
              +
            </div>
          </div>
          <div
            className="grid-item nums"
            onClick={() => handleButtonClick("4")}
          >
            4
          </div>
          <div
            className="grid-item nums"
            onClick={() => handleButtonClick("5")}
          >
            5
          </div>
          <div
            className="grid-item nums"
            onClick={() => handleButtonClick("6")}
          >
            6
          </div>
          <div
            className="grid-item nums"
            onClick={() => handleButtonClick("1")}
          >
            1
          </div>
          <div
            className="grid-item nums"
            onClick={() => handleButtonClick("2")}
          >
            2
          </div>
          <div
            className="grid-item nums"
            onClick={() => handleButtonClick("3")}
          >
            3
          </div>
          <div
            className="grid-item bot-left"
            onClick={() => handleButtonClick("0")}
          >
            0
          </div>
          <div className="grid-item" onClick={() => handleButtonClick(".")}>
            .
          </div>
          <div className="grid-item" onClick={() => handleButtonClick("=")}>
            =
          </div>
        </div>
      </div>
    </div>
  );
}
