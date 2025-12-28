import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.scss";
import ApolloProvider from "@/lib/apollo-provider";
import { Header, Footer } from "@/components/layout";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Company Website - Modern Business Solutions",
  description: "Professional company website built with Next.js, TypeScript, and GraphQL",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>
        <ApolloProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </ApolloProvider>
      </body>
    </html>
  );
}



