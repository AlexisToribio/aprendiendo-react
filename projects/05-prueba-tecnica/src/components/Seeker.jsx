import { useState } from "react";
import { Movies } from "./Movies.jsx";
import { Loader } from "./Loader.jsx";
import { useMovies } from "../hooks/useMovies.js";

export function Seeker() {
  const [title, setTitle] = useState("");
  const { movies, getMovies, loading } = useMovies();

  const handleSubmit = e => {
    e.preventDefault();
    getMovies({ title });
  };

  const handleChange = e => {
    const newTitle = e.target.value;
    setTitle(newTitle);
  };

  return (
    <>
      <header>
        <form className="form" onSubmit={handleSubmit}>
          <label htmlFor="search">
            <span>Buscador de películas</span>
            <input
              id="search"
              placeholder="Avengers, Star Wars, The Matrix..."
              value={title}
              onChange={handleChange}
            />
          </label>
          <button>Buscar</button>
        </form>
      </header>
      <main>{loading ? <Loader /> : <Movies movies={movies} />}</main>
    </>
  );
}
