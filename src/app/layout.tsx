import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Invoicra",
  description: "Invoicra is a simple and modern invoice generator built with Next.js, Tailwind CSS, and Supabase. Create, manage, and export invoices as PDF.",
  authors: [{ name: "Filip Świątek", url: "https://yofilip.github.io/PortfolioWebsite/" }],
  creator: "Filip Świątek",
  // metadataBase: new URL("https://invoicra.vercel.app"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
