import { FC } from "react";
import styles from "./cart-empty.module.scss";

import smileImage from "../../images/smile.svg";
import cartIllustration from "../../images/cart-illustration.svg";

import { Link } from "react-router-dom";

export const CartEmpty: FC = () => {
    return (
        <section className={styles["cart-empty"]}>
            <h1 className="visually-hidden">Корзина</h1>
            <div className="container">
                <div className={styles["cart-empty__body"]}>
                    <h2 className={styles["cart-empty__title"]}>
                        Корзина пустая
                        <span className="cart-empty__title-icon">
                            <img src={smileImage} alt="Smile" title="Smile" />
                        </span>
                    </h2>
                    <p className={styles["cart-empty__text"]}>Вероятнее всего, вы ещё не заказывали пиццу. Для того, чтобы заказать, перейдите на главную страницу.</p>
                    <div className={styles["cart-empty__image"]}>
                        <img src={cartIllustration} alt="Cart Illustration" title="Cart Illustration" />
                    </div>
                    <Link to="/" className="btn btn--black">
                        Вернуться назад
                    </Link>
                </div>
            </div>
        </section>
    );
};
