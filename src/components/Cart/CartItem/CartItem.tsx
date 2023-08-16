'use client'

import styles from './CartItem.module.css'
import {FC} from "react";
import ArrowDivider from "@/ui/ArrowDevider";
import {stringToRoundedNum} from "@/utils/string-to-rounded-num";
import asteroidImg from "../../../../public/asteroid.png";
import Image from "next/image";
import {formatAsteroidName} from "@/utils/format-asteroid-name";
import {formatDate} from "@/utils/format-date";

const CartItem: FC<ICartItem> = ({
                                     id,
                                     name,
                                     averageDiameter,
                                     closeApproachDate,
                                     isHazard,
                                     missDistance}) => {

    return (
        <div className={styles.asteroidItem}>

            <h4 className={styles.date}>{formatDate(closeApproachDate)}</h4>

            <div className={styles.asteroidInfo}>

                <div className={styles.distance}>
                    <div>
                        <p>{stringToRoundedNum(missDistance)} лунных орбиты</p>
                        <ArrowDivider/>
                    </div>
                </div>

                <Image
                    className={averageDiameter > 100 ? styles.imageMedium : styles.imageSmall}
                    src={asteroidImg}
                    alt="asteroidImg"
                />

                <div className={styles.nameAndRadius}>
                    <p className={styles.name}>{formatAsteroidName(name)}</p>
                    <p className={styles.radius}>Ø {averageDiameter} м</p>
                </div>

            </div>

            {
                isHazard ? (
                        <div className={styles.warningContainer}>
                            <span className={styles.warningIcon}>⚠</span>
                            <p className={styles.warningText}>Опасен</p>
                        </div>
                    ) : null
            }

        </div>
    );
};

export default CartItem;