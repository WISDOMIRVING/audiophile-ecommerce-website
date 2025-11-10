import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/header";
import { ProductsProvider } from "@/context/products";
import Footer from "@/components/layout/footer";

// Import the Manrope font
const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Audiophile E-Commerce",
  description: "Audiophile e-commerce website built with Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${manrope.variable} antialiased`}>
        <ProductsProvider>
          <Header />
          {children}
          <Footer />
        </ProductsProvider>
      </body>
    </html>
  );
}
