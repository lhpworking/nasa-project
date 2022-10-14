import { configureStore } from "@reduxjs/toolkit";
import { nasaSlice } from "./nasaReducers";

export const store = configureStore({
    reducer: {
        nasa: nasaSlice.reducer
    }
})