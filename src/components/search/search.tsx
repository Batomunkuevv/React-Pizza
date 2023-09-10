import { FC, useState, FormEvent, useCallback, MouseEvent, useRef } from "react";
import { useAppDispatch } from "../../hooks";
import classNames from "classnames";
import styles from "./search.module.scss";
import { setSearch } from "../../services/pizzas";
import debounce from "lodash.debounce";

import { TSearch } from "./";

export const Search: FC<TSearch> = ({ extraClass }) => {
    const dispatch = useAppDispatch();
    const inputRef = useRef<HTMLInputElement>(null);
    const [value, setValue] = useState("");

    const setSearchDebounce = useCallback(
        debounce((value) => {
            dispatch(setSearch(value));
        }, 150),
        []
    );

    const handleInputChange = (e: FormEvent<HTMLInputElement>) => {
        const { currentTarget } = e;

        setValue(currentTarget.value);
        setSearchDebounce(currentTarget.value);
    };

    const handleClearClick = (e: MouseEvent<HTMLButtonElement>) => {
        setValue("");
        dispatch(setSearch(""));

        if (inputRef.current) inputRef.current.focus();
    };

    return (
        <div className={classNames(styles["search"], extraClass)}>
            <div className={styles["search__icon"]}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M12.903 21.1406C17.4532 21.1406 21.1419 17.4519 21.1419 12.9017C21.1419 8.35148 17.4532 4.66278 12.903 4.66278C8.35276 4.66278 4.66406 8.35148 4.66406 12.9017C4.66406 17.4519 8.35276 21.1406 12.903 21.1406Z"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    ></path>
                    <path d="M23.3407 23.3372L18.7305 18.727" stroke="currentColor" strokeWidth="2" strokeLinecap="square" strokeLinejoin="round"></path>
                </svg>
            </div>
            <input ref={inputRef} onChange={handleInputChange} value={value} type="text" placeholder="Поиск" className="search__input input input--search" />
            <button onClick={handleClearClick} type="button" className={classNames(styles["search__clear"], {[styles['is-active']]: value})}>
                &#9587;
            </button>
        </div>
    );
};
