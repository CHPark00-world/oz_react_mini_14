import React, {useEffect, useState} from "react";
import MovieCard from "./MovieCard";
import './MovieCard.css';

const Home = () => {
    const [movies, setMovies] = useState([]);
    
   useEffect(() => {
        const SECRET_KEY = import.meta.env.VITE_SECRET_KEY;
        const url = 'https://api.themoviedb.org/3/movie/popular?language=ko-KR';

        fetch(url, {
            headers: {
                Authorization: `Bearer ${SECRET_KEY}`,
                'Content-Type': 'application/json'
            }
        })
        .then(response => response.json())
        .then(data => {
            // adult가 false인 영화만 필터링
            const filteredMovies = data.results.filter(movie => movie.adult === false);
            setMovies(filteredMovies);
        })
        .catch(error => console.error('에러:', error));
    }, []);


    return(
      <div style={{
        backgroundColor: '#141414', 
        minHeight: '100vh',
        width: '100vw',  /* 전체 뷰포트 너비 */
        padding: 0,
        margin: 0
      }}>
        <h2 style={{
          color: '#fff', 
          padding: '20px',
          margin: 0
        }}>인기순</h2>
        <div className="movie-list">
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie}/>
          ))}
        </div>
      </div>
    );
}

export default Home;