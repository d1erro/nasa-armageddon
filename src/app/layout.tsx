import './globals.css'
import { Inter } from 'next/font/google'
import Header from '@/components/Header/Header'
import styles from '../styles/Main.module.css'
import { Metadata } from 'next'
import Image from 'next/image'
import earthImage from '@/../public/earth.jpeg'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'Asteroid List | Armageddon 2023',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="ru">
            <head>
                <link rel="icon" href="/favicon.ico" sizes="any" />
            </head>
            <body className={inter.className}>
                <Header />
                <div className={styles.earthImageContainer}>
                    <Image
                        className={styles.backgroundEarth}
                        src={earthImage}
                        alt="earthImage"
                        priority
                    />
                </div>
                <main>
                    <div className={styles.mainContainer}>{children}</div>
                </main>
            </body>
        </html>
    )
}
