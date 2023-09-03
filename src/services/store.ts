import { configureStore } from "@reduxjs/toolkit";
import { pizzasReducer } from "./pizzas/slice";
import { cartReducer } from './cart/slice';

const store =  configureStore({
    reducer: {
        'pizzas': pizzasReducer,
        'cart': cartReducer
    }
})

export default store;
export type TStore = ReturnType<typeof store.getState>;
