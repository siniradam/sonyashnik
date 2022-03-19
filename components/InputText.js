import React from "react";

function InputText({
  id,
  type,
  title,
  name,
  value,
  onChange,
  placeholder,
  required,
  autoComplete,
}) {
  return (
    <div>
      <label htmlFor={id} className='block text-sm font-medium text-gray-700'>
        {title}
      </label>
      <div className='mt-1'>
        <input
          id={id}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          type={type}
          autoComplete={autoComplete}
          required={required || false}
          className='w-full border border-gray-400 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-orange-500 focus:ring-1'
        />
      </div>
    </div>
  );
}

export default InputText;
