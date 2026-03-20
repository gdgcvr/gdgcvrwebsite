import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../index.css";
import InitialLoader from "../components/InitialLoader/InitialLoader";
import { Providers } from "../components/Providers";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { nextEvent } from "@/data/events";
import { GoogleAnalytics } from '@next/third-parties/google'

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "GDG on Campus CVR College of Engineering",
  description:
    "The official website of GDG on Campus CVR College of Engineering",
  authors: [
    { name: "Eswar Dudi" },
    { name: "Mantripragada Komal Sathvik" },
    { name: "Sadhu Sreeja" },
  ],
  creator: "GDG on Campus CVR College of Engineering",
  metadataBase: new URL("https://gdg.cvr.ac.in/"),
  alternates: {
    canonical: "/",
  },
  icons: "https://gdg.cvr.ac.in/favicon.ico",
  keywords: [
    "GDG on Campus CVR College of Engineering",
    "GDG",
    nextEvent.title,
    "CVR",
    "CVR College of Engineering",
    "GDG Events",
    "GDG on Campus CVR",
    "GDG Team",
  ],
  openGraph: {
    title: "GDG on Campus CVR College of Engineering",
    description:
      "Empowering the next generation of developers at CVR College of Engineering.",
    type: "website",
    url: "https://gdg.cvr.ac.in/",
    siteName: "GDG on Campus CVR College of Engineering",
    locale: "en_IN",
    images: [{ url: "/opengraph-image" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "GDG on Campus CVR College of Engineering",
    description:
      "Empowering the next generation of developers at CVR College of Engineering.",
    creator: "@gdsccvr",
    images: ["/opengraph-image"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="google-site-verification"
          content="q1ZsfoMNVwZ88aBhaGaAdNtM0LF8dY0kRB-9zCUeT70"
        />
        <GoogleAnalytics gaId="G-9XHDSLTMQ9" />
      </head>
      <body className={`${inter.variable} font-sans`} suppressHydrationWarning>
        <Providers>
          <InitialLoader />
          <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-1 relative">{children}</main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
