"use client"; 
import { SessionProvider } from 'next-auth/react';

interface ClientWrapperProps {
  children: React.ReactNode;
  pageProps?: {
    session?: any; 
  };
}

export default function ClientWrapper({
  children,
  pageProps = {},
}: ClientWrapperProps) {
  const session = pageProps?.session || null;

  return (
    <SessionProvider session={session}>
      {children}
    </SessionProvider>
  );
}
