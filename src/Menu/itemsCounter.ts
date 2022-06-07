import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface CounterState {
  value: number
}

const initialState = { value: 0 } as CounterState

const itemsCount = createSlice({
  name: 'itemsCount',
  initialState,
  reducers: {
    increment(state) {
      state.value++
    },
    decrement(state) {
      if(state.value > 0){
        state.value--
      }
    },
    incrementByAmount(state, action: PayloadAction<number>) {
      state.value += action.payload
    },
  },
})

export const { increment, decrement, incrementByAmount } = itemsCount.actions
export default itemsCount.reducer