"use client"

import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

import { Button } from "@/components/ui/button"
import {
  Form,
} from "@/components/ui/form"
import FormInput from "@/components/FormInput/FormInput";


const schema = yup.object({
  name: yup.string().required().min(3).max(40),
  titles: yup
  .string()
  .required('Titles are required')
  .test(
    'at-least-two-items',
    'There must be at least two items separated by a comma',
    (value) => {
      if (!value) return false; // If the input is empty, the validation fails
      const items = value.split(',').map((item) => item.trim());

      // Check if there are at least two items and none of them are empty
      return items.length >= 2;
    }
  )
  .test(
    'no-empty-item',
    'There must be an item after every comma. Make sure there is no empty comma at the end of your input',
    (value) => {
      if (!value) return false; // If the input is empty, the validation fails
      const items = value.split(',').map((item) => item.trim());

      // Check if there are at least two items and none of them are empty
      return items.every((item) => item !== '');
    }
  ),
}).required();


export default function MainForm() {
  const form = useForm<FormData>({
    mode: "onChange",
    resolver: yupResolver(schema),
    defaultValues: {
      name: ""
    }
  });
  type FormData = yup.InferType<typeof schema>;

  const onSubmit = (data: FormData) => console.log(data);

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormInput name="name" label="Full Name: " />
        <FormInput name="titles" label="Professional Titles: " />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  )
}