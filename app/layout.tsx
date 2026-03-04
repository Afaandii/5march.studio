import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "5march.studio | Premier Web App Development Studio",
  description:
    "Elite digital craft for high-growth businesses. Membangun web app premium: Landing Page, E-Commerce, Sistem Pembayaran, dan Enterprise Solutions dengan desain modern glassmorphism.",
  keywords: [
    "web development studio",
    "web app premium",
    "landing page design",
    "e-commerce solution",
    "payment gateway integration",
    "5march studio",
    "jasa website modern",
    "glassmorphism design",
  ],
  authors: [{ name: "5march.studio" }],
  openGraph: {
    title: "5march.studio | Premier Web App Development Studio",
    description:
      "Elite digital craft for high-growth businesses. Membangun masa depan digital Anda dengan presisi dan inovasi.",
    type: "website",
    locale: "id_ID",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body className="noise-overlay antialiased">
        {children}
      </body>
    </html>
  );
}
