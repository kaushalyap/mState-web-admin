import React from "react";
import { TextInput, PasswordInput, Button, Space } from "@mantine/core";
import { useForm } from "@mantine/form";
import { useAuth } from "../context/AuthContext";
import { useRouter } from "next/router";

export default function SignIn() {
  const form = useForm({
    initialValues: {
      email: "admin@example.com",
      password: "123456",
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
  const router = useRouter();
  const { signIn } = useAuth();

  const handleSubmit = async function (values: typeof form.values) {
    if (values.email != "" && values.password != "") {
      try {
        await signIn(values.email, values.password);
      } catch (err) {
        console.log(err);
      }
    }
    router.push("/");
  };

  return (
    <form onSubmit={form.onSubmit(handleSubmit)}>
      <TextInput
        id="email"
        required
        label="Email"
        autoComplete="true"
        size="lg"
        placeholder="your@email.com"
        {...form.getInputProps("email")}
      />
      <Space h="lg" />

      <PasswordInput
        id="password"
        required
        label="Password"
        autoComplete="true"
        size="lg"
        {...form.getInputProps("password")}
      />
      <Space h="lg" />

      <Button type="submit" className="bg-green-600" size="lg">
        Submit
      </Button>
    </form>
  );
}
