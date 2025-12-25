import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/next"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Abdulslam's Portfolio",
  description: "Get to know me and also flexing my skills.",
  icons: {
    icon: "/my-pic-removebg-preview.png",
    apple: "/my-pic-removebg-preview.png",
  },
  openGraph: {
    title: "Abdulslam's Portfolio",
    description: "Get to know me and also flexing my skills.",
    url: "https://codedbylanre.dev",
    images: [
      {
        url: "/my-pic-removebg-preview.png",
        alt: "Abdulslam's Portfolio",
        width: 800,
        height: 600,
      }
    ]
  }
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
        <Navbar/>
        {children}
        <SpeedInsights/>
      <Analytics/>
      </body>
    </html>
  );
}
