import { TStore } from "../store";

export const getPizzasS = (store: TStore) => store.pizzas.pizzas;
export const getPizzasRequestS = (store: TStore) => store.pizzas.pizzasRequest;
export const getPizzasRequestFailedS = (store: TStore) => store.pizzas.pizzasRequestFailed;
export const getSortS = (store: TStore) => store.pizzas.sort;
export const getSortDirectionS = (store: TStore) => store.pizzas.sortDirection;
export const getCategoryS = (store: TStore) => store.pizzas.category;
export const getSearchS = (store: TStore) => store.pizzas.search;
