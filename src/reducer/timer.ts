import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { ITimer } from "../lib/Timer";


const initialState: ITimer = {
    interval: 1000,
};

const slice = createSlice({
    name: "timer",
    initialState,
    reducers: {
        set: (state, action: PayloadAction<Partial<ITimer>>) => {
            return { ...state, ...action.payload };
        },
    },
});

export const { set: setTimer } = slice.actions;
export default slice.reducer;
