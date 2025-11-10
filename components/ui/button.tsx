"use client";

import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import React from "react";

// Base styles + variants using class-variance-authority (CVA)
const buttonVariants = cva(
  "inline-flex items-center justify-center uppercase font-semibold cursor-pointer hover:bg-white hover:text-black tracking-[1px] transition-colors duration-200 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed",
  {
    variants: {
      variant: {
        primary: "bg-primary text-white",
        dark: "bg-black text-white",
        outline:
          "border border-black text-white",
      },
      size: {
        default: "px-8 py-4 text-[13px]",
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
