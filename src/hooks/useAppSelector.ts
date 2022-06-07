import { useSelector } from 'react-redux';
import { TypedUseSelectorHook } from "react-redux";
import { RootState } from "../Menu/redux/store";

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;