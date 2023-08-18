import { FC, HTMLProps } from 'react'
import styles from './Loader.module.css'

const Loader: FC<HTMLProps<HTMLDivElement>> = ({ className, ...props }) => {
    const combinedClassName = `${styles.loader} ${className || ''}`

    return <div className={combinedClassName} {...props}></div>
}

export default Loader
