import { useState, useEffect } from 'react';
import './App.scss';
import Detail from './Components/Detail';
import Home from './Components/Home';
import { Link, Route, Routes } from 'react-router-dom';

function App() {

  const [movies, setMovies] = useState([]);

  const getMovies = async() => {
    const response = await fetch(
      'https://api.themoviedb.org/3/movie/popular?api_key=d771ee361528f7664dfcdb3fde78920a'
    );
    const json = await response.json();
    setMovies(json.results);
  }

  useEffect(() => {
    getMovies();
  }, [])

  return (
    <div className="App">
      <Routes>
        {/* home */}
        <Route 
          exact path="/" 
          element = {<Home movies={ movies } />} 
        />

        {/* 상세 페이지 */}
        <Route 
          exact path="/Detail/:id" 
          element = {<Detail movies={ movies } />} 
        />
      </Routes>
    </div>
  );
}

export default App;
