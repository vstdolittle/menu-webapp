import { configureStore } from "@reduxjs/toolkit";
import { enableMapSet } from "immer";
import basketReducer from './slices/basket'

enableMapSet();


export const store = configureStore({
    reducer: {
        basket: basketReducer
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: ['TYPE'],
            ignoredActionPaths: ['property'],
            ignoredPaths: ['reducer.property']
        }
    })
})

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;