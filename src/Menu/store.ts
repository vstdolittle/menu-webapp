import { configureStore } from "@reduxjs/toolkit";
import counterReducer from './itemsCounter'

export const store = configureStore({
    reducer: {
        itemsCount: counterReducer
    }
})

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;