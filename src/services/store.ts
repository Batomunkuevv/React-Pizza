import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { pizzasReducer } from "./pizzas/slice";
import { cartReducer } from "./cart/slice";

const rootReducer = combineReducers({
    pizzas: pizzasReducer,
    cart: cartReducer,
});

const store = configureStore({
    reducer: rootReducer,
});

export default store;

export type TStore = ReturnType<typeof store.getState>;
export type TAppDispatch = typeof store.dispatch;
