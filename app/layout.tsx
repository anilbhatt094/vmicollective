"use client";
import React  from "react"
import "@/styles/globals.css";
import Header from "../components/common/Header"
import Footer from "../components/common/Footer"



export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {



  return (
    <html suppressHydrationWarning lang="en">
      <head />
      <body
        
      >
        <>
        <Header />
         <main>
              {children}
            </main>
      <Footer/>
      </>
      
      </body>
    </html>
  );
}
