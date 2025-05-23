
import type { Metadata } from "next";
import { Toaster } from "sonner";
import "./globals.css";
import {Roboto} from 'next/font/google';

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Full-Stack Web Developer",
};

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '600', '500', '700'],
  // variable: '--font-roboto'
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    
      <html lang="en" className={roboto.className}>
        <body>
          
          {children}
          <Toaster />
        </body>
      </html>
    
  );
}
