import { mappedMovies } from "../utils/mappedMovies.js";

export async function getMoviesByTitle({ title }) {
  const res = await fetch(
    `https://www.omdbapi.com/?apikey=ca981a25&s=${title}`
  );
  if (!res.ok) return;
  const data = await res.json();
  const { Search } = data;
  const newMovies = mappedMovies({ movies: Search });

  return newMovies;
}
