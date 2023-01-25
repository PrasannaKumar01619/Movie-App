import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { autoBatchEnhancer } from '@reduxjs/toolkit';
import "./MovieCard.css";
import { Link } from 'react-router-dom';



export default function MovieCard({ data }) {
    return (
        <div className='cardContainer'>
        <Link to={`/movie/${data.imdbID}`} >
            <Card sx={{ maxWidth: 250, height: 400}} className="card" >
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height={300}
                        
                        image={data.Poster}
                        alt={data.Title}
                        sx={{ objectFit: "fill" }}
                    />
                    <CardContent className='cardContent'>
                        <Typography gutterBottom variant="h5" component="div" className='typo'>
                            {data.Title}
                        </Typography>
                        <Typography variant="body2" className='typo' >
                            {data.Year}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Link>
        </div>

    );
}