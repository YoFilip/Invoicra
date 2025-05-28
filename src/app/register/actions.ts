"use server"
import { createClient } from "@/utils/supabase/server"
import { redirect } from "next/navigation"

export async function register(formData: FormData) {
  const email = formData.get("email") as string
  const password = formData.get("password") as string
  if (!password || password.length < 8) {
    return { error: "Hasło musi zawierać co najmniej 8 znaków." }
  }
  const supabase = createClient()

  const { data, error } = await supabase.auth.signUp({ email, password })
  // Obsługa błędu z error
  if (error) {
    if (
      error.message.includes("already registered") ||
      error.message.includes("User already exists") ||
      error.message.includes("is already signed up")
    ) {
      return { error: "A user with this email address already exists." }
    }
    return { error: error.message }
  }
  // Obsługa edge-case: user istnieje, ale nie ma errora, identities puste
  if (data && Array.isArray(data.user?.identities) && data.user.identities.length === 0) {
    return { error: "A user with this email address already exists."}
  }
  redirect("/dashboard")
}