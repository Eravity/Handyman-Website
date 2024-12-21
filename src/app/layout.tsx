import type { Metadata } from "next";
import { Kumbh_Sans } from "next/font/google";
import "./globals.css";

const kumbhSans = Kumbh_Sans({
  variable: "--font-kumbh-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Handyman",
  openGraph: {
    title: "Handyman",
    description: `Acesta este un site de prezentare pentru serviciile de reparatii casnice, instalatii sanitare si electrice oferite de catre un handyman.`,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`container ${kumbhSans.variable}`}
        style={{ fontFamily: "var(--font-kumbh-sans)" }}
      >
        {children}
      </body>
    </html>
  );
}
