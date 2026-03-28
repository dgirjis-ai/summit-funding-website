import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Summit Fundings | Fast Business Funding Solutions",
  description:
    "Summit Fundings connects businesses with the right funding solutions. Merchant cash advances, equipment financing, term loans, and more. Fast approvals, flexible terms.",
  keywords:
    "business funding, merchant cash advance, equipment financing, term loans, working capital, business loans, MCA, revenue based financing",
  openGraph: {
    title: "Summit Fundings | Fast Business Funding Solutions",
    description:
      "Get matched with the best funding options for your business. Fast approvals, multiple lender options, no perfect credit required.",
    url: "https://summitfundings.com",
    siteName: "Summit Fundings",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="bg-white text-navy antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
