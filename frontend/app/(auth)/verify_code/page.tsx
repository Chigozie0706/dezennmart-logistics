"use client";
import VerifyCode from "@/components/auth/VerifyCode";
import AuthCard from "@/components/auth/AuthCard";

export default function AuthPage() {
  return (
    <AuthCard screen="verify">
      <VerifyCode />
    </AuthCard>
  );
}
