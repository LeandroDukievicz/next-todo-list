import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../../styles/globals.css";
import { Header } from "../components/header/page";
import ClientWrapper from "../components/clientWrapper/page";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Projeto To Do",
  description: "Projeto desenvolvido para aprimorar conhecimento no framework Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>
        <ClientWrapper>
          <Header />
          {children}
        </ClientWrapper>
      </body>
    </html>
  );
}
