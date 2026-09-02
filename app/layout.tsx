import type { Metadata } from "next";
import { DM_Sans, Patrick_Hand } from "next/font/google";
import "./globals.scss";
import styles from "./layout.module.scss";
import Navbar from "@/components/Navbar/Navbar";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";


const primary = DM_Sans({
  subsets: ["latin"],
  display: "swap", // same as display=swap on the Google URL
  variable: "--font-primary",
});

const secondary = Patrick_Hand({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-secondary",
  weight: '400',
});



export const metadata: Metadata = {
  title: "Nicole Lopez",
  description: "My personal site",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${secondary.variable} ${primary.variable}`}
    >
      <body className={styles.grid}>
        <Header />
        <section className={styles.journal}>
          <Navbar />
          <main className={styles.main}>
            {children}
            <div className={styles.paperOverlay}></div>
          </main>
        </section>
      </body>
    </html>
  );
}
