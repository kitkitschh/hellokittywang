import { VT323 } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const vt323 = VT323({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-vt323",
  display: "swap",
});

export const metadata = {
  title: "Kitty Wang",
  description:
    "Kitty Wang is a Chinese-American interdisciplinary artist based in Brooklyn, NY, working across video, drawing, sculpture, and installation.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={vt323.variable}>
      <body className="min-h-screen flex flex-col font-sans">
        <Nav />
        <main className="flex-1 max-w-5xl w-full mx-auto px-6 py-12">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
