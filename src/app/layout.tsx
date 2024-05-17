import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import 'swiper/css';
import 'swiper/css/pagination';
import "./css/style.css"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "energosystem",
  description: "energosystem",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main className="main">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
