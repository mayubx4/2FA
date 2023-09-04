import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddCodeForm = ({ onAddCode }) => {
  const [name, setName] = useState("");
  const nevigate = useNavigate();
  const handleAddCode = () => {
    onAddCode(name);
    setName("");
    nevigate('/')
  };

  return (
    <div className=''>
      <h1 className='text-2xl font-semibold mb-4'>Add 2FA Code</h1>

      <div className='add-code-form mt-8 flex space-x-4'>
        <input
          type='text'
          value={name}
          onChange={e => setName(e.target.value)}
          placeholder='Code name'
          className='border rounded px-2 py-1 w-48'
        />
        <button
          onClick={handleAddCode}
          className='bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600'
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default AddCodeForm;
