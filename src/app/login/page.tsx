import { login } from "@/app/login/actions"
import { LoginForm } from "@/components/login-form"

export default function LoginPage() {
  return (
    <div className="grid min-h-svh lg:grid-cols-2">
      <div className="flex flex-col gap-4 p-6 md:p-10">
        <div className="flex gap-2 justify-start">
          <a href="./" className="flex items-center gap-2 font-bold text-lg">
           <div className="w-3 h-3 bg-accent rounded-full" />
            Invoicra
          </a>
        </div>
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-xs">
            <LoginForm action={login} />
          </div>
        </div>
      </div>
      <div className="relative hidden bg-accent/80 lg:block">
        {/* <img
          src="/placeholder.svg"
          alt="Image"
          className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
        /> */}
      </div>
    </div>
  )
}
