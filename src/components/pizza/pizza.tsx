import { FC, useState, MouseEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./pizza.module.scss";

import { TPizza } from "../../types";
import classNames from "classnames";
import { addPizza, getCartPizzasS, increasePizza } from "../../services/cart";

export const Pizza: FC<TPizza> = ({ id, imageUrl, title, sizes, types, price }) => {
    const dispatch = useDispatch();

    const [pizzaSize, setPizzaSize] = useState<number | null>(null);
    const [pizzaType, setPizzaType] = useState<string | null>(null);
    const cartPizzas = useSelector(getCartPizzasS);
    const count = cartPizzas.find((pizza) => {
        return pizza.id === id && pizza.size === pizzaSize && pizzaType === pizza.type;
    })?.count;

    const handleSize = (e: MouseEvent<HTMLButtonElement>) => {
        const { currentTarget } = e;
        const currentTargetSize = currentTarget.dataset.size;

        if (currentTargetSize) setPizzaSize(+currentTargetSize);
    };

    const handleType = (e: MouseEvent<HTMLButtonElement>) => {
        const { currentTarget } = e;
        const currentTargetType = currentTarget.dataset.type;

        if (currentTargetType) setPizzaType(currentTargetType);
    };

    const handleAddPizza = () => {
        const pizzaInCartIndex = cartPizzas.findIndex((pizza) => pizza.id === id && pizza.size === pizzaSize && pizza.type === pizzaType);

        if (pizzaInCartIndex === -1) {
            const payload = {
                id,
                title,
                image: imageUrl,
                size: pizzaSize,
                type: pizzaType,
                price,
                count: 1,
            };

            dispatch(addPizza(payload));
        } else {
            dispatch(increasePizza(pizzaInCartIndex));
        }
    };

    const setTypeSelectorClasses = (type: "тонкое" | "традиционное") => {
        return [styles["pizza__selector-btn"], { [styles["is-active"]]: type === pizzaType }];
    };

    const setSizeSelectorClasses = (size: number) => {
        return [styles["pizza__selector-btn"], { [styles["is-active"]]: size === pizzaSize }];
    };

    return (
        <article className="pizza">
            <figure className={styles["pizza__image"]}>
                <img src={imageUrl} alt={title} title={title} />
            </figure>
            <h3 className={styles["pizza__title"]}>{title}</h3>
            <div className={styles["pizza__characteristics"]}>
                <ul className={styles["pizza__types"]}>
                    <li className="pizza__selector">
                        <button onClick={handleType} data-type={"тонкое"} disabled={!types.includes(0)} className={classNames(setTypeSelectorClasses("тонкое"))}>
                            тонкое
                        </button>
                    </li>
                    <li className="pizza__selector">
                        <button onClick={handleType} data-type={"традиционное"} disabled={!types.includes(1)} className={classNames(setTypeSelectorClasses("традиционное"))}>
                            традиционное
                        </button>
                    </li>
                </ul>
                <ul className={styles["pizza__sizes"]}>
                    <li className="pizza__selector">
                        <button onClick={handleSize} data-size={26} disabled={!sizes.includes(26)} className={classNames(setSizeSelectorClasses(26))}>
                            26 см.
                        </button>
                    </li>
                    <li className="pizza__selector">
                        <button onClick={handleSize} data-size={30} disabled={!sizes.includes(30)} className={classNames(setSizeSelectorClasses(30))}>
                            30 см.
                        </button>
                    </li>
                    <li className="pizza__selector">
                        <button onClick={handleSize} data-size={40} disabled={!sizes.includes(40)} className={classNames(setSizeSelectorClasses(40))}>
                            40 см.
                        </button>
                    </li>
                </ul>
            </div>
            <div className={styles["pizza__bottom"]}>
                <div className={styles["pizza__price"]}>от {price} ₽</div>
                <button disabled={pizzaSize === null || pizzaType === null} onClick={handleAddPizza} className={styles["pizza__btn"]}>
                    <span className={styles["pizza__btn-plus"]}>
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                                fill="currentColor"
                            />
                        </svg>
                    </span>
                    <span className="pizza__btn-text">Добавить </span>
                    {count && <span className={styles["pizza__btn-count"]}>{count}</span>}
                </button>
            </div>
        </article>
    );
};
