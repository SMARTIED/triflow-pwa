import "../styles/globals.scss";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "TriFlow Plumbing",
  description: "Your trusted online plumbing store",
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
      </head>

      <body>
        {/* GLOBAL HEADER */}
        <Header />

        {/* PAGE CONTENT */}
        <main>{children}</main>

        {/* GLOBAL FOOTER */}
        <Footer />
      </body>
    </html>
  );
}
