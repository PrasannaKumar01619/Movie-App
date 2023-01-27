import React from 'react';
import { useSelector } from 'react-redux';
import { getAllMovies } from '../../Features/MovieSlice';
import MovieCard from "../MovieCard/MovieCard";
import Slider from "react-slick";
import "./MovieListing.css";
import { ConstructionOutlined } from '@mui/icons-material';



const MovieListing = () => {
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
    // const movies = useSelector(s => s.movies.movies.Search) 
    const movies = useSelector(s => s.movies.movies.Search)
    const Loading = useSelector(s => s.movies.Loading)
    // const show = useSelector(s => s.show)
    // console.log("movies", movies, shows)


    return ( Loading ? <div className='Loader'>Loading ...</div> :
        <div className='cardContainer'>
            <Slider {...settings}>
                {movies && movies.map((movie, index) => {
                    return (<MovieCard key={index} data={movie}></MovieCard>)

                })
                }
            </Slider>

        </div>
    );
};

export default MovieListing;