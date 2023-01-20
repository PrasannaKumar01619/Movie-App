import React, { useEffect } from 'react';
import MovieListing from "../MovieListing/MovieListing";
import API from "../../Common/Apis/MovieApi";
import {ApiKey} from "../../Common/Apis/MovieApiKey";
import { useDispatch } from 'react-redux';
import { addMovies, fetchMoviesAsync } from '../../Features/MovieSlice';
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
    useEffect(() => {
        dispatch(fetchMoviesAsync())
    })
    return (
        <div>
            <h2 style={{fontFamily: "Akaya Telivigala , cursive"}}>Movies</h2>
            <MovieListing></MovieListing>
        </div>
    );
};

export default Home;