"use client";

import { useState } from "react";

import Label from "../Label";
import Input from "../Input";
import PrimaryBtn from "../PrimaryBtn";
import SocialLogin from "../SocialLogin";

interface Props {
  onLogin: () => void;
}

export default function SignUp({ onLogin }: Props) {
  const [agreed, setAgreed] = useState(false);

  return (
    <div className="flex flex-col flex-1">
      <h1 className="font-[var(--font-syne)] font-bold text-2xl text-[#f0f0f0] mb-1">
        Sign up
      </h1>
      <p className="text-[12.5px] text-[#888] mb-5 leading-relaxed">
        Let&apos;s get you all set up so you can access your personal account
      </p>

      <div className="grid grid-cols-2 gap-2.5">
        <div>
          <Label text="First Name" />
          <Input placeholder="John" />
        </div>
        <div>
          <Label text="Last Name" />
          <Input placeholder="Doe" />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-2.5">
        <div>
          <Label text="Email" />
          <Input placeholder="john.doe@gmail.com" type="email" />
        </div>
        <div>
          <Label text="Phone Number" />
          <Input placeholder="+234 000 0000" type="tel" />
        </div>
      </div>

      <Label text="Password" />
      <Input placeholder="••••••••" type="password" />

      <Label text="Confirm Password" />
      <Input placeholder="••••••••" type="password" />

      <label className="flex items-center gap-1.5 cursor-pointer mb-3.5">
        <input
          type="checkbox"
          checked={agreed}
          onChange={(e) => setAgreed(e.target.checked)}
          className="accent-[#ff2d2d]"
        />
        <span className="text-[12px] text-[#aaa]">
          I agree to all the <span className="text-[#ff2d2d]">Terms</span> and{" "}
          <span className="text-[#ff2d2d]">Privacy Policies</span>
        </span>
      </label>

      <PrimaryBtn>Create account</PrimaryBtn>

      <p className="text-center text-[12.5px] text-[#777] mt-3">
        Already have an account?{" "}
        <button
          onClick={onLogin}
          className="text-[#ff2d2d] font-semibold bg-transparent border-none cursor-pointer hover:opacity-75 transition-opacity"
        >
          Login
        </button>
      </p>

      <SocialLogin label="up" />
    </div>
  );
}
