import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchAsyncMovieDetails } from "../../Features/MovieDetailsSlice";
import GradeIcon from '@mui/icons-material/Grade';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { faFilm } from '@fortawesome/free-solid-svg-icons';
import { faCalendar } from '@fortawesome/free-solid-svg-icons';
import { Typography } from '@mui/material';
import "./MovieDetails.css";

const MovieDetails = () => {
    const dispatch = useDispatch();
    const imdbID = useParams();
    useEffect(() => {
        dispatch(fetchAsyncMovieDetails(imdbID.imdbID))
    }, [])
    const movieDetails = useSelector((s) => (s.movieDetails.movieDetails))
    const Loader = useSelector((s) => (s.movieDetails.loading))
    console.log("imdbID", imdbID.imdbID)
    console.log(movieDetails)
    console.log(Loader)
    return (!(Loader) &&
        <div className='acontainer'>
            <div className='info'>
                <h2 className='title'>{movieDetails.Title}</h2>

                <div className='tag'>
                    <span >
                        {/* <p>IMDB Rating <GradeIcon className='icon' fontSize='small' sx={{color:"yellow"}}></GradeIcon> : {movieDetails.imdbRating}</p>  */}
                        <p>IMDB Rating <FontAwesomeIcon icon={faStar} style={{ color: "yellow" }} /> : {movieDetails.imdbRating}</p>
                    </span>
                    <span>
                        <p>IMDB Votes <FontAwesomeIcon icon={faThumbsUp} style={{ color: "white" }} /> : {movieDetails.imdbVotes}</p>
                    </span>
                    <span>
                        <p>Runtime <FontAwesomeIcon icon={faFilm} style={{ color: "white" }} /> : {movieDetails.Runtime}</p>
                    </span>
                    <span>
                        <p>Year <FontAwesomeIcon icon={faCalendar} style={{ color: "white" }}></FontAwesomeIcon> : {movieDetails.Year}</p>
                    </span>
                </div>

                <div className='plot'>
                    {movieDetails.Plot}

                </div>

                <div className='facts'>

                    <table>
                        <tbody>
                            <tr>
                                <td><b>Director  </b></td>
                                <td>{movieDetails.Director}</td>
                            </tr>
                            <tr>
                                <td><b>Stars  </b></td>
                                <td>{movieDetails.Actors}</td>
                            </tr>
                            <tr>
                                <td><b>Generes  </b></td>
                                <td>{movieDetails.Genre}</td>
                            </tr>
                            <tr>
                                <td><b>Languages  </b></td>
                                <td>{movieDetails.Language}</td>
                            </tr>
                            <tr>
                                <td><b>Director  </b></td>
                                <td>{movieDetails.Director}</td>
                            </tr>
                        </tbody>

                    </table>

                </div>



            </div>
            <div className='infoImage'>
                <img src={movieDetails.Poster}></img>
            </div>



        </div>
    );
};

export default MovieDetails;