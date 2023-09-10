import { createSelector } from "@reduxjs/toolkit";
import { TStore } from "../store";

export const getCartPizzasS = (store: TStore) => store.cart.cartPizzas;
export const getCartPriceS = createSelector(getCartPizzasS, (cartPizzas): number => {
    return cartPizzas.length ? cartPizzas.reduce((acc, pizza) => (acc += pizza.price * pizza.count), 0) : 0;
});