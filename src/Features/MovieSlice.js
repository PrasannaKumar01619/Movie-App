
import { createSlice , createAsyncThunk} from "@reduxjs/toolkit";
import API from "../Common/Apis/MovieApi";
import {ApiKey} from "../Common/Apis/MovieApiKey";


export const fetchMoviesAsync = createAsyncThunk('movies/fetchMoviesAsync', async (searchText) => {
    // const movieText = "mission";
    // const response = await API.get(`?apiKey=${ApiKey}&s=${movieText}&type=movie`)
    const response = await API.get(`?apiKey=${ApiKey}&s=${searchText}&type=movie`)
    
    return response.data;
})


const initialState = {
    movies:[],
    Loading: false,
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
        [fetchMoviesAsync.pending]: (state,{payload}) => {
            console.log("Pending");
            state.Loading = true;
        },
        [fetchMoviesAsync.fulfilled]: (state,{payload}) => {
            console.log("Fetched");
            state.Loading = false;
            state.movies = payload;
        },
        [fetchMoviesAsync.rejected]: () => {
         console.log("Rejected")
        }
    },
    
    
})

export const {addMovies} = movieSlice.actions;
export default movieSlice.reducer;
export const getAllMovies = (state) => state.movies;