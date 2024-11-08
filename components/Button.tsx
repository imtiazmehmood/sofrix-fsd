import React from "react";

interface ButtonProps {
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  label: string;
  type?: "button" | "submit" | "reset";
  className?: string;
  disabled?: boolean;
  [key: string]: any; // Allow additional props
}

const Button: React.FC<ButtonProps> = ({
  onClick,
  label,
  type = "button",
  className = "",
  disabled = false,
  ...rest
}) => {
  return (
    <button
      onClick={onClick}
      type={type}
      className={`w-full h-12 sm:h-14 md:h-16 max-h-[61px] xl:h-20 px-4 sm:px-6 md:px-8 rounded-lg bg-bluechill text-white font-bold text-sm sm:text-md md:text-xl lg:text-2xl flex items-center justify-center ${className} ${
        disabled ? "opacity-50 cursor-not-allowed" : "hover:bg-bluechilldark"
      }`}
      disabled={disabled}
      {...rest}
    >
      {label}
    </button>
  );
};

export default Button;
