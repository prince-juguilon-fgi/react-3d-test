"use client";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { toast } from "@/hooks/use-toast";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "../ui/button";

const formSchema = z.object({
  firstName: z.string().min(2).max(50),
  username: z
    .string()
    .min(2)
    .max(50)
    .refine(
      (value) => {
        return value.startsWith("@");
      },
      { message: "Username must start with @" }
    ),
});

type FormSchema = z.infer<typeof formSchema>;

export const InputsAndForms = () => {
  const form = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      firstName: "",
    },
  });

  const onSubmit = (values: FormSchema) => {
    toast({
      title: `Hi ${values.username}!`,
      description: `Your first name is ${values.firstName}`,
    });
    form.reset();
  };

  return (
    <Form {...form}>
      <form
        className="flex flex-col items-end p-4"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <div className="flex w-full flex-col gap-4 md:flex-row">
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input placeholder="@princejoogie" {...field} />
                </FormControl>
                <FormDescription>
                  This is your unique identifier.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="firstName"
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormLabel>First Name</FormLabel>
                <FormControl>
                  <Input placeholder="Prince Carlo" {...field} />
                </FormControl>
                <FormDescription>
                  This is your public display name.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
};
