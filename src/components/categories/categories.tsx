import classNames from "classnames";
import { categories } from "../../mock";
import { FC, MouseEvent } from "react";
import { setCategory, getCategoryS } from "../../services/pizzas";
import { useAppDispatch, useAppSelector } from "../../hooks";
import styles from "./categories.module.scss";

export const Categories: FC = () => {
    const dispatch = useAppDispatch();
    const currentCategory = useAppSelector(getCategoryS);

    const handleCategoryBtnClick = (e: MouseEvent<HTMLButtonElement>) => {
        const { currentTarget } = e;
        const currentTargetValue = currentTarget.dataset.category;

        if(currentTargetValue){
            dispatch(setCategory(+currentTargetValue))
        }
    };

    return (
        <ul className={styles["pizza-categories"]}>
            {categories.map((category, i) => (
                <li key={i} className="pizza-catalog__category">
                    <button
                        data-category={i}
                        onClick={handleCategoryBtnClick}
                        className={classNames(styles["pizza-categories__btn"], {
                            [styles["is-active-category"]]: +currentCategory === i,
                        })}
                    >
                        {category}
                    </button>
                </li>
            ))}
        </ul>
    );
};
