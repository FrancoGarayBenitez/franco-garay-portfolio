import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import Navigation from "@/components/Navigation";
import { env } from "@/lib/config/env";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL(env.siteUrl),
  title: "Franco Garay - Desarrollador Full Stack",
  description:
    "Portfolio profesional de Franco Garay. Desarrollador Full Stack especializado en Java, Spring Boot, React y TypeScript. Técnico Universitario en Programación (UTN Mendoza).",
  keywords: [
    "desarrollador",
    "full stack",
    "java",
    "spring boot",
    "react",
    "typescript",
    "portfolio",
    "mendoza",
    "argentina",
  ],
  authors: [{ name: "Franco Garay" }],
  creator: "Franco Garay",
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: env.siteUrl,
    title: "Franco Garay - Desarrollador Full Stack",
    description:
      "Portfolio profesional de Franco Garay. Proyectos y habilidades en desarrollo web con Java, Spring Boot, React y TypeScript.",
    siteName: "Franco Garay Portfolio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Franco Garay Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Franco Garay - Desarrollador Full Stack",
    description:
      "Portfolio profesional de Franco Garay. Java · Spring Boot · React · TypeScript.",
    images: ["/og-image.jpg"],
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
    <html lang="es" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navigation />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
