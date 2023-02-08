import { createSlice } from "@reduxjs/toolkit";

export const progressSlice = createSlice({
    name: 'progress',
    initialState: {
        value: false
    },
    reducers: {
        setInProgress: state => {state.value = true}
    }
});

export const { setInProgress } = progressSlice.actions;

export default progressSlice.reducer;