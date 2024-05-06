import React, { ChangeEvent } from 'react';

interface InputFieldProps {
  label: string;
  type: string;
  id: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}


const InputField: React.FC<InputFieldProps> = ({ label, type, id, value, onChange }) => {
    return (
      <div className="mb-4">
        <label htmlFor={id} className="block text-sm font-medium text-gray-600">
          {label}
        </label>
        <input
          type={type}
          id={id}
          className="mt-1 p-2 w-full border rounded-md"
          value={value}
          onChange={onChange}
        />
      </div>
    );
  };
  
  export default InputField;