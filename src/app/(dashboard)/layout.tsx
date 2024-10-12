import Navigation from "@/components/Navigation";
import { cookies } from "next/headers";
import React from "react";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const cookieStore = cookies();
  const userData = JSON.parse(cookieStore.get("user")?.value || "");

  return (
    <div className="bg-slate-300 min-h-dvh">
      <Navigation userData={userData} />
      <div className="container mt-5">{children}</div>
    </div>
  );
}
