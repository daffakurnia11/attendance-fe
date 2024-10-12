import React from "react";
import { Metadata } from "next";
import ChangePass from "./_component/ChangePass";

export const metadata: Metadata = {
  title: "Change Password - Attendance App",
  description: "Let's update your password for this app!",
};

export default function ChangePassPage() {
  return <ChangePass />;
}
