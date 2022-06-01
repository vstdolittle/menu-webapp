import { Restaurant } from "./Restaurant";

export type MenuConfig = {
    restaurant: Restaurant;
    dishes: Dish[]
}

export type Dish = {
    title: string;
    ingredients: string[];
}