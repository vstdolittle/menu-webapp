import { useDispatch } from "react-redux";
import { AppDispatch } from "../Menu/store";


export const useAppDispatch = () => useDispatch<AppDispatch>();