"use client";

import Login from "@/components/auth/Login";
import AuthCard from "@/components/auth/AuthCard";

export default function AuthPage() {
  return (
    <main className="min-h-screen bg-[#111] flex items-center justify-center p-4 md:p-6">
      <AuthCard screen="login">
        <Login
          onForgot={function (): void {
            throw new Error("Function not implemented.");
          }}
          onSignup={function (): void {
            throw new Error("Function not implemented.");
          }}
        />
      </AuthCard>
    </main>
  );
}
