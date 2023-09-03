import { Link } from "react-router-dom";
import { useMatch } from "react-router";
import styles from "./app-header.module.scss";
import logo from "../../images/logo.svg";

import { CartBtn } from "../cart-btn";

export const AppHeader = () => {
    const isCartPage = useMatch("/cart");

    return (
        <header className={styles["app-header"]}>
            <div className="container">
                <div className={styles["app-header__body"]}>
                    <Link to="/" className="app-header__logo logo">
                        <img src={logo} alt="React Pizze" title="React Pizze" />
                    </Link>
                    {!isCartPage && <CartBtn />}
                </div>
            </div>
        </header>
    );
};
