import React from "react";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-dvh w-full bg-slate-300 flex items-center justify-center py-6">
      {children}
    </div>
  );
}
