import React from "react";
import type { Metadata } from "next";
import Login from "./_component/Login";

export const metadata: Metadata = {
  title: "Login Page - Attendance App",
  description: "Let's log in to this app!",
};

export default function LoginPage() {
  return <Login />;
}
