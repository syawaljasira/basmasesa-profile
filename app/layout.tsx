import type { Metadata } from "next";
import { Calistoga, Quicksand, Domine } from "next/font/google";
import "./globals.css";
import { MainProvider } from "@/context/MainContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const quicksandSans = Quicksand({
  variable: "--font-quicksand-sans",
  subsets: ["latin"],
});

const domineSerif = Domine({
  variable: "--font-domine-serif",
  subsets: ["latin"],
});

const calistogaDisplay = Calistoga({
  variable: "--font-calistoga-display",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Basmasesa",
  description: "Basmasesa | Event, Exhibition & Interior",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${quicksandSans.variable} ${domineSerif.variable} ${calistogaDisplay.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col" suppressHydrationWarning>
        <MainProvider>
          <header>
            <Navbar />
          </header>

          <main className="mainLayout__children relative bg-dark pt-[8.5vh]">
            {children}
          </main>

          <Footer />
        </MainProvider>
      </body>
    </html>
  );
}
