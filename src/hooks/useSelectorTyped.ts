import { TypedUseSelectorHook, useSelector } from "react-redux";
import { useDispatch as useDispatchOriginal } from 'react-redux';
import { RootState } from "../store";

import { AppDispatch } from "../store/index";
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch: () => AppDispatch = useDispatchOriginal;