import React from 'react';

const Buttons = ({addValue,equalTo,clearInput}) => {
  return (
    <div className="w-screen mt-12 bg-orange-200">
      <div className="w-full mt-5 flex justify-center">
        <div className="w-4/5 h-29 flex justify-end items-center">
          <button className="w-21 h-21 text-4xl border-2 bg-blue-500 text-white rounded border-blue-400" onClick={clearInput}>clr</button>
        </div>
      </div>
      
      <div className="w-full flex justify-center">
        <div className="w-4/5 h-29 flex justify-between items-center">
          <button className="w-21 h-21 text-4xl border-2 bg-blue-500 text-white rounded border-blue-400" onClick={()=> addValue("7")}>7</button>
          <button className="w-21 h-21 text-4xl border-2 bg-blue-500 text-white rounded border-blue-400" onClick={()=> addValue("8")}>8</button>
          <button className="w-21 h-21 text-4xl border-2 bg-blue-500 text-white rounded border-blue-400" onClick={()=> addValue("9")}>9</button>
          <button className="w-21 h-21 text-4xl border-2 bg-blue-500 text-white rounded border-blue-400" onClick={()=> addValue("/")}>/</button>
        </div>
      </div>
      
      <div className="w-full mt-5 flex justify-center">
        <div className="w-4/5 h-29 flex justify-between items-center">
          <button className="w-21 h-21 text-4xl border-2 bg-blue-500 text-white rounded border-blue-400" onClick={()=> addValue("4")}>4</button>
          <button className="w-21 h-21 text-4xl border-2 bg-blue-500 text-white rounded border-blue-400" onClick={()=> addValue("5")}>5</button>
          <button className="w-21 h-21 text-4xl border-2 bg-blue-500 text-white rounded border-blue-400" onClick={()=> addValue("6")}>6</button>
          <button className="w-21 h-21 text-4xl border-2 bg-blue-500 text-white rounded border-blue-400" onClick={()=> addValue("*")}>x</button>
        </div>
      </div>
      
      <div className="w-full mt-5 flex justify-center">
        <div className="w-4/5 h-29 flex justify-between items-center">
          <button className="w-21 h-21 text-4xl border-2 bg-blue-500 text-white rounded border-blue-400" onClick={()=> addValue("1")}>1</button>
          <button className="w-21 h-21 text-4xl border-2 bg-blue-500 text-white rounded border-blue-400" onClick={()=> addValue("2")}>2</button>
          <button className="w-21 h-21 text-4xl border-2 bg-blue-500 text-white rounded border-blue-400" onClick={()=> addValue("3")}>3</button>
          <button className="w-21 h-21 text-4xl border-2 bg-blue-500 text-white rounded border-blue-400" onClick={()=> addValue("-")}>-</button>
        </div>
      </div>
      
      <div className="w-full mt-5 flex justify-center">
        <div className="w-4/5 h-29 flex justify-between items-center">
          <button className="w-21 h-21 text-4xl border-2 bg-blue-500 text-white rounded border-blue-400" onClick={()=> addValue("0")}>0</button>
          <button className="w-21 h-21 text-4xl border-2 bg-blue-500 text-white rounded border-blue-400" onClick={()=> addValue(".")}>.</button>
          <button className="w-21 h-21 text-4xl border-2 bg-blue-500 text-white rounded border-blue-400" onClick={equalTo}>=</button>
          <button className="w-21 h-21 text-4xl border-2 bg-blue-500 text-white rounded border-blue-400" onClick={()=> addValue("+")}>+</button>
        </div>
      </div>
      
    </div>
  )
}

export default Buttons
