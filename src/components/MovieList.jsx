import React, { useEffect, useState } from "react";
import { fetchMovies } from "../api/movieApi";
import MovieCardSmall from "./MovieCardSmall";
import MovieCardLarge from "./MovieCardLarge";

const MovieList = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      const data = await fetchMovies();
      setMovies(data);
    };
    getMovies();
  }, []);

  return (
    <div className="container mt-4">
      {/* Recently Updated */}
      <div className="mb-4">
        <h3 className="text-white">Recently Updated</h3>
        <div className="d-flex gap-2">
          {movies.slice(0, 6).map((movie) => (
            <MovieCardSmall key={movie.id} movie={movie} />
          ))}
          <button className="arrow-btn bg-warning">→</button>
        </div>
      </div>

      {/* Trending */}
      <div>
        <h3 className="text-white d-flex justify-content-between">
          Trending <span className="view-all">View all →</span>
        </h3>
        <div className="d-flex gap-3">
          {movies.slice(0, 4).map((movie) => (
            <MovieCardLarge key={movie.id} movie={movie} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
