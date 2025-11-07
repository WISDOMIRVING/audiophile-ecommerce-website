"use client";

import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import React from "react";

// Base styles + variants using class-variance-authority (CVA)
const buttonVariants = cva(
  "inline-flex items-center justify-center font-bold uppercase tracking-[1px] transition-colors duration-200 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed",
  {
    variants: {
      variant: {
        primary:
          "bg-orange-500 text-white hover:bg-black",
        secondary:
          "border border-black text-black hover:bg-black hover:text-white",
        dark:
          "bg-black text-white hover:bg-orange-500",
        ghost:
          "text-black hover:text-orange-500",
        none:
          "bg-orange-500 text-white",
        outline:
          "border border-gray-400 text-white hover:bg-white hover:text-black",
      },
      size: {
        default: "px-6 py-4 text-[13px]",
        sm: "px-4 py-2 text-[12px]",
        lg: "px-8 py-4 text-[15px]",
      },
      rounded: {
        none: "rounded-none",
        md: "rounded-md",
        full: "rounded-full",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
      rounded: "none",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

export function Button({
  className,
  variant,
  size,
  rounded,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(buttonVariants({ variant, size, rounded, className }))}
      {...props}
    />
  );
}

export default Button;