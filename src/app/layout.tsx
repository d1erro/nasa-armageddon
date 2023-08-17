import './globals.css'
import { Inter } from 'next/font/google'
import Header from "@/components/Header/Header";
import styles from '../styles/Main.module.css'
import {Metadata} from "next";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: "Asteroid List | Armageddon 2023"
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header/>
        <div className={styles.backgroundEarth}/>
        <main>
            <div className={styles.mainContainer}>
                {children}
            </div>
        </main>
      </body>
    </html>
  )
}
