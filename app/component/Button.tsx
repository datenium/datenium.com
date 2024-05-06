// components/Button.tsx
import React, { FC, ReactNode, MouseEvent } from 'react';

interface ButtonProps {
  children: ReactNode;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  className?: string;
}

const Button: FC<ButtonProps> = ({ children, onClick, className }) => {
  return (
    <button
      className={`bg-blue-500 text-white px-4 py-2  ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
