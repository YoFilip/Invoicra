import { register } from "@/app/register/actions"
import { RegisterForm } from "@/components/register-form"

export default function RegisterPage() {
  return (
    <div className="grid min-h-svh lg:grid-cols-2">
      <div className="relative hidden bg-accent/80 lg:block">
        {/* <img
          src="/placeholder.svg"
          alt="Image"
          className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
        /> */}
      </div>
      <div className="flex flex-col gap-4 p-6 md:p-10">
        <div className="flex gap-2 justify-start md:justify-end xl:justify-end">
          <a href="./" className="flex items-center gap-2 font-bold text-lg">
            <div className="w-3 h-3 bg-accent rounded-full" />
            Invoicra
          </a>
        </div>
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-xs">
            <RegisterForm action={register} />
          </div>
        </div>
      </div>
    </div>
  )
}
