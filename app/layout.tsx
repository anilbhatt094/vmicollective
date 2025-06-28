"use client";
import React , {useRef} from "react"
import "@/styles/globals.css";
import Header from "../components/common/Header"
import Footer from "../components/common/Footer"



export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

const sectionOneRef = useRef<HTMLDivElement | null>(null);
  const sectionTwoRef = useRef<HTMLDivElement | null>(null);

  const scrollToSection = (section: "one" | "two") => {
    if (section === "one" && sectionOneRef.current) {
      sectionOneRef.current.scrollIntoView({ behavior: "smooth" });
    } else if (section === "two" && sectionTwoRef.current) {
      sectionTwoRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <html suppressHydrationWarning lang="en">
      <head />
      <body
        
      >
        <>
        <Header onMenuClick={scrollToSection}/>
         <main>
              {children}
            </main>
      <Footer/>
      </>
      
      </body>
    </html>
  );
}
