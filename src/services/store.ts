import { configureStore } from "@reduxjs/toolkit";
import { pizzasReducer } from "./pizzas/slice";

const store =  configureStore({
    reducer: {
        'pizzas': pizzasReducer
    }
})

export default store;
export type TStore = ReturnType<typeof store.getState>;
