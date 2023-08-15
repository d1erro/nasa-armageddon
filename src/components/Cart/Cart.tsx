'use client'

import {useEffect} from "react";
import CartItem from "@/components/Cart/CartItem/CartItem";
import styles from './Cart.module.css'

const Cart = () => {

    let cart = null;

    const cartJSON = localStorage.getItem('cart');
    if (cartJSON) {
        cart = JSON.parse(cartJSON);
    }

    useEffect(() => {
        localStorage.removeItem('cart');
    }, []);

    return (
        <div>
            {cart ? (
                <>
                    <h4>Заказ отправлен!</h4>
                    {cart.map((asteroid: ICartItem) => (
                        <CartItem
                            key={asteroid.id}
                            id={asteroid.id}
                            name={asteroid.name}
                            closeApproachDate={asteroid.closeApproachDate}
                            averageDiameter={asteroid.averageDiameter}
                            isHazard={asteroid.isHazard}
                            missDistance={asteroid.missDistance}
                        />
                    ))
                    }
                    <p className={styles.copyright}>© Все права и планета защищены</p>
                </>
                ) :
                <h4>Корзина пуста!</h4>
            }
        </div>
    );
};

export default Cart;