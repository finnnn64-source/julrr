import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Layout from "@/lib/pages/layout";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Julrr - 간편한 URL 줄이기",
  description: "긴 링크를 짧고 간편하게 만들어보세요. 빠르고 안전한 무료 URL 단축 서비스",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body
        className={`${inter.variable} antialiased`}
      >
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
