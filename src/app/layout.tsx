import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../../styles/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Projeto To Do   ",
  description: "projeto desenvolvido para aprimorar conhecimento no frame next js ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
