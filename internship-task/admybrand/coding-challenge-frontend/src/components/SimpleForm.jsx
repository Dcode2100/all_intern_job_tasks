import React, { useState } from 'react';

function SimpleForm() {
  const [value, setValue] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // do something with the form data
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" value={value} onChange={(event) => setValue(event.target.value)} />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}

export default SimpleForm();