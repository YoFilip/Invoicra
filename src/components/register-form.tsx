"use client"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Spinner } from "@/components/ui/spinner"
import React, { useState } from "react"

export function RegisterForm({
    className,
    action,
    ...props
}: React.ComponentPropsWithoutRef<"form"> & { action: (formData: FormData) => Promise<{ error?: string } | void> }) {
    const [error, setError] = useState<string | null>(null)
    const [loading, setLoading] = useState(false)

    async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault()
        setLoading(true)
        const formData = new FormData(event.currentTarget)
        const result = await action(formData)
        setLoading(false)
        if (result?.error) {
            setError(result.error)
        } else {
            setError(null)
        }
    }

    return (
        <form className={cn("flex flex-col gap-6", className)} {...props} onSubmit={handleSubmit}>
            <div className="flex flex-col items-center gap-2 text-center">
                <h1 className="text-2xl font-bold">Sign up</h1>
                <p className="text-balance text-sm text-muted-foreground">
                    Enter your email and password to create an account
                </p>
            </div>
            <div className="grid gap-6">
                <div className="grid gap-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" name="email" type="email" placeholder="m@example.com" required autoComplete="email"/>
                </div>
                <div className="grid gap-2">
                    <Label htmlFor="password">Password</Label>
                    <Input id="password" name="password" type="password" placeholder="*************"required autoComplete="new-password" />
                </div>
                <Button type="submit" className="w-full" disabled={loading}>
                    {loading ? (
                        <>
                          <Spinner className="mr-3 size-5" />
                          Signing up...
                        </>
                    ) : (
                        "Sign up"
                    )}
                </Button>
                {error && (
                    <div className="text-red-500 text-sm text-center mt-2">{error}</div>
                )}
                 <div className="relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t after:border-border">
          <span className="relative z-10 bg-background px-2 text-muted-foreground">
           Or
          </span>
        </div>
            </div>
            <div className="text-center text-sm">
                Already have an account?{" "}
                <a href="/login" className="underline underline-offset-4">
                    Log in
                </a>
            </div>
        </form>
    )
}
