import React from 'react'

const InputField = (props) => {
  return (
    <div className="w-full h-50 inset-shadow-xs">
        <div className="w-full h-full flex justify-center items-center">
          <input
          className="w-4/5 h-1/2 p-2 bg-white border-2 border-blue-500 rounded text-5xl pointer-events-none"
          type="text"
          value={props.inputValue}
          />
        </div>
    </div>
  )
}

export default InputField