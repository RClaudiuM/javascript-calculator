import React from "react";
import "./css/Display.css";

function Display({ currentVal, formula }) {
  return (
    <div className="displayContainer">
      <div className="displayInput">{formula}</div>
      <div id="display" className="displayResults">
        {currentVal}
      </div>
    </div>
  );
}

export default Display;
