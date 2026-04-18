import '@/styles/scss/style.scss'

import type { Metadata } from "next";
import { Be_Vietnam_Pro } from "next/font/google";
import ApolloProvider from "@/lib/apollo-provider";
import { Footer, Header } from "@/components/layout";
import { ScrollToTop } from "@/components/ui";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { PublicSettingsProvider } from '@/contexts/PublicSettingsContext';

const beVietnamPro = Be_Vietnam_Pro({
  subsets: ['latin', 'vietnamese'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
  variable: "--font-be-vietnam-pro",
})

export const metadata: Metadata = {
  title: "Nhu Y Truong | Full-stack Developer",
  description: "PPortfolio of Nhu Y Truong, a Full-stack Developer specializing in React.js, Next.js, and Node.js/NestJS. Showcasing projects, experience, and technical skills",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const messages = await getMessages();

  return (
    <html lang="en">
      <body suppressHydrationWarning className={`${beVietnamPro.className}`}>
        <NextIntlClientProvider messages={messages}>
          <ApolloProvider>
            <PublicSettingsProvider>
              <Header />
              <main>{children}</main>
              <Footer />
              <ScrollToTop />
            </PublicSettingsProvider>
          </ApolloProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}



