
import { createSlice , createAsyncThunk} from "@reduxjs/toolkit";
import API from "../Common/Apis/MovieApi";
import {ApiKey} from "../Common/Apis/MovieApiKey";


export const fetchMoviesAsync = createAsyncThunk('movies/fetchMoviesAsync', async () => {
    const movieText = "mission";
    // const response = await API.get(`?apiKey=${ApiKey}&s=${movieText}&type=movie`)
    const response = await API.get(`?apiKey=${ApiKey}&y=2000&type=movie`)
    return response.data;
})


const initialState = {
    movies:[],
}

const movieSlice = createSlice({
    name:'Movies',
    initialState,
    // reducers: {
    //     addMovies: (state , {payload}) => {
    //         state.movies = payload
    //     }
    // },
    extraReducers: {
        [fetchMoviesAsync.pending]: () => {
            console.log("Pending");
        },
        [fetchMoviesAsync.fulfilled]: (state,{payload}) => {
            console.log("Fetched");
            state.movies = payload
        },
        [fetchMoviesAsync.rejected]: () => {
         console.log("Rejected")
        }
    },
    
    
})

export const {addMovies} = movieSlice.actions;
export default movieSlice.reducer;
export const getAllMovies = (state) => state.movies;