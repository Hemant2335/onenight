import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { MenuProvider } from "@/contexts/MenuContext";
import FloatingMenuButton from "@/components/FloatingMenuButton";
import GlobalMenu from "@/components/GlobalMenu";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "RISE - One Night in Dubai",
  description: "Musical Cultural Festival and Venture Studio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <MenuProvider>
          <div className="relative">
            {children}
            <FloatingMenuButton />
            <GlobalMenu />
          </div>
        </MenuProvider>
      </body>
    </html>
  );
}
