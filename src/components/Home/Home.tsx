import styles from './Home.module.css'
import AsteroidList from '@/components/Asteroid/AsteroidList/AsteroidList'

const Home = () => {
    return (
        <div className={styles.homePage}>
            <h2>Ближайшие подлёты астероидов</h2>

            <AsteroidList />
        </div>
    )
}

export default Home
