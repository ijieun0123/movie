import { useState, useEffect } from 'react';
import './App.scss';
import Detail from './pages/Detail';
import Home from './pages/Home';
import { Link, Route, Routes } from 'react-router-dom';
import Header from './organisms/header';

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
      {/* 헤더 */}
      <Header></Header>

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
