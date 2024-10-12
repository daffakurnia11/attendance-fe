"use client";

import Typography from "@/components/Typography";
import { Button, Divider, Form, Input } from "antd";
import Link from "next/link";
import React from "react";
import { useLogin } from "./Login.hook";

export default function Login() {
  const { onSubmit, loading } = useLogin();

  return (
    <div className="bg-white border border-solid border-gray-300 shadow-md rounded-lg p-6 max-w-[400px] w-full  ">
      <Typography.Heading level={5} as="h1" className="font-medium text-center">
        Login Page
      </Typography.Heading>
      <Divider />
      <Form layout="vertical" onFinish={onSubmit}>
        <Form.Item
          label="Email"
          name="email"
          rules={[
            { required: true, message: "Please enter your email" },
            { type: "email", message: "Please enter a valid email" },
          ]}
        >
          <Input disabled={loading} placeholder="Enter your email" />
        </Form.Item>
        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: "Please enter your password" }]}
        >
          <Input
            disabled={loading}
            type="password"
            placeholder="Enter your password"
          />
        </Form.Item>
        <Button
          loading={loading}
          type="primary"
          htmlType="submit"
          className="mt-4"
          block
        >
          Login
        </Button>
      </Form>
      <Divider />
      <Typography.Text size="sm" className="text-center" as="p">
        Don&apos;t have an account?{" "}
        <Link href="/register" className="text-blue-500">
          Register
        </Link>
      </Typography.Text>
    </div>
  );
}
