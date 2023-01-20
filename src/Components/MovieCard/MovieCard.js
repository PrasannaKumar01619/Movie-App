import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { autoBatchEnhancer } from '@reduxjs/toolkit';
import "./MovieCard.css";



export default function MovieCard({ data }) {
    return (
        <div className='cardContainer'>
            <Card sx={{ maxWidth: 280, }} className="card" >
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="300"

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
        </div>

    );
}