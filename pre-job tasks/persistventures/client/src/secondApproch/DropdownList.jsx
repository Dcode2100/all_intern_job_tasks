import React from 'react';

function DropdownList({ referencedIdeas, currentIndex, onSelect }) {


  const handleSelect = (selectedIdea) => {
    onSelect(currentIndex, selectedIdea);
  };

  return (
    <select
      className="rounded border w-[20%] p-2 h-min transition duration-300 bg-black text-white ease-in-out  "
      onChange={(e) => handleSelect(e.target.value)}
    >
      <option >Select Idea</option>
      {referencedIdeas.map((idea) => (
        <option
          key={idea.id}
          value={idea.text}
          className='bg-black text-white custom-option w-min'
          style={{
            backgroundColor: 'black',
            color: 'white',
          }}
        >
          {idea.text}
        </option>
      ))}
    </select>
  );
}

export default DropdownList;
