// src/components/Button.tsx

import React from "react";

interface ButtonProps {
  onClick: () => void;
  label: string;
  variant?: "primary" | "secondary";
}

const Button: React.FC<ButtonProps> = ({
  onClick,
  label,
  variant = "primary",
}) => {
  const baseStyles =
    "px-4 py-2 rounded-3xl text-white focus:outline-none shadow-md";
  const variantStyles =
    variant === "primary"
      ? "bg-primary-light hover:bg-primary-hover-light"
      : "bg-secondary-light hover:bg-secondary-hover-light";

  return (
    <button onClick={onClick} className={`${baseStyles} ${variantStyles}`}>
      {label}
    </button>
  );
};

export default Button;
