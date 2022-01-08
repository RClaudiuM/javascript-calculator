import { Button } from "@mui/material";
import React from "react";
import "./css/Buttons.css";

const buttonColor = "black";
const clearColor = "white";
const buttonBackground = "#ffcb9a";
const clearBackground = "crimson";
const equalBackground = "lightblue";

function Buttons({
  init,
  handleNumbers,
  handlePeriod,
  handleOperator,
  handleEqual,
}) {
  return (
    <div className="buttons">
      <Button
        value="AC"
        id="clear"
        className="clear"
        onClick={init}
        style={{
          gridArea: "clear",
          background: clearBackground,
          color: clearColor,
        }}
      >
        AC
      </Button>
      <Button
        onClick={handleOperator}
        value="/"
        id="divide"
        style={{
          gridArea: "divide",
          background: buttonBackground,
          color: buttonColor,
          filter: "brightness(120%)",
        }}
      >
        /
      </Button>
      <Button
        onClick={handleOperator}
        value="x"
        id="multiply"
        style={{
          gridArea: "multiply",
          background: buttonBackground,
          color: buttonColor,
          filter: "brightness(120%)",
        }}
      >
        *
      </Button>
      <Button
        onClick={handleNumbers}
        value="7"
        id="seven"
        style={{
          gridArea: "seven",
          background: buttonBackground,
          color: buttonColor,
        }}
      >
        7
      </Button>
      <Button
        onClick={handleNumbers}
        value="8"
        id="eight"
        style={{
          gridArea: "eight",
          background: buttonBackground,
          color: buttonColor,
        }}
      >
        8
      </Button>
      <Button
        onClick={handleNumbers}
        value="9"
        id="nine"
        style={{
          gridArea: "nine",
          background: buttonBackground,
          color: buttonColor,
        }}
      >
        9
      </Button>
      <Button
        onClick={handleOperator}
        value="-"
        id="subtract"
        style={{
          gridArea: "minus",
          background: buttonBackground,
          color: buttonColor,
          filter: "brightness(120%)",
        }}
      >
        -
      </Button>
      <Button
        onClick={handleNumbers}
        value="4"
        id="four"
        style={{
          gridArea: "four",
          background: buttonBackground,
          color: buttonColor,
        }}
      >
        4
      </Button>
      <Button
        onClick={handleNumbers}
        value="5"
        id="five"
        style={{
          gridArea: "five",
          background: buttonBackground,
          color: buttonColor,
        }}
      >
        5
      </Button>
      <Button
        onClick={handleNumbers}
        value="6"
        id="six"
        style={{
          gridArea: "six",
          background: buttonBackground,
          color: buttonColor,
        }}
      >
        6
      </Button>
      <Button
        onClick={handleOperator}
        value="+"
        id="add"
        style={{
          gridArea: "plus",
          background: buttonBackground,
          color: buttonColor,
          filter: "brightness(120%)",
        }}
      >
        +
      </Button>
      <Button
        onClick={handleNumbers}
        value="1"
        id="one"
        style={{
          gridArea: "one",
          background: buttonBackground,
          color: buttonColor,
        }}
      >
        1
      </Button>
      <Button
        onClick={handleNumbers}
        value="2"
        id="two"
        style={{
          gridArea: "two",
          background: buttonBackground,
          color: buttonColor,
        }}
      >
        2
      </Button>
      <Button
        onClick={handleNumbers}
        value="3"
        id="three"
        style={{
          gridArea: "three",
          background: buttonBackground,
          color: buttonColor,
        }}
      >
        3
      </Button>
      <Button
        onClick={handleNumbers}
        value="0"
        id="zero"
        style={{
          gridArea: "zero",
          background: buttonBackground,
          color: buttonColor,
        }}
      >
        0
      </Button>
      <Button
        onClick={handlePeriod}
        value="."
        id="decimal"
        style={{
          gridArea: "period",
          background: buttonBackground,
          color: buttonColor,
        }}
      >
        .
      </Button>
      <Button
        onClick={handleEqual}
        value="="
        id="equals"
        style={{
          gridArea: "equal",
          background: equalBackground,
          color: buttonColor,
        }}
      >
        =
      </Button>
    </div>
  );
}

export default Buttons;
