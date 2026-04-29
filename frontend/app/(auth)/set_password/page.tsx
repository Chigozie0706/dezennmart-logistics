"use client";

import SetPassword from "@/components/auth/SetPassword";
import AuthCard from "@/components/auth/AuthCard";

export default function AuthPage() {
  return (
    <AuthCard screen="set-password">
      <SetPassword />
    </AuthCard>
  );
}
