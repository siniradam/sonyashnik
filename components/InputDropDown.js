import React from "react";

function InputDropDown({
  title,
  name,
  value,
  options,
  onChange,
  placeholder,
  required,
  autoComplete,
}) {
  return (
    <div>
      <label htmlFor={name} className='block text-sm font-medium text-gray-700'>
        {title}
      </label>
      <div className='mt-1'>
        <select
          name={name}
          id={name}
          className='w-full border border-gray-400 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-orange-500 focus:ring-1'
        >
          {options.map((option, index) => (
            <option
              key={index}
              selected={value == option.value}
              value={option.value}
            >
              {option.title}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default InputDropDown;
