import { request } from "../../utils";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { TPizza } from "../../types";
import { TSort } from "../../types";

type TInitialStore = {
    pizzas: TPizza[];
    pizzasRequest: boolean;
    pizzasRequestFailed: boolean;
    sort: TSort;
    sortDirection: "ASC" | "DESC";
    category: number;
    search: string;
};

const initialStore: TInitialStore = {
    pizzas: [],
    pizzasRequest: false,
    pizzasRequestFailed: false,
    sort: "popular",
    sortDirection: "ASC",
    category: 0,
    search: "",
};

export const getPizzasRequest = createAsyncThunk("PIZZAS/GET_REQUEST", () => {
    return request("pizzas");
});

const pizzasSlice = createSlice({
    name: "pizzas",
    initialState: initialStore,
    reducers: {
        setSort: (store, action) => {
            store.sort = action.payload;
        },
        setSortDirection: (store) => {
            store.sortDirection = store.sortDirection === "ASC" ? "DESC" : "ASC";
        },
        setCategory: (store, action) => {
            store.category = action.payload;
        },
        setSearch: (store, action) => {
            console.log(action.payload);
            store.search = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getPizzasRequest.pending, (store) => {
            store.pizzasRequest = true;
            store.pizzasRequestFailed = false;
        });
        builder.addCase(getPizzasRequest.fulfilled, (store, action) => {
            store.pizzas = action.payload;
            store.pizzasRequest = false;
            store.pizzasRequestFailed = false;
        });
        builder.addCase(getPizzasRequest.rejected, (store) => {
            store.pizzasRequest = false;
            store.pizzasRequestFailed = true;
        });
    },
});

export const { setSort, setSortDirection, setCategory, setSearch } = pizzasSlice.actions;
export const pizzasReducer = pizzasSlice.reducer;
