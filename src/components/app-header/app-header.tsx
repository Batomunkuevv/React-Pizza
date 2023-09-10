import { FC } from "react";
import { Link } from "react-router-dom";
import { useMatch } from "react-router";
import styles from "./app-header.module.scss";
import classNames from "classnames";
import logo from "../../images/logo.svg";
import logoMobile from "../../images/logo-mobile.svg";

import { CartBtn } from "../cart-btn";
import { Search } from "../search";

export const AppHeader: FC = () => {
    const isCartPage = useMatch("/cart");

    return (
        <header className={styles["app-header"]}>
            <div className="container">
                <div className={styles["app-header__body"]}>
                    <Link to="/" className={classNames(styles["app-header__logo"], "logo")}>
                        <picture>
                            <source srcSet={logoMobile} media="(max-width: 576px)" />
                            <img src={logo} alt="React Pizze" title="React Pizze" />
                        </picture>
                    </Link>
                    {!isCartPage && (
                        <>
                            <Search extraClass={styles["app-header__search"]} /> <CartBtn />
                        </>
                    )}
                </div>
            </div>
        </header>
    );
};
