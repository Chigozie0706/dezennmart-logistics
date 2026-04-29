"use client";

import { useState } from "react";

import Label from "../Label";
import Input from "../Input";
import PrimaryBtn from "../PrimaryBtn";
import SocialLogin from "../SocialLogin";

interface Props {
  onForgot: () => void;
  onSignup: () => void;
}

export default function Login({ onForgot, onSignup }: Props) {
  const [showPassword, setShowPassword] = useState(false);
  const [remember, setRemember] = useState(false);

  return (
    <div className="flex flex-col flex-1">
      <h1 className="font-[var(--font-syne)] font-bold text-2xl text-[#f0f0f0] mb-1">
        Login
      </h1>
      <p className="text-[12.5px] text-[#888] mb-5 leading-relaxed">
        Login to access your Dezenmart account
      </p>

      <Label text="Email" />
      <Input placeholder="john.doe@gmail.com" type="email" />

      <Label text="Password" />
      <div className="relative">
        <Input
          placeholder="••••••••"
          type={showPassword ? "text" : "password"}
          className="pr-10"
        />
        <button
          onClick={() => setShowPassword(!showPassword)}
          className="absolute right-2.5 top-1/2 -translate-y-[60%] bg-transparent border-none cursor-pointer text-sm"
        >
          {showPassword ? "🙈" : "👁"}
        </button>
      </div>

      <div className="flex justify-between items-center mb-4">
        <label className="flex items-center gap-1.5 cursor-pointer">
          <input
            type="checkbox"
            checked={remember}
            onChange={(e) => setRemember(e.target.checked)}
            className="accent-[#ff2d2d]"
          />
          <span className="text-[12.5px] text-[#aaa]">Remember me</span>
        </label>
        <button
          onClick={onForgot}
          className="text-[12.5px] text-[#ff2d2d] bg-transparent border-none cursor-pointer hover:opacity-75 transition-opacity"
        >
          Forgot Password?
        </button>
      </div>

      <PrimaryBtn>Login</PrimaryBtn>

      <p className="text-center text-[12.5px] text-[#777] mt-3">
        Don&apos;t have an account?{" "}
        <button
          onClick={onSignup}
          className="text-[#ff2d2d] font-semibold bg-transparent border-none cursor-pointer hover:opacity-75 transition-opacity"
        >
          Sign up
        </button>
      </p>

      <SocialLogin label="in" />
    </div>
  );
}
