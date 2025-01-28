import type { Metadata } from "next";
import { Libre_Baskerville } from "next/font/google";
import "./globals.css";

const libreBaskerville = Libre_Baskerville({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Alpha Clock | McMaster University",
  description:
    "A minimalist clock display for Alpha group discussions at McMaster University",
  openGraph: {
    title: "Alpha Clock | McMaster University",
    description:
      "A minimalist clock display for Alpha group discussions at McMaster University",
    images: [{ url: "/alpha_pfp.JPG" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={libreBaskerville.className}>{children}</body>
    </html>
  );
}
