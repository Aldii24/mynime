import { Cinzel } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const cinzel = Cinzel({
  subsets: ["latin"],
  weigth: ["400", "500", "600", "700"],
});

export const metadata = {
  title: "Mynime",
  description: "An Anime List",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={cinzel.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
