'use client'

import React from "react"
import { useRouter } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

type LoginFormProps = React.ComponentProps<"div"> & {
  mode?: 'login' | 'register';
};

export function LoginForm({
  className,
  mode = 'login',
  ...props
}: LoginFormProps) {
  // State for form fields and error
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [error, setError] = React.useState("");
  const router = useRouter();

  // Mock user
  const mockUser = { email: "test@gmail.com", password: "123456" };

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    if (mode === "login") {
      if (email === mockUser.email && password === mockUser.password) {
        router.push("/dashboard");
      } else {
        setError("Invalid email or password");
      }
    }
    // ...no-op for register mode...
  }

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardHeader>
          <CardTitle>
            {mode === 'register' ? 'Register' : 'Login to your account'}
          </CardTitle>
          <CardDescription>
            {mode === 'register'
              ? 'Create a new account by filling the form below'
              : 'Enter your email below to login to your account'}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col gap-6">
              <div className="grid gap-3">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  required
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                />
              </div>
              <div className="grid gap-3">
                <div className="flex items-center">
                  <Label htmlFor="password">Password</Label>
                  {mode === 'login' && (
                    <a
                      href="#"
                      className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                    >
                      Forgot your password?
                    </a>
                  )}
                </div>
                <Input
                  id="password"
                  type="password"
                  required
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                />
              </div>
              {mode === 'register' && (
                <div className="grid gap-3">
                  <Label htmlFor="passwordCheck">Confirm Password</Label>
                  <Input id="passwordCheck" type="password" required />
                </div>
              )}
              {error && (
                <div className="text-red-500 text-sm">{error}</div>
              )}
              <div className="flex flex-col gap-3">
                <Button type="submit" className="w-full">
                  {mode === 'register' ? 'Register' : 'Login'}
                </Button>
              </div>
            </div>
            <div className="mt-4 text-center text-sm">
              {mode === 'register' ? (
                <>
                  Have an account?{' '}
                  <a href="/login" className="underline underline-offset-4">
                    Login here
                  </a>
                </>
              ) : (
                <>
                  Don&apos;t have an account?{' '}
                  <a href="/register" className="underline underline-offset-4">
                    Register here
                  </a>
                </>
              )}
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
