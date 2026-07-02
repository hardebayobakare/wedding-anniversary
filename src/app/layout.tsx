import type { Metadata } from "next";
import { Playfair_Display, Poppins } from "next/font/google";
import "./globals.css";

// Elegant serif for headings — feel free to swap for another romantic serif
const playfair = Playfair_Display({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

// Clean, modern sans for body copy
const poppins = Poppins({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Happy 5th Anniversary, My Love",
  description: "Five years of love, laughter, growth, and beautiful memories.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${poppins.variable}`}>
      <body className="min-h-screen bg-[var(--color-cream)] font-body text-[var(--color-charcoal)] antialiased">
        {children}
      </body>
    </html>
  );
}
