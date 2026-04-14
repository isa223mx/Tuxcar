import {  Urbanist } from "next/font/google";
import "./globals.css";
import Footer from "@/components/footer";
import Navbar from "@/components/nabvar";
import { ThemeProvider } from "@/components/theme-provider";
import { Metadata } from "next";  


export const metadata: Metadata = {
  title: "Admin",
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
    <html lang="en">
      <body className={urbanist.className}> 
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
  );
}
