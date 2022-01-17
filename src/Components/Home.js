import React from 'react'
import './Home.scss';
import { Link, Route, Routes } from 'react-router-dom';
import { Card, Box, CardContent, CardMedia, Paper, Typography  } from '@material-ui/core';

export default function Home({ movies }) {
    return (
        <div className="home">
            <Typography 
                gutterBottom 
                variant="h2" 
                component="div" 
                color="primary" 
                style={{ 
                    textAlign: "center",
                    padding:'50px 0',
                    fontWeight: 'bold'
                }}
            >
                Movie
            </Typography>

            <Box
                sx={{
                    display: 'flex',
                    alignItems:'start',
                    justifyContent:'space-between',
                    flexWrap: 'wrap',
                    marginBottom:100,
                    '& > :not(style)': {
                        m: 1,
                        width: 280,
                        height: 'auto',
                        marginBottom: 25
                    },
                }}
            >
                {
                    movies.map((movie, i) => {
                        return(
                            <Link to={ '/Detail/' + movie.id } className="link" key={i}>
                                <Card sx={{ maxWidth: 345 }}>
                                    <CardMedia
                                        component="img"
                                        height="160"
                                        image={ 'https://image.tmdb.org/t/p/w500' + movie.backdrop_path }
                                        alt="movie post"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div" color="primary">
                                            { movie.original_title.length > 10 ? `${movie.original_title.slice(0, 10)}...` : movie.original_title }
                                        </Typography>
                                        <Typography variant="body1">
                                            { movie.overview.length > 80 ? `${movie.overview.slice(0, 80)}...` : movie.overview }
                                        </Typography>
                                    </CardContent>
                                    <CardContent style={{ display: 'flex', justifyContent: 'space-between' }}>
                                        <Typography variant="body2">
                                            { movie.release_date }
                                        </Typography>
                                        <Typography variant="body2">
                                            { movie.vote_average }
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Link>
                        )
                    })
                }
            </Box>
        </div>
    )
}
