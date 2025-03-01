"use client";
import React from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { IconBrandGithub, IconBrandGoogle, IconBrandLinkedin } from "@tabler/icons-react";

export function LoginForm() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Login submitted");
  };

  return (
    <div className="m-16">
      <div className="max-w-md w-full mx-auto rounded-lg p-6 shadow-lg bg-white">
        {/* Title Section */}
        <h2 className="text-2xl font-bold text-red-500">Welcome Back!</h2>
        <p className="text-gray-700 text-sm mt-2">Sign in to continue your journey with RelocateEase.</p>

        {/* Login Form */}
        <form className="my-6" onSubmit={handleSubmit}>
          {/* Email Field */}
          <LabelInputContainer className="mb-4">
            <Label htmlFor="email">Email Address</Label>
            <Input id="email" placeholder="john.doe@example.com" type="email" required />
          </LabelInputContainer>

          {/* Password Field */}
          <LabelInputContainer className="mb-6">
            <Label htmlFor="password">Password</Label>
            <Input id="password" placeholder="••••••••" type="password" required />
          </LabelInputContainer>

          {/* Login Button */}
          <button
            className="w-full bg-red-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-600 transition flex items-center justify-center space-x-2"
            type="submit"
          >
            Login →
          </button>

          {/* Forgot Password & Signup Link */}
          <div className="text-center mt-4">
            <a href="/forgot-password" className="text-sm text-red-500 hover:underline">
              Forgot Password?
            </a>
          </div>

          {/* Divider */}
          <div className="my-6 border-t border-gray-300 w-full"></div>

          {/* Social Login */}
          <p className="text-center text-gray-700 mb-4">Or sign in with</p>
          <div className="flex flex-col space-y-3">
            <SocialButton icon={<IconBrandGithub />} text="Sign in with GitHub" />
            <SocialButton icon={<IconBrandGoogle />} text="Sign in with Google" />
            <SocialButton icon={<IconBrandLinkedin />} text="Sign in with LinkedIn" />
          </div>
        </form>
      </div>
    </div>
  );
}

/* Social Login Button Component */
const SocialButton = ({ icon, text }: { icon: React.ReactNode; text: string }) => {
  return (
    <button
      className="flex items-center space-x-3 w-full bg-gray-50 border border-gray-300 px-4 py-3 rounded-lg font-semibold hover:border-red-500 transition"
      type="button"
    >
      {icon}
      <span>{text}</span>
    </button>
  );
};

/* Input Container */
const LabelInputContainer = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  return <div className={cn("flex flex-col space-y-2 w-full", className)}>{children}</div>;
};

export default LoginForm;
