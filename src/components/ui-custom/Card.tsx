
import React from "react";
import { cn } from "@/lib/utils";

type CardProps = {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
};

export const Card = ({ children, className, hover = true }: CardProps) => {
  return (
    <div
      className={cn(
        "bg-white rounded-lg border border-gray-100 shadow-sm p-6",
        hover && "transition-all duration-200 hover:shadow-md",
        className
      )}
    >
      {children}
    </div>
  );
};

export const CardHeader = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("mb-4", className)}>
      {children}
    </div>
  );
};

export const CardTitle = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <h3 className={cn("font-semibold text-xl text-gray-800", className)}>
      {children}
    </h3>
  );
};

export const CardDescription = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <p className={cn("text-gray-600 text-sm", className)}>
      {children}
    </p>
  );
};

export const CardContent = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return <div className={className}>{children}</div>;
};

export const CardFooter = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("mt-4 pt-4 border-t border-gray-100", className)}>
      {children}
    </div>
  );
};

export default Card;
