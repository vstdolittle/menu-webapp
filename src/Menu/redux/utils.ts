import { Dish } from "../models/Dish";

export const findDish = (title: string, dishes: Dish[]) => {
    return dishes.find((d) => d.title === title);
}