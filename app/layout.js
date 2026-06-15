import { Geist } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

export const metadata = {
  title: {
    default: "ADEM Financial Consulting Ltd",
    template: "%s — ADEM Financial Consulting",
  },
  description:
    "Professional accounting, tax, audit, and compliance advisory for Nigerian SMEs and growing businesses.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={geistSans.variable} data-scroll-behavior="smooth">
      <body className="min-h-screen flex flex-col antialiased">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
