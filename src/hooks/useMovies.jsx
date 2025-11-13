import { useState, useEffect } from "react";

const useMovies = (url) => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const SECRET_KEY = import.meta.env.VITE_SECRET_KEY;

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${SECRET_KEY}`,
    },
  };

  useEffect(() => {
    const fetchMovies = async () => {
      setLoading(true);

      try {
        const res = await fetch(url, options);
        const data = await res.json();
        setMovies(data.results);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };

    fetchMovies();
  }, [url]);

  return { movies, loading, error };
};

export default useMovies;
