import { useDispatch } from "react-redux";
import { AppDispatch } from "../Menu/redux/store";


export const useAppDispatch = () => useDispatch<AppDispatch>();