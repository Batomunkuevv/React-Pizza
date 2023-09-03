import classNames from "classnames";
import { categories } from "../../mock";
import { MouseEvent } from "react";
import { setCategory, getCategoryS } from "../../services/pizzas";
import { useDispatch, useSelector } from "react-redux";
import styles from "./categories.module.scss";

export const Categories = () => {
    const dispatch = useDispatch();
    const currentCategory = useSelector(getCategoryS);

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
