import { createSlice } from "@reduxjs/toolkit";

export const respostasSlice = createSlice({
    name: 'respostas',
    initialState: {
        value: {}
    },
    reducers: {
        setRespostas: (state, action) => {
            state.value = {
                ...state.value,
                [action.payload.questao]: action.payload.letra
            }
        }
    }
});

export const { setRespostas } = respostasSlice.actions;

export default respostasSlice.reducer;