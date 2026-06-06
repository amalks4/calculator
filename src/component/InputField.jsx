import React from 'react'

const InputField = (props) => {
  return (
    <div className="w-screen">
      <div className="w-full h-50">
        <div className="w-full h-21 flex justify-center items-center bg-blue-600 text-white">
          <h2 className="text-7xl tracking-wide">Calculator</h2>
        </div>
        
        <div className="w-full h-21 mt-4 flex justify-center items-center">
          <input
          className="w-2/3 h-full p-2 border-2 border-blue-500 rounded text-5xl pointer-events-none"
          type="text"
          value={props.inputValue}
          />
        </div>
        
      </div>
    </div>
  )
}

export default InputField