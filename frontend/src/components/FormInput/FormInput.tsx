"use client";
import { HTMLInputTypeAttribute } from "react";
import { useFormContext } from "react-hook-form";

import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/Input/Input";
import TooltipWrapper from "@/components/TooltipWrapper/TooltipWrapper";

type Props = {
  name: string;
  label: string;
  placeholder?: string;
  type?: Exclude<HTMLInputTypeAttribute, "select">;
  tooltipContent?: string;
};

function FormInput({ name, label, placeholder = "Enter here", type, tooltipContent }: Props) {
  const form = useFormContext();

  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label} {tooltipContent && <TooltipWrapper content={tooltipContent} />}</FormLabel>
          <FormControl>
            <Input type={type} placeholder={placeholder} errors={form.formState.errors} {...field} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}

export default FormInput;
