
import React from "react";
import { cn } from "@/lib/utils";

type ButtonProps = {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  className?: string;
  fullWidth?: boolean;
  onClick?: () => void;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
};

const Button = ({
  children,
  variant = "primary",
  size = "md",
  className,
  fullWidth = false,
  onClick,
  disabled = false,
  type = "button",
}: ButtonProps) => {
  const variants = {
    primary: "bg-blue-600 text-white hover:bg-blue-700",
    secondary: "bg-slate-600 text-white hover:bg-slate-700",
    outline: "border border-blue-600 text-blue-600 hover:bg-blue-50",
    ghost: "text-blue-600 hover:bg-blue-50",
  };

  const sizes = {
    sm: "text-sm px-3 py-1.5 rounded",
    md: "px-4 py-2 rounded-md",
    lg: "text-lg px-6 py-3 rounded-lg",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={cn(
        "font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500 active:scale-95",
        variants[variant],
        sizes[size],
        fullWidth && "w-full",
        disabled && "opacity-50 cursor-not-allowed",
        className
      )}
    >
      {children}
    </button>
  );
};

export default Button;
