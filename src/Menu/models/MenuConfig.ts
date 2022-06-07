import { Dish } from "./Dish";
import { Restaurant } from "./Restaurant";

export type MenuConfig = {
    restaurant: Restaurant;
    dishes: Dish[];
}