import React from 'react';
import { useSelector } from 'react-redux';
import { getAllMovies } from '../../Features/MovieSlice';
import MovieCard from "../MovieCard/MovieCard";
import "./MovieListing.css";

const MovieListing = () => {
    const movies = useSelector(getAllMovies)
    console.log("movies",movies)
    let renderMovies = "";
    
    return (
        <div className='cardContainer'>
            
            {movies.Response === "True" ? (movies.Search.map((movie,index) => {
        return(<MovieCard key={index} data={movie}></MovieCard>)
        
    })) : (
        <div>
            <h3>{movies.Error}</h3>
        </div>
    )}
        </div>
    );
};

export default MovieListing;