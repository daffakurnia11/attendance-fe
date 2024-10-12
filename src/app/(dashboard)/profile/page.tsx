import React from "react";
import Profile from "./_component/Profile";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Update Profile - Attendance App",
  description: "Let's update your profile for this app!",
};

export default function ProfilePage() {
  return <Profile />;
}
