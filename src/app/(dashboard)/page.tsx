import { Metadata } from "next";
import Dashboard from "./_component/Dashboard";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function Home() {
  return <Dashboard />;
}
