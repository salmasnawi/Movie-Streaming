import React from "react";
import { Badge } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const MovieCard = ({ movie, type }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/movie/${movie.id}`);
  };

  return (
    <div className="movie-card" onClick={handleClick} style={{ cursor: "pointer" }}>
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
        className="movie-img"
      />
      <div className="">
        {type === "movie" ? (
          <span className="time">3:12:00</span>
        ) : (
          <Badge bg="warning" className="episode-badge">
            EP{movie.episode}
          </Badge>
        )}
        <Badge bg="warning" className="quality-badge">HD</Badge>
        {type === "series" && (
          <Badge bg="dark" className="season-badge">
            Season {movie.season}
          </Badge>
        )}
        <h6 className="movie-title mt-2">{movie.title}</h6>
      </div>
    </div>
  );
};

export default MovieCard;
