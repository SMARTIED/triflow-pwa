import type { Metadata } from "next";
import "../styles/globals.scss";

export const metadata: Metadata = {
  title: "TriFlow Plumbing",
  description: "Your trusted online plumbing store",
  themeColor: "#0b3c5d",
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "TriFlow Plumbing",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#0b3c5d" />
        <link rel="apple-touch-icon" href="/icons/icon-192.png" />
        <link rel="apple-touch-icon" sizes="512x512" href="/icons/icon-512.png" />
      </head>
      <body>{children}</body>
    </html>
  );
}
