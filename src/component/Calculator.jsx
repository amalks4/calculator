import React, { useState } from "react";
import InputField from "./InputField.jsx";
import Buttons from "./Buttons.jsx";
import Header from "./Header.jsx";

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
  const inputValueLastDelete = ()=>{
    let lastDelete = inputValue.slice(0,-1);
    setInputValue(lastDelete)
  }

  return (
    <div className="">
      <div className="w-screen">
        <Header />
      </div>

      <div className="w-screen h-screen mt-10 flex justify-center">
        <div className="w-4/5 h-3/5 border-gray-500 rounded shadow-xl bg-orange-100">
          <div className="w-full">
            <InputField inputValue={inputValue} />

            <hr />
          </div>
          <div className="">
            <Buttons
              addValue={addValue}
              equalTo={equalTo}
              clearInput={clearInput}
              inputValueLastDelete={inputValueLastDelete}
            />
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
