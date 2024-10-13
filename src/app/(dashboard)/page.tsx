import { Metadata } from "next";
import Dashboard from "./_component/Dashboard";

export const metadata: Metadata = {
  title: "Dashboard - Attendance App",
  description: "Let's check your attendance for this app!",
};

export default function Home() {
  return <Dashboard />;
}
