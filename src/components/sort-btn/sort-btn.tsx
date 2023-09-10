import { useRef, useState, MouseEvent, FC } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks";
import classNames from "classnames";
import styles from "./sort-btn.module.scss";
import { getSortDirectionS, getSortS, setSort, setSortDirection } from "../../services/pizzas";

export const SortBtn: FC = () => {
    const dispatch = useAppDispatch();

    const sortBtn = useRef<HTMLButtonElement>(null);
    const sortBtnIcon = useRef<HTMLButtonElement>(null);
    const [showDropdown, setShowDropdown] = useState(false);
    const currentSort = useAppSelector(getSortS);
    const currentSortDirection = useAppSelector(getSortDirectionS);

    const handleTypeBtnClick = () => {
        setShowDropdown(!showDropdown);
    };

    const changeSortType = (e: MouseEvent<HTMLLIElement>) => {
        const { currentTarget } = e;
        const targetSortType: any = currentTarget.dataset.sort;

        if (sortBtn.current) {
            sortBtn.current.textContent = currentTarget.textContent;
        }

        dispatch(setSort(targetSortType));
        setShowDropdown(false);
    };

    const handleSortDirectionBtnClick = () => {
        dispatch(setSortDirection());
    };

    return (
        <div className={styles["sort-btn"]}>
            <button ref={sortBtnIcon} onClick={handleSortDirectionBtnClick} type="button" className={classNames(styles["sort-btn__icon"], { [styles["is-desc"]]: currentSortDirection === "DESC" })}>
                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="6" viewBox="0 0 10 6" fill="none">
                    <path
                        d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z"
                        fill="#2C2C2C"
                    />
                </svg>
            </button>
            <div className={styles["sort-btn__text"]}>Сортировка по:</div>
            <div className={styles["sort-btn__type"]}>
                <button ref={sortBtn} onClick={handleTypeBtnClick} type="button" className={styles["sort-btn__type-btn"]}>
                    популярности
                </button>
                <ul className={classNames(styles["sort-btn__type-list"], { [styles["is-show"]]: showDropdown })}>
                    <li data-sort="popular" onClick={changeSortType} className={classNames(styles["sort-btn__type-list-item"], { [styles["is-active-sort"]]: currentSort === "popular" })}>
                        популярности
                    </li>
                    <li data-sort="price" onClick={changeSortType} className={classNames(styles["sort-btn__type-list-item"], { [styles["is-active-sort"]]: currentSort === "price" })}>
                        цене
                    </li>
                    <li data-sort="alphabet" onClick={changeSortType} className={classNames(styles["sort-btn__type-list-item"], { [styles["is-active-sort"]]: currentSort === "alphabet" })}>
                        алфавиту
                    </li>
                </ul>
            </div>
        </div>
    );
};
