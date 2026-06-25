import type { Metadata } from "next";
import "./globals.css";

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
      <body className="min-h-full flex flex-col bg-[#f4f4f1]">{children}</body>
    </html>
  );
}
