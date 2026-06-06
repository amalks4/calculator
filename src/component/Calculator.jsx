import React, { useState } from "react";
import InputField from "./InputField.jsx";
import Buttons from "./Buttons.jsx";

const Calculator = () => {
  const [inputValue, setInputValue] = useState("");

  const addValue = value => {
    if (inputValue) {
      let newInputValue = inputValue + value;
      setInputValue(newInputValue);
    } else {
      setInputValue(value);
    }
  };

  const clearInput = () => {
    setInputValue("");
  };

  const equalTo = () => {
    if (inputValue) {
      let result = eval(inputValue);
      setInputValue(result);
    }
  };

  return (
    <div className="w-screen h-screen">
      <div className="w-full mr-10 mt-10 border-2">
        <div className="">
          <InputField inputValue={inputValue} />
          <hr />
        </div>
        <div className="">
          <Buttons
            addValue={addValue}
            equalTo={equalTo}
            clearInput={clearInput}
          />
        </div>
      </div>
    </div>
  );
};

export default Calculator;
