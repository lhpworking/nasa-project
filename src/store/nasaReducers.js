import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    loading: false,
    data: [],
    error: false
}
export const nasaSlice = createSlice({
    name: "nasa",
    initialState,
    reducers: {
        //  Astronomy Picture of the Day.
        APOD(_state, _action) {
            _state.data = _action.payload
        }
    }
})

