import type React from "react"
import type { Metadata } from "next"
import Head from 'next/head';
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Mahmoud Yousif",
  description: "Personal portfolio website showcasing Mahmoud's work and skills as a full stack developer",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <Head>
        <link
          rel="icon"
          href="/light-logo.ico"
          media="(prefers-color-scheme: light)"
        />
        <link
          rel="icon"
          href="/dark-logo.ico"
          media="(prefers-color-scheme: dark)"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}

