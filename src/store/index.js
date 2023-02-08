import { configureStore } from "@reduxjs/toolkit";
import progressReducer from "./slices/progressSlice";
import respostasReducer from "./slices/respostasSlice";

export default configureStore({ reducer: {
    progress: progressReducer,
    respostas: respostasReducer
}});