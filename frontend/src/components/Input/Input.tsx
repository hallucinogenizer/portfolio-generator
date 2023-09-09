import * as React from "react";
import { FieldErrors } from "react-hook-form";

import { cn } from "@/lib/utils";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  errors?: FieldErrors;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, errors, name, ...props }, ref) => {
    const isError = name && errors && errors[name];
    //TODO - Write test for this component's error states
    return (
      <input
        type={type}
        className={cn(
          "flex h-10 w-full rounded-3xl border border-input px-3 py-2 text-sm text-text ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-slate-800 placeholder:text-opacity-30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
          isError ? "bg-rose-50 text-rose-700" : "bg-input",
          className,
        )}
        ref={ref}
        {...props}
      />
    );
  },
);
Input.displayName = "Input";

export { Input };
