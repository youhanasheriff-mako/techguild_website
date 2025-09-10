import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from "@/components/Analytics";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "TechGuild — Your Hub for Tech Excellence",
  description:
    "Join a thriving community where technology professionals connect, learn, and grow together.",
  keywords: [
    "TechGuild",
    "technology community",
    "developers",
    "engineering",
    "DevOps",
    "data science",
    "workshops",
    "events",
    "blog",
  ],
  openGraph: {
    title: "TechGuild — Your Hub for Tech Excellence",
    description:
      "A vibrant technology community fostering collaboration, learning, and innovation.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "TechGuild — Your Hub for Tech Excellence",
    description:
      "A vibrant technology community fostering collaboration, learning, and innovation.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${jetbrains.variable} antialiased bg-background text-foreground`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
