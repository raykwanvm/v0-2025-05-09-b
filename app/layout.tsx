import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/context/theme-context";
import Header2 from "@/components/header2";
import FooterOld from "./footer-old";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "StreamLine - Find Stillness in Motion",
  description: "Streamline your workflow, amplify your results.",
  generator: "v0.dev",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="palette-earthy">
      <body className={inter.className}>
        <ThemeProvider>
          <div className="min-h-screen flex flex-col">
            {/* <Header /> */}
            <Header2 />
            <main className="flex-1">{children}</main>
            <FooterOld />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
