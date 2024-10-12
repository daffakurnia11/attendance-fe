import React from "react";
import AttendanceDetail from "./_component/AttendanceDetail";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Attendance Detail - Attendance App",
  description: "Let's check your attendance for this app!",
};

export default function AttendanceDetailPage() {
  return <AttendanceDetail />;
}
