import React from "react";
import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import API from "../Common/Apis/MovieApi";
import { ApiKey } from "../Common/Apis/MovieApiKey";

export const fetchAsyncMovieDetails = createAsyncThunk("movieDetails",async(id) => {

    const response = await API.get(`?apikey=${ApiKey}&i=${id}&plot=full`);
    return response.data;
})

const initialState = {
    movieDetails: [],
    loading: false
}

const MovieDetailsSlice = createSlice({
    name:"movieDetails",
    initialState,
    extraReducers: {

        [fetchAsyncMovieDetails.pending] : (state) => {
            state.loading = true ;
        },

        [fetchAsyncMovieDetails.fulfilled] : (state,{payload}) => {
            
            state.loading = false;
            state.movieDetails = payload;
        },

        [fetchAsyncMovieDetails.rejected] : (state) => {
            state.loading = false;
        }
    }
})

export default MovieDetailsSlice.reducer;