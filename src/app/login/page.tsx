"use client";
import React, { useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";

export function LoginForm() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Login failed");

      // Store token and user info in localStorage
      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));

      alert("Login successful! Redirecting...");
      router.push("/"); // Redirect to homepage
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="m-16">
      <div className="max-w-md w-full mx-auto rounded-lg p-6 shadow-lg bg-white">
        <h2 className="text-2xl font-bold text-red-500">Welcome Back!</h2>
        <p className="text-gray-700 text-sm mt-2">Sign in to continue your journey with RelocateEase.</p>

        <form className="my-6" onSubmit={handleSubmit}>
          <LabelInputContainer className="mb-4">
            <Label htmlFor="email">Email Address</Label>
            <Input id="email" placeholder="john.doe@example.com" type="email" required onChange={handleChange} />
          </LabelInputContainer>

          <LabelInputContainer className="mb-6">
            <Label htmlFor="password">Password</Label>
            <Input id="password" placeholder="••••••••" type="password" required onChange={handleChange} />
          </LabelInputContainer>

          {error && <p className="text-red-500 text-sm">{error}</p>}

          <button
            className="w-full bg-red-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-600 transition flex items-center justify-center space-x-2"
            type="submit"
            disabled={loading}
          >
            {loading ? "Logging in..." : "Login →"}
          </button>
        </form>
      </div>
    </div>
  );
}

const LabelInputContainer = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  return <div className={cn("flex flex-col space-y-2 w-full", className)}>{children}</div>;
};

export default LoginForm;
