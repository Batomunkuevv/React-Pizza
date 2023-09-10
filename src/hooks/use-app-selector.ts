import { TypedUseSelectorHook } from "react-redux";
import { useSelector } from "react-redux";
import { TStore } from "../services/store";

export const useAppSelector: TypedUseSelectorHook<TStore> = useSelector;
