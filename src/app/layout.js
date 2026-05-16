import Header from "@/components/Header";
import MobileWarning from "@/components/MobileWarning";
import "../styles/globals.css";
import { WindowProvider } from "@/context/WindowsContext";
import { Analytics } from "@vercel/analytics/react";

export const metadata = {
  title: "Abdelrahman Mostafa | Frontend Developer",
  description:
    "Frontend developer specializing in React, Next.js, and TypeScript. Building fast, accessible, and beautiful web experiences.",
  metadataBase: new URL("https://abdelrahmanmostafa.vercel.app/"),
  openGraph: {
    title: "Abdelrahman Mostafa | Frontend Developer",
    description:
      "Frontend developer specializing in React, Next.js, and TypeScript. Building fast, accessible, and beautiful web experiences.",
    url: "https://abdelrahmanmostafa.vercel.app/",
    siteName: "Abdelrahman Mostafa",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Abdelrahman Mostafa – Frontend Developer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Abdelrahman Mostafa | Frontend Developer",
    description:
      "Frontend developer specializing in React, Next.js, and TypeScript. Building fast, accessible, and beautiful web experiences.",
    images: ["/opengraph-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`font-quicksand `}>
        <WindowProvider>
          <Header />
          {children}
          <MobileWarning />
          <Analytics />
        </WindowProvider>
      </body>
    </html>
  );
}
