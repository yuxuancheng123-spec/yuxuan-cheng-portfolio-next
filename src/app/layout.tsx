import type { Metadata } from "next";
import { Inter, Noto_Sans_SC, Noto_Serif_SC, PT_Serif } from "next/font/google";
import "./globals.css";
import { MotionEffects } from "@/components/motion/motion-effects";

const ptSerif = PT_Serif({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  variable: "--font-pt-serif",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

// Chinese faces: one for headings (serif), one for body text (sans), the same on every platform.
const notoSerifSC = Noto_Serif_SC({
  weight: ["400", "600"],
  variable: "--font-noto-serif-sc",
  display: "swap",
  preload: false,
});

const notoSansSC = Noto_Sans_SC({
  weight: ["400", "500", "600"],
  variable: "--font-noto-sans-sc",
  display: "swap",
  preload: false,
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
    <html lang="en" className={`${ptSerif.variable} ${inter.variable} ${notoSerifSC.variable} ${notoSansSC.variable} h-full antialiased`} suppressHydrationWarning>
      <head>
        {/* Hide reveal targets only when scripts run; show everything after 3s if hydration stalls. */}
        <script
          dangerouslySetInnerHTML={{
            __html:
              "document.documentElement.classList.add('js');setTimeout(function(){document.documentElement.classList.add('reveal-fallback')},3000);",
          }}
        />
      </head>
      <body className="flex min-h-full flex-col bg-background text-ink">
        {children}
        <MotionEffects />
      </body>
    </html>
  );
}
