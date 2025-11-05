import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import "aos/dist/aos.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Toaster } from "sonner";

const outfit = Outfit({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Awe Joseph - Fullstack Web Developer | Portfolio",
  description:
    "Innovative problem solver with a passion for creating secure & scalable solutions. Leveraging cutting edge technologies to craft intuitive user experiences and robust backend systems. Fullstack developer specializing in React, Next.js, Node.js, TypeScript, and modern web technologies.",
  keywords: [
    "Awe Joseph",
    "TechApostle",
    "Fullstack Developer",
    "Web Developer",
    "React",
    "Next.js",
    "Node.js",
    "TypeScript",
    "Portfolio",
  ],
  authors: [{ name: "Awe Joseph", url: "https://awejoseph.vercel.app" }],
  openGraph: {
    title: "Awe Joseph - Fullstack Web Developer",
    description:
      "Innovative problem solver creating secure & scalable web solutions",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" style={{ background: "#070d06" }}>
      <body
        className={`${outfit.variable} font-outfit`}
        suppressHydrationWarning
      >
        <Toaster
          position="top-center"
          richColors
          theme="dark"
          closeButton
          toastOptions={{
            style: {
              background: "#1c2f1a",
              border: "1px solid #243b21",
              color: "#f8f9f8",
            },
          }}
        />
        {children}
      </body>
    </html>
  );
}
