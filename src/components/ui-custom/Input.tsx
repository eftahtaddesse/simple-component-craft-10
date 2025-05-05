
import React from "react";
import { cn } from "@/lib/utils";

type InputProps = {
  label?: string;
  placeholder?: string;
  type?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  error?: string;
  required?: boolean;
  id?: string;
  name?: string;
  disabled?: boolean;
};

const Input = ({
  label,
  placeholder,
  type = "text",
  value,
  onChange,
  className,
  error,
  required = false,
  id,
  name,
  disabled = false,
}: InputProps) => {
  return (
    <div className={cn("mb-4", className)}>
      {label && (
        <label
          htmlFor={id}
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}
      <input
        type={type}
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        disabled={disabled}
        className={cn(
          "w-full rounded-md border border-gray-300 px-3 py-2 text-sm shadow-sm placeholder-gray-400",
          "focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500",
          error && "border-red-500 focus:border-red-500 focus:ring-red-500",
          disabled && "bg-gray-100 opacity-60 cursor-not-allowed"
        )}
      />
      {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
    </div>
  );
};

export default Input;
