import React from "react";

interface InputProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  className?: string;
  placeholder?: string;
  [key: string]: any; // Allow additional props
}

export const Input: React.FC<InputProps> = ({
  value,
  onChange,
  className = "",
  type = "text",
  placeholder = "",
  ...rest
}) => {
  return (
    <input
      value={value}
      onChange={onChange}
      type={type}
      placeholder={placeholder}
      className={`w-full h-10 sm:h-12 md:h-14 lg:h-16 max-h-[63px] p-2 sm:p-3 md:p-4 rounded-lg border border-bluechill focus:outline-none focus:border-bluechill bg-[#f5faff] text-sm sm:text-base md:text-lg lg:text-xl ${className}`}
      {...rest}
    />
  );
};
