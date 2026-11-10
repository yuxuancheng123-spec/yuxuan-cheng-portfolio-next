import type { Metadata } from "next";
import { PT_Serif } from "next/font/google";
import "./globals.css";

const ptSerif = PT_Serif({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  variable: "--font-pt-serif",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://yuxuan-cheng-portfolio-next.vercel.app"),
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
    <html lang="en" className={`${ptSerif.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col bg-background text-ink">{children}</body>
    </html>
  );
}
