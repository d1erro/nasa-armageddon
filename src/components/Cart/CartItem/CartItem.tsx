'use client'

import styles from './CartItem.module.css'
import {FC} from "react";
import ArrowDivider from "@/ui/ArrowDevider";
import {stringToRoundedNum} from "@/utils/string-to-rounded-num";
import asteroidImg from "../../../../public/asteroid.png";
import Image from "next/image";
import {formateAsteroidName} from "@/utils/formate-asteroid-name";

const CartItem: FC<ICartItem> = ({
                                     id,
                                     name,
                                     averageDiameter,
                                     closeApproachDate,
                                     isHazard,
                                     missDistance}) => {

    return (
        <div className={styles.asteroidItem}>

            <h4 className={styles.date}>{closeApproachDate}</h4>

            <div className={styles.asteroidInfo}>

                <div className={styles.distance}>
                    <div>
                        <p>{stringToRoundedNum(missDistance)} лунных орбиты</p>
                        <ArrowDivider/>
                    </div>
                </div>

                <Image
                    className={styles.image}
                    src={asteroidImg}
                    alt="asteroidImg"
                />

                <div className={styles.nameAndRadius}>
                    <p className={styles.name}>{formateAsteroidName(name)}</p>
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