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
    "Retaini – Paprasta Klientų Išlaikymo ir Rekomendacijų Platforma Paslaugų Verslams",
  description:
    "Retaini padeda paslaugų verslams didinti klientų lojalumą ir gauti daugiau rekomendacijų su automatizuotais priminimais, apdovanojimais ir asmeniniu bendravimu.",
  icons: {
    icon: "/favicon.png", // arba .png arba .svg
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
