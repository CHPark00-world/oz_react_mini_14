import React, {useEffect, useState} from "react";
import MovieCard from './MovieCard';
import './MovieCard.css';
import './Home.css';

const Home = () => {
    const [movies,setMovies] = useState([]);

    const SECRET_KEY = import.meta.env.VITE_SECRET_KEY

  const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${SECRET_KEY}`
  } 
};

  useEffect(() => {
    fetch('https://api.themoviedb.org/3/movie/popular?language=ko-KR&page=1', options)
      .then(res => res.json())
      .then((data) => {
      setMovies(data.results)
    })},[])

    


    return(
      <div className="Home">
        <h2>인기순</h2>
        <div className="movie-list">
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </div>
    );
}


export default Home;