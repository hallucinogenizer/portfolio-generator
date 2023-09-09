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
  firstName: yup.string().required(),
  age: yup.number().positive().integer().required(),
}).required();


export default function MainForm() {
  const form = useForm<FormData>({
    resolver: yupResolver(schema)
  });
  type FormData = yup.InferType<typeof schema>;

  const onSubmit = (data: FormData) => console.log(data);

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormInput name="firstName" label="First Name: " />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  )
}