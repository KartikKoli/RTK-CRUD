import { configureStore } from "@reduxjs/toolkit";
import postReducer from "./features/postSlice";

const store= configureStore({
    reducer:{
        app: postReducer
    }
})

export default store;