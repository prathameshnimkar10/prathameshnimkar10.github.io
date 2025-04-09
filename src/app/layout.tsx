import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "next-themes";
import Script from "next/script";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Prathamesh Nimkar : Portfolio",
  description: "Prathamesh Nimkar's Portfolio website, made using Next.JS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <body suppressHydrationWarning>
        {/* <!-- Google tag (gtag.js) --> */}
        <Script async strategy="afterInteractive" src="https://www.googletagmanager.com/gtag/js?id=G-09GZ6JS23R"></Script>
        <Script strategy="afterInteractive" id="google-analytics">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){window.dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-09GZ6JS23R');
          `}
        </Script>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem={false}>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
