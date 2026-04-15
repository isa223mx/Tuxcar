import {  Urbanist } from "next/font/google";
import "./globals.css";
import Footer from "@/components/footer";
import Navbar from "@/components/nabvar";
import { ThemeProvider } from "@/components/theme-provider";
import { Metadata } from "next";  
import NextTopLoader from "nextjs-toploader";
import { ClerkProvider } from "@clerk/nextjs";


export const metadata: Metadata = {
  title: "Tuxcar",
  description: "Sistema de gestión automotriz",
}
const urbanist = Urbanist({
  subsets: ["latin"],
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body className={urbanist.className}> 
        <NextTopLoader color="#000" />
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
        <Navbar />
        {children} 
        <Footer />
        </ThemeProvider>
        </body>
    </html>
    </ClerkProvider>
  );
}
