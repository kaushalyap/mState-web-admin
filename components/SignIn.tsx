import React from "react";
import { TextInput, PasswordInput, Button, Space } from "@mantine/core";
import { useForm } from "@mantine/form";
import { useAuth } from "../context/AuthContext";

export default function SignIn() {
  const form = useForm({
    initialValues: {
      email: "",
      password: "",
    },

    validate: {
      email: (value: string) =>
        /^\S+@\S+$/.test(value) ? null : "Invalid email",
      password: (value: string) =>
        /^[a-z|A-z|0-9]{8}$/.test(value)
          ? "Password must be at least 8 characters long"
          : null,
    },
  });

  const { signIn } = useAuth();

  const handleSubmit = async function (
    values: typeof form.values
    /*  errors: typeof form.errors */
  ) {
    if (values.email != "" && values.password != "") {
      console.log(values.email);
      console.log(values.password);
      try {
        await signIn(values.email, values.password);
      } catch (err) {
        console.log(err);
      }
    }
    console.log(values);
  };

  return (
    <form onSubmit={form.onSubmit(handleSubmit)}>
      <TextInput
        id="email"
        required
        label="Email"
        autoComplete="true"
        placeholder="your@email.com"
        {...form.getInputProps("email")}
      />
      <Space h="xs" />

      <PasswordInput
        id="password"
        required
        label="Password"
        autoComplete="true"
        {...form.getInputProps("password")}
      />
      <Space h="sm" />

      <Button type="submit" className="bg-orange-400">
        Submit
      </Button>
    </form>
  );
}
