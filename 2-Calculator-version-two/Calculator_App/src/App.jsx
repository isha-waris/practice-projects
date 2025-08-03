import { useState } from "react";
import "./App.css";
import ButtonContainer from "./components/ButtonContainer/ButtonContainer";
import Display from "./components/Display/Display";

function App() {
  let [calVal, setCalVal] = useState("");
  const clickButton = (buttonText) => {
    if (buttonText === "C") {
      setCalVal("");
    } else if (buttonText === "=") {
      const result = eval(calVal);
      setCalVal(result);
    } else {
      const newDisplayValue = calVal + buttonText;
      setCalVal(newDisplayValue);
    }
  };
  return (
    <div className="calculator">
      <h1>Calculator</h1>
      <Display displayValue={calVal} />
      <ButtonContainer onClickButton={clickButton} />
    </div>
  );
}

export default App;
