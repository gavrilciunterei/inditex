import React from 'react';

function Button({ text, handleOnClick, disabled }) {
  return (
    <button
      disabled={disabled}
      onClick={handleOnClick}
      className="disabled:border-0 disabled:bg-gray-400 disabled:hover:scale-100 disabled:hover:text-black disabled:text-black text-base undefined hover:scale-110 focus:outline-none flex justify-center px-4 py-2 rounded font-bold cursor-pointer hover:bg-teal-700 hover:text-teal-100 bg-teal-100 text-teal-700 border duration-200 ease-in-out border-teal-600 transition "
    >
      {text}
    </button>
  );
}

export default Button;
