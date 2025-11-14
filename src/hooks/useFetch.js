import { useState, useEffect } from "react";

const useFetch = (id) => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const SECRET_KEY = import.meta.env.VITE_SECRET_KEY;
  const url1 = `https://api.themoviedb.org/3/movie/${id}?language=ko-KR&page=1`;
  const url2 = `https://api.themoviedb.org/3/movie/${id}?language=ko-KR`;

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${SECRET_KEY}`,
    },
  };

  useEffect(() => {
    const useMovies = async () => {
      try {
        const res = await fetch(url1, options);
        const data = await res.json();
        setMovies(data);
      } catch (err) {
        setError(err);
        console.log(err);
      } finally {
        setLoading(false);
      }
    };
    useMovies();
  }, [id]);
};

useEffect(() => {
  const useMovies2 = async () => {
    try {
      const res = await fetch(url2, options);
      const data = await res.json();
      setMovies(data);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };
  useMovies2();
}, [id]);

export default useFetch;
