'use client'

import {NearEarthObject} from "@/types/nasa-data.type";
import styles from '../AsteroidList/AsteroidList.module.css'
import {FC, useEffect, useRef, useState} from "react";
import AsteroidItem from "@/components/Asteroid/AsteroidItem/AsteroidItem";
import {getCurrentDay} from "@/utils/get-current-day";
import {useObserver} from "@/hooks/useObserver";
import {getNextDay} from "@/utils/get-next-day";
import Link from "next/link";
import {ICartUpdateHandler} from "@/types/cart-update-handler";
import {getNasaData} from "@/api/get-nasa-data";

const AsteroidList: FC = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [asteroids, setAsteroids] = useState<NearEarthObject[]>([]);
    const [fetchDate, setFetchDate] = useState<string>(getCurrentDay())
    const [cart, setCart] = useState<ICartItem[]>([])
    const [distanceUnit, setDistanceUnit] = useState<"lunar" | "km">("lunar")
    const loader = useRef<HTMLDivElement | null>(null);

    useObserver({
        ref: loader,
        isLoading,
        callback: () => setFetchDate(getNextDay(fetchDate))
    })

    useEffect(() => {
        (async () => {
            setIsLoading(true)
            try {
                const receivedAsteroids = await getNasaData(fetchDate)
                setAsteroids((asteroids) => [...asteroids, ...receivedAsteroids]);
            } catch (err) {
                console.log(err)
            } finally {
                setIsLoading(false)
            }
        })();
    }, [fetchDate]);

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart))
    }, [cart]);

    const cartUpdateHandler: ICartUpdateHandler = (
                               id,
                               name,
                               closeApproachDate,
                               averageDiameter,
                               isHazard,
                               missDistance
                               ) => {
        const asteroid = {
            id,
            name,
            closeApproachDate,
            averageDiameter,
            isHazard,
            missDistance
        }
        setCart([...cart, asteroid])
    }

    return (
                <>
                    <div className={styles.kmOrLunarOrbits}>
                        <button
                            className={distanceUnit === 'km' ? styles.selectedUnitButton : styles.unitButton}
                            onClick={() => setDistanceUnit('km')}
                        >
                            в километрах
                        </button>

                        <p className={styles.dash}>|</p>

                        <button
                            className={distanceUnit === 'lunar' ? styles.selectedUnitButton : styles.unitButton}
                            onClick={() => setDistanceUnit('lunar')}
                        >
                            в лунных орбитах
                        </button>
                    </div>

                            <div className={styles.asteroidList}>
                                <ul>
                                    {asteroids.map((asteroid) => (
                                            <AsteroidItem
                                                key={asteroid.id}
                                                name={asteroid.name}
                                                data={asteroid}
                                                cartUpdateHandler={cartUpdateHandler}
                                                distanceUnit={distanceUnit}
                                                isInCard={cart.some(cartAsteroid => cartAsteroid.id === asteroid.id)}
                                            />
                                        )
                                    )}
                                </ul>
                            </div>

                    {
                        cart.length ? <div className={styles.cart}>

                                <div className={styles.cartItems}>
                                    <div>
                                        <p className={styles.cartWordCart}>Корзина</p>
                                        <p>{cart.length} астероида</p>
                                    </div>

                                    <Link href="/cart" className={styles.cartButton}>Отправить</Link>
                                </div>

                            </div> :
                            null
                    }

                    <div ref={loader} className={cart.length ?
                        `${styles.loader} ${styles.loaderWithCart}`
                        :
                        `${styles.loader}`}
                    />

                </>
        );
    }

export default AsteroidList