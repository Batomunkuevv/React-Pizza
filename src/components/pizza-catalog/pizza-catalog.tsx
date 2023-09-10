import { useEffect, FC } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks";
import styles from "./pizza-catalog.module.scss";
import { categories } from "../../mock";
import { getPizzasS, getPizzasRequest, getPizzasRequestS, getPizzasRequestFailedS, getSortS, getSortDirectionS, getCategoryS, getSearchS } from "../../services/pizzas";

import { Pizza, PizzaSkeleton } from "../pizza";
import { SortBtn } from "../sort-btn";
import { Categories } from "../categories";

import { TPizza } from "../../types";

export const PizzaCatalog: FC = () => {
    const dispatch = useAppDispatch();

    const pizzas: TPizza[] = useAppSelector(getPizzasS);
    const isPizzasRequest = useAppSelector(getPizzasRequestS);
    const isPizzasRequestFailed = useAppSelector(getPizzasRequestFailedS);
    const sort = useAppSelector(getSortS);
    const sortDirection = useAppSelector(getSortDirectionS);
    const category = useAppSelector(getCategoryS);
    const search = useAppSelector(getSearchS).toLowerCase();
    
    useEffect(() => {
        dispatch(getPizzasRequest() as any);
    }, [dispatch]);

    const sortPizzas = (a: TPizza, b: TPizza) => {
        const copyOfA = a;
        a = sortDirection === "ASC" ? a : b;
        b = sortDirection === "ASC" ? b : copyOfA;

        if (sort === "popular") {
            return a.rating - b.rating;
        }

        if (sort === "price") {
            return a.price - b.price;
        }

        if (a.title > b.title) {
            return -1;
        } else {
            return 1;
        }

        return 0;
    };

    const currentCategoryName = categories[category];

    return (
        <section className={styles["pizza-catalog"]}>
            <div className="container">
                <div className={styles["pizza-catalog__top"]}>
                    <Categories />
                    <SortBtn />
                </div>
                <h2 className="pizza-catalog__title">{currentCategoryName} пиццы</h2>
                {isPizzasRequestFailed ? (
                    <div>Произошла ошибка</div>
                ) : (
                    <ul className={styles["pizza-catalog__list"]}>
                        {isPizzasRequest ? (
                            <>
                                {[...new Array(8)].map((item, i) => (
                                    <PizzaSkeleton key={i}/>
                                ))}
                            </>
                        ) : (
                            <>
                                {[...pizzas]
                                    .sort(sortPizzas)
                                    .filter((pizza) => pizza.title.toLowerCase().includes(search))
                                    .filter(pizza => category === 0 ? pizza : pizza.category === category)
                                    .map((pizza) => (
                                        <li key={pizza.id} className={styles['pizza-catalog__item']}>
                                            <Pizza {...pizza} />
                                        </li>
                                    ))}
                            </>
                        )}
                    </ul>
                )}
            </div>
        </section>
    );
};
