import { combineReducers } from "@reduxjs/toolkit";

import timer from "./timer";

export const rootReducer = combineReducers({
    timer: timer,
});

export type RootState = ReturnType<typeof rootReducer>;
