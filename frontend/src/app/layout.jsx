import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { ProductsProvider } from "@/context/productContext";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Ecommerce",
  description: "This is the best Ecommerce app in the world made on Strapi",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
    <ProductsProvider>
          <Navbar />
          {children}
          </ProductsProvider>

      </body>
    </html>
  );
}
