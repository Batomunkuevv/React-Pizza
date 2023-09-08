import classNames from "classnames";
import styles from "./cart.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { clearCart, getCartPizzasS, getCartPriceS } from "../../services/cart";
import cartImage from "../../images/cart.svg";

import { Link } from "react-router-dom";
import { CartItem } from "../cart-item/cart-item";

export const Cart = () => {
    const dispatch = useDispatch();

    const cartPizzas = useSelector(getCartPizzasS);
    const cartPrice = useSelector(getCartPriceS);

    const handleClearCart = () => {
        dispatch(clearCart());
    }

    return (
        <section className={styles['cart']}>
            <div className={classNames(styles["cart__container"], "container")}>
                <header className={styles["cart__header"]}>
                    <h1 className={styles["cart__title"]}>
                        <span className={styles["cart__title-icon"]}>
                            <img src={cartImage} alt="Cart" title="Cart" />
                        </span>
                        Корзина
                    </h1>
                    <button onClick={handleClearCart} type="button" className={styles["cart__clear"]}>
                        <span className={styles["cart__clear-icon"]}>
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2.5 5H4.16667H17.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                                <path
                                    d="M6.66663 5.00001V3.33334C6.66663 2.89131 6.84222 2.46739 7.15478 2.15483C7.46734 1.84227 7.89127 1.66667 8.33329 1.66667H11.6666C12.1087 1.66667 12.5326 1.84227 12.8451 2.15483C13.1577 2.46739 13.3333 2.89131 13.3333 3.33334V5.00001M15.8333 5.00001V16.6667C15.8333 17.1087 15.6577 17.5326 15.3451 17.8452C15.0326 18.1577 14.6087 18.3333 14.1666 18.3333H5.83329C5.39127 18.3333 4.96734 18.1577 4.65478 17.8452C4.34222 17.5326 4.16663 17.1087 4.16663 16.6667V5.00001H15.8333Z"
                                    stroke="currentColor"
                                    strokeWidth="1.2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <path d="M8.33337 9.16667V14.1667" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M11.6666 9.16667V14.1667" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </span>
                        <span className="cart__clear-text">Очистить корзину</span>
                    </button>
                </header>
                <ul className={styles["cart__list"]}>
                    {cartPizzas.map((pizza, i) => (
                        <CartItem key={i} {...pizza}></CartItem>
                    ))}
                </ul>
                <div className={styles['cart__info']}>
                    <div className={styles['cart__count']}>
                        Всего пицц: <b>{cartPizzas.length} шт.</b>
                    </div>
                    <div className={styles['cart__price']}>
                        Сумма заказа: <span className={styles['cart__price-value']}>{cartPrice} ₽</span>
                    </div>
                </div>
                <footer className={styles['cart__bottom']}>
                    <Link to="/" className={classNames(styles['cart__back'], 'btn', 'btn--gray')}>
                        <span className={styles['cart__back-icon']}></span>
                        Вернуться назад
                    </Link>
                    <button className={classNames(styles['cart__send'], 'btn')}>Оплатить сейчас</button>
                </footer>
            </div>
        </section>
    );
};
