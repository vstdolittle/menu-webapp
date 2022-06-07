import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { MENU_WEBAPP_CONFIG } from '../../menu_webapp_config';
import { StateDish } from '../models/StateDish';
import { findDish } from '../utils';
interface BasketState {
  items: any;
  itemsCount: number;
}

const initialState = { 
  items: {},
  itemsCount: 0
} as BasketState;

export type DishTitle = string;


const basket = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    addToBasket(state, action: PayloadAction<DishTitle>) {
      const item = state.items[action.payload];

      if(item) {
        item.count++;

        state.itemsCount++;
        state.items[action.payload] = item;

      }else {
        const dish = findDish(action.payload, MENU_WEBAPP_CONFIG.dishes);
        const stateDish = { count: 1, dish } as StateDish;

        state.itemsCount++;
        state.items[action.payload] = stateDish;
      }
    },
    removeFromBasket(state, action: PayloadAction<DishTitle>) {
      const item = state.items[action.payload];

      if(!item) return;

      if(item.count > 1) {
        item.count--;
        state.itemsCount++;
      }

      if(item.count <= 1) {
        delete state.items[action.payload];
        state.itemsCount++;
      }

    },
  },
})

export const { addToBasket, removeFromBasket } = basket.actions
export default basket.reducer