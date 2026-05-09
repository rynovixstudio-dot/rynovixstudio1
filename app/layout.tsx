import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://rynovixstudio.com"),
  title: "Rynovix Studio | Viral Reels & Video Production for Brands",
  description:
    "Rynovix Studio helps brands, founders, and creators shoot, edit, and publish premium reels, shorts, TikToks, and social videos that convert attention into bookings.",
  openGraph: {
    title: "Rynovix Studio | Viral Reels & Video Production",
    description:
      "Premium video shooting, reel creation, editing, and social content production for brands that want more reach, trust, and inquiries.",
    url: "https://rynovixstudio.com",
    siteName: "Rynovix Studio",
    images: [
      {
        url: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Video production studio camera setup",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rynovix Studio | Viral Reels & Video Production",
    description:
      "Shoot, edit, and produce platform-ready reels and social videos with a premium creative team.",
    images: [
      "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=1200&q=80",
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${poppins.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
