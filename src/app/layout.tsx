// src/app/layout.tsx
import "./globals.css";
import type { ReactNode } from "react";
import Header from "@/app/(components)/Header";
import Footer from "./(components)/Footer";

export const metadata = {
  title: "Pang Jittrabhorn",
  description: "Analysis and Developer",
};

function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="bg-[#f2f2eb]">
      <body className="text-gray-600 overflow-x-hidden">
        <div className="bg-[#f2f2eb]">
          <Header />
        </div>
        <main className="flex-1 bg-[#f2f2eb]">{children}</main>
        <Footer/>
      </body>
    </html>
  );
}

export default RootLayout;