import { Providers } from "@/components/Providers";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./global.css";
import { Footer, Header } from "@/components/layout";

const roboto = Roboto({
  weight: "300",
  variable: "--font-roboto",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "React Ecommerce",
  description: "Prueba técnica ecommerce en React v18",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${roboto.variable}`}>
        <Providers>
          <Header />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
