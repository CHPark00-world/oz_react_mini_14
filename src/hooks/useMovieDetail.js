import { useState, useEffect } from "react";

const useMovieDetail = (id) => {
  const [movie, setMovie] = useState({});

  const SECRET_KEY = import.meta.env.VITE_SECRET_KEY;

  const options = {
    method: "GET",
    headers: {
      Authorization: `Bearer ${SECRET_KEY}`,
      accept: "application/json",
    },
  };

  useEffect(() => {
    const url = `https://api.themoviedb.org/3/movie/${id}?language=ko-KR`;

    fetch(url, options)
      .then((res) => res.json())
      .then((data) => {
        setMovie(data);
      });
  }, [id]);

  return { movie };
};

export default useMovieDetail;
