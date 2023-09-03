import { createSlice } from "@reduxjs/toolkit";
import { TCartPizza } from "../../types";

type TInitialStore = {
    cartPizzas: TCartPizza[];
};

const initialStore: TInitialStore = {
    cartPizzas: [],
};

const cartSlice = createSlice({
    name: "cart",
    initialState: initialStore,
    reducers: {
        addPizza: (store, action: { type: string; payload: TCartPizza }) => {
            store.cartPizzas.push(action.payload);
        },
        removePizza: (store, action) => {
            store.cartPizzas = action.payload;
        },
        clearCart: (store) => {
            store.cartPizzas = initialStore.cartPizzas;
        },
        increasePizza: (store, action) => {
            store.cartPizzas[action.payload].count += 1;
        },
        decreasePizza: (store, action) => {
            store.cartPizzas[action.payload].count -= 1;
        },
    },
});

export const { addPizza, removePizza, clearCart, increasePizza, decreasePizza } = cartSlice.actions;
export const cartReducer = cartSlice.reducer;
