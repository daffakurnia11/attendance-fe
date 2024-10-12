import React from "react";
import { Metadata } from "next";
import Attend from "./_component/Attend";

export const metadata: Metadata = {
  title: "Record Attendance - Attendance App",
  description: "Let's record your attendance for this app!",
};

export default function ProfilePage() {
  return <Attend />;
}
