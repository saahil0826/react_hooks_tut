import React, { useState } from "react";

import "./Movies.css";
import MovieCard from './MovieCard.js'

export default function MoviesDB() {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);

  const searchMovies = async e => {
    e.preventDefault();
    const url = `https://api.themoviedb.org/3/search/movie?api_key=c1a24f959efc74b6d48a2d96fe5df945&language=en-US&query=${query}&page=1&include_adult=false`;
    try {
      const res = await fetch(url);
      const data = await res.json();
      console.log(data.results);
      setMovies(data.results);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <h1>Movie src..</h1>
      <form className="form" onSubmit={searchMovies}>
        <label className="label" htmlFor="query">
          Movie Name
        </label>
        <input
          className="input"
          type="text"
          name="query"
          onChange={e => setQuery(e.target.value)}
          value={query}
          placeholder="enter a movie name"
        />
        <button className="button" type="submit">
          Search
        </button>
      </form>
      <div className="card-list">
        {movies
          .filter(movie => movie.poster_path)
          .map(movie => (
             <MovieCard movie={movie} key={movie.id}/>
          ))}
      </div>
    </div>
  );
}
