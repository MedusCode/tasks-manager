import store, { TRootState } from "../store";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<TRootState> = useSelector;