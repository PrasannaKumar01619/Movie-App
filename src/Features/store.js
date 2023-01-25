import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "./MovieSlice";
import showReducer from "./ShowSlice";
import movieDetailsReducer from "./MovieDetailsSlice";

export const store = configureStore({
    reducer: {
        movies : moviesReducer,
        shows : showReducer,
        movieDetails : movieDetailsReducer
    }

    
});
