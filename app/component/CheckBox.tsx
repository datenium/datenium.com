// Checkbox.tsx
import React from 'react';

interface CheckboxProps {
  label: string;
  isChecked: boolean;
  onChange: () => void;
}

const Checkbox: React.FC<CheckboxProps> = ({ label, isChecked, onChange }) => {
  return (
    <div className="flex items-center mb-4">
      <input
        type="checkbox"
        id="checkbox"
        className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
        checked={isChecked}
        onChange={onChange}
      />
      <label htmlFor="checkbox" className="ml-2 text-gray-700">
        {label}
      </label>
    </div>
  );
};

export default Checkbox;
