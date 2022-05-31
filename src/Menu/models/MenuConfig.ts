import { Restaurant } from "./Restaurant";

export type MenuConfig = {
    restaurant: Restaurant;
    dishes: Dish[]
}

export class Dish {

    title: string;
    ingredients: string[];
    //picture
    //AdditionOptions: 


    constructor(title: string, ingredients: string[]) {
        this.title = title;
        this.ingredients = ingredients
    }

}