import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title:
    "副業診断アプリ | 副業診断 | あなたに最適な副業を簡単に見つけよう - 副業の始め方と単価相場",
  description:
    "簡単な質問に答えるだけで、あなたに最適な副業を診断します。単価相場や始め方もわかります。",
  verification: {
    google: "nYV77zDLt9Puee92fKs-xOjU7tkLPhyJ4Cpz6oy84RY",
  },
  viewport: "width=device-width, initial-scale=1",
  openGraph: {
    title:
      "副業診断アプリ | 副業診断 | あなたに最適な副業を簡単に見つけよう - 副業の始め方と単価相場",
    description:
      "簡単な質問に答えるだけで、あなたに最適な副業を診断します。単価相場や始め方もわかります。",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "副業診断アプリ",
      },
    ],
    type: "website",
    locale: "ja_JP", // 日本語ロケールを明示
    siteName: "副業診断アプリ", // サイト名を追加
  },
  twitter: {
    card: "summary_large_image",
    title: "副業診断アプリ | 副業診断 | あなたにぴったりの副業を見つけよう",
    description:
      "簡単な質問で最適な副業を診断！あなたにぴったりの副業を見つけ、始め方や単価相場も確認できます。",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "副業診断アプリ",
      },
    ],
  },
  generator: "v0.dev",
  robots: "index, follow", // クローラーにインデックスを促進
  alternates: {
    canonical: "https://sidejob-diagnosis.vercel.app/", // 正規URLを追加
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
