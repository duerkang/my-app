import "./globals.css";
import React from "react";
import {Metadata} from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {Title} from "@/lib/constant";

export const metadata: Metadata = {
  title: Title,
  description: 'A Simple store'
}
export default function RootLayout({children,}: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en">
    <body>
    <Header/>
    {children}
    <Footer/>
    </body>
    </html>
  );
}
