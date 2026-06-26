import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Yuxuan Cheng | AI Governance Portfolio",
  description:
    "Personal portfolio for AI governance, privacy engineering, synthetic media compliance, and responsible AI systems.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body
        className={`${geistSans.variable} min-h-full flex flex-col bg-[#f4f4f1]`}
      >
        {children}
      </body>
    </html>
  );
}
