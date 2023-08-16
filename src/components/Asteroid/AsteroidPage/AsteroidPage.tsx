import {getAsteroidInfo} from "@/api/get-asteroid-info";
import {CloseApproachData, NearEarthObject} from "@/types/nasa-data.type";
import {FC} from "react";
import styles from './AsteroidPage.module.css'
import asteroidImg from "../../../../public/asteroid.png";
import Image from "next/image";
import averageIntNumber from "@/utils/average-int-number";
import {stringToRoundedNum} from "@/utils/string-to-rounded-num";
import {formatFullDate} from "@/utils/format-full-date";
import marsImage from "./../../../../public/mars.jpeg";
import earthImage from "./../../../../public/earth.jpeg";
import {IAsteroidPageProps} from "@/types/AsteroidPageProps.type";

const AsteroidPage: FC<IAsteroidPageProps> = async ({id}) => {

    const asteroid: NearEarthObject = await getAsteroidInfo(id)
    const averageDiameter = averageIntNumber(
        asteroid.estimated_diameter.meters.estimated_diameter_min,
        asteroid.estimated_diameter.meters.estimated_diameter_max)

    return (
        <div className={styles.asteroidPage}>
            <div className={styles.asteroidInfo}>
                <Image
                    className={styles.asteroidImage}
                    src={asteroidImg}
                    alt="asteroidImg"
                />
                <div className={styles.asteroidDescription}>
                    <p>{asteroid.name}</p>
                    <p>Ø {averageDiameter} метров</p>
                    <p>{asteroid.is_potentially_hazardous_asteroid && 'Опасный'}</p>
                </div>
            </div>

            <div className={styles.closeApproach}>
                <h4 className={styles.closeApproachTitle}>Список сближений</h4>

                <div className={styles.closeApproachTable}>
                    <div className={styles.closeApproachTableRow}>
                        <div className={styles.closeApproachTableHeader}>Скорость относительно Земли (км/ч)</div>
                        <div className={styles.closeApproachTableHeader}>Время макс. сближения с Землей</div>
                        <div className={styles.closeApproachTableHeader}>Расстояние до Земли (км)</div>
                        <div className={styles.closeApproachTableHeader}>Летит по орбите</div>
                    </div>
                    {asteroid.close_approach_data.map((approach: CloseApproachData, index: number) => (
                        <div className={styles.closeApproachTableRow} key={index}>
                            <div>{stringToRoundedNum(approach.relative_velocity.kilometers_per_hour)}</div>
                            <div>{formatFullDate(approach.close_approach_date_full)}</div>
                            <div>{stringToRoundedNum(approach.miss_distance.kilometers)}</div>
                            <div>{approach.orbiting_body === 'Earth' &&
                                    <Image
                                        className={styles.orbitPlanetImage}
                                        src={earthImage}
                                        alt="earth"
                                    />
                                 }
                                {approach.orbiting_body === 'Mars' &&
                                    <Image
                                        className={styles.orbitPlanetImage}
                                        src={marsImage}
                                        alt="mars"
                                    />
                                }
                            </div>
                        </div>
                    ))}
                </div>

            </div>

        </div>
    );
};

export default AsteroidPage;