import React from 'react';

function IdeaInput({ value, onChange, index,}) {
  return (
    <div className="flex items-center relative w-full bg-yellow-00 ">
      <div className="text-green-500 font-semibold mr-2 flex justify-center items-center whitespace-nowrap">{">"}</div>
      <input
        className='text-white py-4 px-2 w-full bg-transparent transition duration-300 ease-in-out border-gray-300 focus:green-blue-400 hover:border-green-500 focus:outline-none'
        type="text"
        value={value}
        onChange={onChange}
      />
    </div>
  );
}

export default IdeaInput;
