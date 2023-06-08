import { useState } from "react";
import { getMoviesByTitle } from "../services/movies.js";

export function useMovies() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  const getMovies = ({ title }) => {
    setLoading(true);
    getMoviesByTitle({ title })
      .then(newMovies => setMovies(newMovies))
      .catch(e => console.error(e))
      .finally(() => setLoading(false));
  };

  return { movies, getMovies, loading };
}
