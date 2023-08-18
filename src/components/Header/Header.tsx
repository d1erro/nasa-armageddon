import styles from './Header.module.css'
import Link from 'next/link'
import { Passion_One } from 'next/font/google'

const passionOne = Passion_One({ weight: '400', subsets: ['latin'] })

const Header = () => {
    return (
        <header className={styles.header}>
            <Link href="/" className={styles.headerLink}>
                <h1 className={`${passionOne.className} ${styles.headerTitle}`}>
                    Armageddon 2023
                </h1>
                <h4 className={styles.headerDescription}>
                    ООО Команда им. Б. Уиллиса
                </h4>
                <h4 className={styles.headerDescription}>
                    Взрываем астероиды с 1998 года.
                </h4>
            </Link>
        </header>
    )
}

export default Header
