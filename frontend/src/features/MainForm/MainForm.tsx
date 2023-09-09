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
  name: yup.string().required().min(3).max(40)
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
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  )
}