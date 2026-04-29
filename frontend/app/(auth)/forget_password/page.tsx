"use client";

import AuthCard from "@/components/auth/AuthCard";
import ForgetPassword from "@/components/auth/ForgetPassword";

export default function AuthPage() {
  return (
    <AuthCard screen="forgot">
      <ForgetPassword />
    </AuthCard>
  );
}
