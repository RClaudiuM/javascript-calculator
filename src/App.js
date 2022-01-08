import { useEffect, useState } from "react";
import "./App.css";
import Buttons from "./Components/Buttons";
import Display from "./Components/Display";

///regex checks
const isOperator = /[x/+-]/,
  endsWithOperator = /[x+-/]$/,
  endsWithNegativeSign = /\d[x/+-]{1}-$/;

function App() {
  //state management
  const [currentVal, setCurrentVal] = useState("0");
  const [formula, setFormula] = useState("");
  const [previousValue, setPreviousValue] = useState("0");
  const [anotherPrevVal, setAnotherPrevVal] = useState("0");
  const [evaluated, setEvaluated] = useState(false);

  useEffect(() => {
    if (previousValue != 0) {
      limit();
      setPreviousValue("0");
    }
  }, [previousValue]);

  const init = () => {
    setCurrentVal("0");
    setFormula("");
    setPreviousValue("0");
    setAnotherPrevVal("0");
    setEvaluated(false);
  };

  const limit = () => {
    setTimeout(() => {
      setCurrentVal(previousValue);
    }, 1000);
  };

  //handler functions
  const handleNumbers = (e) => {
    if (!currentVal.includes("limit")) {
      //digit number
      const value = e.target.value;
      if (currentVal.length >= 16) {
        //number of digit > lim
        setPreviousValue(currentVal);
        setCurrentVal("Digit limit reached");
      } else if (evaluated) {
        setCurrentVal(value);
        setFormula(value !== "0" ? value : "");
      } else {
        setCurrentVal(
          currentVal === "0" || isOperator.test(currentVal)
            ? value
            : currentVal + value
        );
        setFormula(
          currentVal === "0" && value === "0"
            ? formula === ""
              ? value
              : formula
            : /([^.0-9]0|^0)$/.test(formula)
            ? formula.slice(0, -1) + value
            : formula + value
        );
      }
    }
  };

  const handlePeriod = (e) => {
    if (evaluated === true) {
      setCurrentVal("0.");
      setFormula("0.");
      setEvaluated(false);
    } else if (!currentVal.includes("limit") && !currentVal.includes(".")) {
      setEvaluated(false);
      if (!currentVal.length >= 16) {
        setPreviousValue(currentVal);
        setCurrentVal("Digit limit reached");
      } else if (
        endsWithOperator.test(formula) ||
        (currentVal === "0" && formula === "")
      ) {
        setCurrentVal("0.");
        setFormula(formula + "0.");
      } else {
        setCurrentVal(formula.match(/(-?\d+\.?\d*)$/)[0] + ".");
        setFormula(formula + ".");
      }
    }
  };

  const handleOperator = (e) => {
    if (!currentVal.includes("limit")) {
      const value = e.target.value;
      setCurrentVal(value);
      setEvaluated(false);
      if (evaluated) {
        setFormula(anotherPrevVal + value);
      } else if (!endsWithOperator.test(formula)) {
        setAnotherPrevVal(formula);
        setFormula(formula + value);
      } else if (!endsWithNegativeSign.test(formula)) {
        setFormula(
          (endsWithNegativeSign.test(formula + value)
            ? formula
            : anotherPrevVal) + value
        );
      } else if (value !== "-") {
        setFormula(anotherPrevVal + value);
      }
    }
  };

  const handleEqual = (e) => {
    if (!currentVal.includes("limit")) {
      let expression = formula;
      while (endsWithOperator.test(expression)) {
        expression = expression.slice(0, -1);
      }
      expression = expression
        .replace(/x/g, "*")
        .replace(/-/g, "-")
        .replace("--", "+0+0+0+0+0+0+");
      let answer = eval(expression);
      setCurrentVal(answer.toString());
      setFormula(
        expression
          .replace(/\*/g, "⋅")
          .replace(/-/g, "-")
          .replace("+0+0+0+0+0+0+", "--")
          .replace(/(x|\/|\+)-/, "$1-")
          .replace(/^-/, "-") +
          "=" +
          answer
      );
      setAnotherPrevVal(answer);
      setEvaluated(true);
    }
  };

  return (
    <div className="app">
      <div className="calcContainer">
        <div className="container">
          <Display
            currentVal={currentVal}
            formula={formula.replace(/x/g, "⋅")}
          />
          <Buttons
            init={init}
            handleNumbers={handleNumbers}
            handlePeriod={handlePeriod}
            handleOperator={handleOperator}
            handleEqual={handleEqual}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
