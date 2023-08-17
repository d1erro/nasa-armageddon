import {FC} from 'react';
import {IAsteroidItemProps} from "@/types/AsteroidItem.type";
import styles from '../AsteroidItem/AsteroidItem.module.css'
import {formatDate} from "@/utils/format-date";
import ArrowDivider from "../../../ui/ArrowDevider";
import asteroidImg from "../../../../public/asteroid.png"
import Image from 'next/image'
import {formatAsteroidName} from "@/utils/format-asteroid-name";
import calculateAverage from "@/utils/average-int-number";
import {stringToRoundedNum} from "@/utils/string-to-rounded-num";
import Link from "next/link";
import {formatDistanceText} from "@/utils/format-distance-text";

const AsteroidItem: FC<IAsteroidItemProps> =
    ({
         data,
         cartUpdateHandler,
         distanceUnit,
         isInCard
}) => {

    const averageDiameter = calculateAverage
        (data.estimated_diameter.meters.estimated_diameter_min,
        data.estimated_diameter.meters.estimated_diameter_max);

    const missDistanceLunar = stringToRoundedNum(data.close_approach_data[0].miss_distance.lunar)

    const missDistanceKm = stringToRoundedNum(data.close_approach_data[0].miss_distance.kilometers)

    return (
        <div className={styles.asteroidItem}>

            <h4 className={styles.date}>{formatDate(data.close_approach_data[0].close_approach_date)}</h4>

            <div className={styles.asteroidInfo}>

                <div className={styles.distance}>
                    <div>
                        {
                            distanceUnit === 'km' ? (
                                <p>{missDistanceKm} km</p>
                            ) :
                                (
                                    <p>{missDistanceLunar} {formatDistanceText(missDistanceLunar)}</p>
                                )

                        }

                        <ArrowDivider/>
                    </div>

                </div>

                <Image
                    className={averageDiameter > 100 ? styles.imageMedium : styles.imageSmall}
                    src={asteroidImg}
                    alt="asteroidImg"
                />


                <div className={styles.nameAndRadius}>
                    <Link href={`/asteroid/${data.id}`}>
                        <p className={styles.name}>{formatAsteroidName(data.name)}</p>
                    </Link>
                    <p className={styles.radius}>Ø {averageDiameter} м</p>
                </div>

            </div>

            <div className={styles.buttonAndDangerInfo}>
                {
                    !isInCard ? (
                        <button
                            className={styles.orderButton}
                            onClick={() => cartUpdateHandler(
                                data.id,
                                data.name,
                                data.close_approach_data[0].close_approach_date,
                                averageDiameter,
                                data.is_potentially_hazardous_asteroid,
                                data.close_approach_data[0].miss_distance.lunar
                            )}
                        >
                            ЗАКАЗАТЬ
                        </button>
                    ) :
                        (
                            <button
                                className={styles.inCartButton}
                            >
                                В КОРЗИНЕ
                            </button>
                        )
                }

                {
                    data.is_potentially_hazardous_asteroid ? (
                        <div className={styles.warningContainer}>
                            <span className={styles.warningIcon}>⚠</span>
                            <p className={styles.warningText}>Опасен</p>
                        </div>
                    ) : null
                }


            </div>

        </div>
    );
};

export default AsteroidItem;