import API from "../Common/Apis/MovieApi";
import {ApiKey} from "../Common/Apis/MovieApiKey";
import { createSlice  } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const asyncFetchShows = createAsyncThunk("shows/asyncFetchShows", async() => {

    const showText = "Friends";
    const response = await  API.get(`?apikey=${ApiKey}&s=${showText}&type=series`);
    return response.data;
})

const initialState = {
    shows: [],
}

const showSlice = createSlice({
    name:"shows",
    initialState,
    extraReducers: {
        [asyncFetchShows.pending] : () => {
            console.log("Shows-pending")
        },

        [asyncFetchShows.fulfilled] : (state,{payload}) => {
            console.log("Shows-Fetched")
            state.shows = payload
        },

        [asyncFetchShows.rejected] : () => {
            console.log("Shows-rejected")
        }
    }
})

export default showSlice.reducer;
export const getAllShows = (state) => state.shows; 