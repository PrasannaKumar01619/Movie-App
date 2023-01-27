import React, { useEffect } from 'react';
import MovieListing from "../MovieListing/MovieListing";
import ShowListing  from "../ShowListing/ShowListing";
import API from "../../Common/Apis/MovieApi";
import {ApiKey} from "../../Common/Apis/MovieApiKey";
import { useDispatch } from 'react-redux';
import { addMovies, fetchMoviesAsync } from '../../Features/MovieSlice';
import {asyncFetchShows} from "../../Features/ShowSlice";
import "./Home.css";
import "@fontsource/akaya-telivigala"

const Home = () => {

    // const movieText = "Harry";
    // const dispatch = useDispatch();
    //     const fetchMovies = async()=>{ 
    //         const response = await API.get(`?apiKey=${ApiKey}&s=${movieText}&type=movie`)

    //         .catch((err) => {
    //             console.log(err)
    //         })
    //         console.log("response",response)
    //         dispatch(addMovies(response.data))
    //     }
    // useEffect(() => {fetchMovies()},[])

    const dispatch = useDispatch();
    const movieText = "mission";

    useEffect(() => {
        dispatch(fetchMoviesAsync(movieText));
        dispatch(asyncFetchShows ());
    },[])
    return (
        <div>
            <h2 style={{fontFamily: "Akaya Telivigala , cursive"}}>Movies</h2>
            <MovieListing></MovieListing>
            <h2 style={{fontFamily: "Akaya Telivigala , cursive"}}>Shows</h2>
            <ShowListing></ShowListing>

        </div>
    );
};

export default Home;