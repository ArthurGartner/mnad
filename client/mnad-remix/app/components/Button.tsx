import React from "react";
import { motion } from "framer-motion";

interface ButtonProps {
  onClick: () => void;
  label: string;
  variant?: "primary" | "secondary";
  type?: string;
  icon?: string;
}

const Button: React.FC<ButtonProps> = ({
  onClick,
  label,
  variant = "primary",
  type = "primary",
  icon,
}) => {
  const baseStyles =
    "px-4 py-2 rounded-3xl text-white focus:outline-none shadow-md";
  const variantStyles =
    variant === "primary"
      ? "bg-primary-light hover:bg-primary-hover-light"
      : "bg-secondary-light hover:bg-secondary-hover-light";

  return (
    <motion.button
      onClick={onClick}
      className={`${baseStyles} ${variantStyles}`}
    >
      {label}
    </motion.button>
  );
};

export default Button;
