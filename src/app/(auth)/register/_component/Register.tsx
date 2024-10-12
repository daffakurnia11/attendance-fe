"use client";

import Typography from "@/components/Typography";
import { Button, Divider, Form, Input } from "antd";
import Link from "next/link";
import React from "react";
import { useRegister } from "./Register.hook";

export default function Register() {
  const { onSubmit, loading } = useRegister();

  return (
    <div className="bg-white border border-solid border-gray-300 shadow-md rounded-lg p-6 max-w-[400px] w-full  ">
      <Typography.Heading level={5} as="h1" className="font-medium text-center">
        Register Page
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
          label="Full Name"
          name="name"
          rules={[{ required: true, message: "Please enter your full name" }]}
        >
          <Input disabled={loading} placeholder="Enter your full name" />
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
        <Form.Item
          label="Confirm Password"
          name="confirm_password"
          rules={[
            { required: true, message: "Please confirm your password" },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue("password") === value) {
                  return Promise.resolve();
                }
                return Promise.reject(
                  new Error("The two passwords that you entered do not match!")
                );
              },
            }),
          ]}
        >
          <Input
            disabled={loading}
            type="password"
            placeholder="Repeat your password"
          />
        </Form.Item>
        <Button loading={loading} type="primary" htmlType="submit" block>
          Register
        </Button>
      </Form>
      <Divider />
      <Typography.Text size="sm" className="text-center" as="p">
        Already have an account?{" "}
        <Link href="/login" className="text-blue-500">
          Login
        </Link>
      </Typography.Text>
    </div>
  );
}
