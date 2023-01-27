import React from "react";
import { useSelector } from "react-redux";
import MovieCard from "../MovieCard/MovieCard";
import Slider from "react-slick";

const ShowListing = () => {
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
    const shows = useSelector((s) => s.shows.shows.Search);
    console.log(shows, "shows");

    return (
        <div className="cardContainer">
            <Slider {...settings}>
                {shows && shows.map((show, index) => {
                    return (<MovieCard key={index} data={show}></MovieCard>)
                })}
            </Slider>


        </div>
    )
}

export default ShowListing;