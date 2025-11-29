import React from "react";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <section
      className="min-h-screen flex justify-center items-center"
      style={{
        backgroundImage: "url('/dashboard-bg.png')",
      }}
    >
      {children}
    </section>
  );
}
