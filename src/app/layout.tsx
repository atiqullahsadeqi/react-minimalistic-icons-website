import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Menu from "./components/Menu";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "React Minimalistic Icons - 5000+ SVG Icons for React & Next.js",
  description:
    "A comprehensive collection of minimalistic SVG icons for React and Next.js applications. MIT licensed, TypeScript support, and easy to use.",
  keywords:
    "react icons, svg icons, minimalistic icons, nextjs icons, typescript icons",
  authors: [{ name: "React Minimalistic Icons" }],
  openGraph: {
    title: "React Minimalistic Icons",
    description: "5000+ minimalistic SVG icons for React & Next.js",
    type: "website",
  },
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
        <Menu />
        {children}
      </body>
    </html>
  );
}
