import React from "react";
import Register from "./_component/Register";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Register Page - Attendance App",
  description: "Let's create an account in this app!",
};

export default function RegisterPage() {
  return <Register />;
}
