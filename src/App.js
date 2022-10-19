import { useState, useEffect } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import axios from 'axios';
import { Box } from '@material-ui/core';
import './App.scss';
import Detail from './pages/Detail';
import Home from './pages/Home';
import Header from './organisms/header';

const BoxStyle = {
    margin: '0 auto',
    padding: '0 50px',
    maxWidth: '1200px'
}

function App() {

    const [movies, setMovies] = useState([]);

    const getMovies = async () => {
        const keyword = 'popular'
        const url = `https://api.themoviedb.org/3/movie/${keyword}?api_key=${process.env.REACT_APP_MOVIE_API}&page=1`
        try{
            const res = await axios.get(url);
            const movies = res.data.results;
            setMovies(movies);
        } catch(e) {
            console.log(e);
        }
    }
  
    useEffect(() => {
        getMovies();
    }, [])

    return (
        <Box sx={BoxStyle}>
            {/* 헤더 */}
            <Header></Header>

            <Routes>
              {/* home */}
              <Route 
                exact path="/" 
                element = {<Home />} 
              />

              {/* 상세 페이지 */}
              <Route 
                exact path="/Detail/:id" 
                element = {<Detail movies={ movies } />} 
              />
            </Routes>
        </Box>
    );
}

export default App;
