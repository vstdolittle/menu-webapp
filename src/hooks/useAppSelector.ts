import { useSelector } from 'react-redux';
import { TypedUseSelectorHook } from "react-redux";
import { RootState } from "../Menu/store";

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;