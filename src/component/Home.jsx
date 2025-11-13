import MovieCard from "./MovieCard";
import "./MovieCard.css";
import "./Home.css";
import useMovies from "../hooks/useMovies";

const Home = () => {
  const { movies, loading, error } = useMovies(
    "https://api.themoviedb.org/3/movie/popular?language=ko-KR&page=1"
  );

  if (loading) return <div>🎬 로딩 중...</div>;
  if (error) return <div>❌ 에러 발생!</div>;

  return (
    <div className="Home">
      <h2>인기순</h2>
      <div className="movie-list">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default Home;
