import React from "react";

const Buttons = ({ addValue, equalTo, clearInput, inputValueLastDelete }) => {
  return (
    <div className="w-full mt-12">
      <div className="w-full mt-5 flex justify-center">
        <div className="w-4/5 h-29 flex justify-end items-center">
          <div className="w-1/2 h-full flex justify-between items-center">
            <button
              className="w-21 h-21 text-4xl border-2 bg-blue-500 text-white rounded border-blue-400 shadow-xl ml-9"
              onClick={inputValueLastDelete}
            >
              del
            </button>
            <button
              className="w-21 h-21 text-4xl border-2 bg-blue-500 text-white rounded border-blue-400 shadow-xl"
              onClick={clearInput}
            >
              clr
            </button>
          </div>
        </div>
      </div>

      <div className="w-full flex justify-center">
        <div className="w-4/5 h-29 flex justify-between items-center">
          <button
            className="w-21 h-21 text-4xl border-2 bg-blue-500 text-white rounded border-blue-400 shadow-xl"
            onClick={() => addValue("7")}
          >
            7
          </button>
          <button
            className="w-21 h-21 text-4xl border-2 bg-blue-500 text-white rounded border-blue-400 shadow-xl"
            onClick={() => addValue("8")}
          >
            8
          </button>
          <button
            className="w-21 h-21 text-4xl border-2 bg-blue-500 text-white rounded border-blue-400 shadow-xl"
            onClick={() => addValue("9")}
          >
            9
          </button>
          <button
            className="w-21 h-21 text-4xl border-2 bg-blue-500 text-white rounded border-blue-400 shadow-xl"
            onClick={() => addValue("/")}
          >
            /
          </button>
        </div>
      </div>

      <div className="w-full mt-5 flex justify-center">
        <div className="w-4/5 h-29 flex justify-between items-center">
          <button
            className="w-21 h-21 text-4xl border-2 bg-blue-500 text-white rounded border-blue-400 shadow-xl"
            onClick={() => addValue("4")}
          >
            4
          </button>
          <button
            className="w-21 h-21 text-4xl border-2 bg-blue-500 text-white rounded border-blue-400 shadow-xl"
            onClick={() => addValue("5")}
          >
            5
          </button>
          <button
            className="w-21 h-21 text-4xl border-2 bg-blue-500 text-white rounded border-blue-400 shadow-xl"
            onClick={() => addValue("6")}
          >
            6
          </button>
          <button
            className="w-21 h-21 text-4xl border-2 bg-blue-500 text-white rounded border-blue-400 shadow-xl"
            onClick={() => addValue("*")}
          >
            x
          </button>
        </div>
      </div>

      <div className="w-full mt-5 flex justify-center">
        <div className="w-4/5 h-29 flex justify-between items-center">
          <button
            className="w-21 h-21 text-4xl border-2 bg-blue-500 text-white rounded border-blue-400 shadow-xl"
            onClick={() => addValue("1")}
          >
            1
          </button>
          <button
            className="w-21 h-21 text-4xl border-2 bg-blue-500 text-white rounded border-blue-400 shadow-xl"
            onClick={() => addValue("2")}
          >
            2
          </button>
          <button
            className="w-21 h-21 text-4xl border-2 bg-blue-500 text-white rounded border-blue-400 shadow-xl"
            onClick={() => addValue("3")}
          >
            3
          </button>
          <button
            className="w-21 h-21 text-4xl border-2 bg-blue-500 text-white rounded border-blue-400 shadow-xl"
            onClick={() => addValue("-")}
          >
            -
          </button>
        </div>
      </div>

      <div className="w-full mt-5 flex justify-center">
        <div className="w-4/5 h-29 flex justify-between items-center">
          <button
            className="w-21 h-21 text-4xl border-2 bg-blue-500 text-white rounded border-blue-400 shadow-xl"
            onClick={() => addValue("0")}
          >
            0
          </button>
          <button
            className="w-21 h-21 text-4xl border-2 bg-blue-500 text-white rounded border-blue-400 shadow-xl"
            onClick={() => addValue(".")}
          >
            .
          </button>
          <button
            className="w-21 h-21 text-4xl border-2 bg-blue-500 text-white rounded border-blue-400 shadow-xl"
            onClick={equalTo}
          >
            =
          </button>
          <button
            className="w-21 h-21 text-4xl border-2 bg-blue-500 text-white rounded border-blue-400 shadow-xl"
            onClick={() => addValue("+")}
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default Buttons;
