import type { Metadata, Viewport } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import ServiceWorkerRegistrar from "@/components/ServiceWorkerRegistrar";

const geist = Geist({ variable: "--font-geist", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MacroMap — High Protein Fast Food",
  description:
    "Find the highest protein fast food items in Canada and the USA. Filter by calories, price, and restaurant.",
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "MacroMap",
  },
  icons: {
    apple: "/icons/apple-touch-icon.png",
    icon: "/icons/icon-192.png",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  themeColor: "#10b981",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${geist.variable} dark`}>
      <body className="min-h-full bg-zinc-950 text-white">
        <ServiceWorkerRegistrar />
        {children}
      </body>
    </html>
  );
}
