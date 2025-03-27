import type { Metadata } from "next";
import { Sora, Work_Sans, Open_Sans } from "next/font/google";
import "./globals.css";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const workSans = Work_Sans({
  variable: "--font-work-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title:
    "Retaini – Simple Client Retention & Referral Platform for Service Businesses",
  description:
    "Retaini helps service businesses boost client loyalty and get more referrals with automated follow-ups, rewards, and personalized engagement.",
  icons: {
    icon: "/favicon.png", // or .png or .svg
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${sora.variable} ${workSans.variable} ${openSans.variable} antialiased`}
    >
      <body className="antialiased">{children}</body>
    </html>
  );
}
