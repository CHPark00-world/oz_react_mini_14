import MovieCard from "./MovieCard";
import "./MovieCard.css";
import useMovies from "../hooks/useMovies";
import { useSearchParams } from "react-router-dom";

const Home = () => {
  const [searchParams] = useSearchParams();

  const { movies, loading, error } = useMovies(
    "https://api.themoviedb.org/3/movie/popular?language=ko-KR&page=1"
  );

  if (loading) return <div>🎬 로딩 중...</div>;
  if (error) return <div>❌ 에러 발생!</div>;

  return (
    <div className="bg-[#141414] min-h-screen w-screen p-0 m-0">
      <h2 className="text-white p-5 m-0">인기순</h2>
      <div className="movie-list">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};
export default Home;
