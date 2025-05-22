"use client";
import { logout } from "./actions";

export default function DashboardPage() {
  async function handleLogout(e) {
    e.preventDefault();
    await logout();
  }

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">Panel faktur</h1>
      <p>Witaj w systemie wystawiania faktur! Tutaj pojawi się Twoje narzędzie do zarządzania fakturami.</p>
      <a
        href="#"
        onClick={handleLogout}
        className="border border-gray-300 rounded px-4 py-1 text-sm bg-white text-text transition hover:bg-accent hover:text-white hover:border-accent"
      >
        Log out
      </a>
    </div>
  )
}
