export const dynamic = 'force-dynamic'

import type { Metadata } from "next";
import type { Viewport } from "next";
import { Inter, IBM_Plex_Serif } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: '--font-inter' });
const ibmPlexSerif = IBM_Plex_Serif({ subsets: ["latin"], weight:[ "400", "700"] ,variable: '--font-ibm-plex-serif' });

export const metadata: Metadata = {
  title: "Horizon",
  description: "Horizon is a modern banking platform for evryone",
  icons: {
    icon: "/icons/logo.svg",
  }
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 0.67,
  maximumScale: 0.67,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${ibmPlexSerif.variable}`}>{children}</body>
    </html>
  );
}
