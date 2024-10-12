import Typography from "@/components/Typography";
import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login Page - Attendance App",
  description: "Let's log in to this app!",
};

export default function Login() {
  return (
    <div className="bg-white border border-solid border-gray-300 shadow-md rounded-lg p-6 max-w-[400px] w-full  ">
      <Typography.Heading level={5} as="h1" className="font-medium text-center">
        Login Page
      </Typography.Heading>
    </div>
  );
}
