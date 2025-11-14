import "./MovieDetail.css";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const MovieDetail = () => {
  const [movie, setMovie] = useState({});
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    const SECRET_KEY = import.meta.env.VITE_SECRET_KEY;
    const url = `https://api.themoviedb.org/3/movie/${id}?language=ko-KR`;
    const options = {
      method: "GET",
      headers: {
        Authorization: `Bearer ${SECRET_KEY}`,
        accept: "application/json",
      },
    };

    const getMovie = async () => {
      const res = await fetch(url, options);
      const data = await res.json();
      setMovie(data);
    };
    getMovie();
  }, [id]);

  return (
    <>
      <div className="movieDetail-container">
        <button onClick={() => navigate(-1)}>뒤로 가기</button>
        <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} />
        <div>
          <p>제목 : {movie.title} </p>
          <p>평점 : {movie.vote_average}</p>
          <p>장르 : {movie.genres?.map((genre) => genre.name).join(", ")}</p>
        </div>
      </div>
    </>
  );
};

export default MovieDetail;
