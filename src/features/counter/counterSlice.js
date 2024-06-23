import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    count : 0
}

export const counterSlice = createSlice({
    name : 'counter',
    initialState,
    reducers : {
        increment : (state) => {
            state.count += 1
        },
        decrement : (state) => {
            state.count -= 1
        },
        increasebyamt : (state , action) => {
            state.count += action.payload
        },
        reset : (state) => {
            state.count = 0
        }
    }
})

export const {increment , decrement , increasebyamt , reset} = counterSlice.actions
export default counterSlice.reducer