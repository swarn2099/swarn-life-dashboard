import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Swarn's Life Dashboard",
  description: "Curated lifestyle, events, and business insights.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className + " bg-obsidian text-zinc-100 min-h-screen"}>
        {children}
      </body>
    </html>
  );
}
