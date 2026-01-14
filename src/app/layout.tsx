import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import Navigation from "@/components/Navigation";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Juan Pérez - Desarrollador Full Stack",
  description:
    "Portfolio profesional de Juan Pérez. Desarrollador Full Stack especializado en React, Next.js, Node.js y TypeScript. Creando soluciones web innovadoras.",
  keywords: [
    "desarrollador",
    "full stack",
    "react",
    "nextjs",
    "typescript",
    "portfolio",
  ],
  authors: [{ name: "Juan Pérez" }],
  creator: "Juan Pérez",
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "https://tu-dominio.com",
    title: "Juan Pérez - Desarrollador Full Stack",
    description:
      "Portfolio profesional showcasing proyectos y habilidades en desarrollo web moderno",
    siteName: "Portfolio Juan Pérez",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Juan Pérez Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Juan Pérez - Desarrollador Full Stack",
    description: "Portfolio profesional showcasing proyectos y habilidades",
    creator: "@tu_usuario",
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
