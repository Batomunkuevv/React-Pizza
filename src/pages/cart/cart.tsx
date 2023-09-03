import { useSelector } from "react-redux";
import { getCartPizzasS } from "../../services/cart";

import { Cart } from "../../components/cart";
import { CartEmpty } from "../../components/cart-empty";

export const CartPage = () => {
    const cartPizzas = useSelector(getCartPizzasS);

    return cartPizzas.length > 0 ? <Cart /> : <CartEmpty />;
};
