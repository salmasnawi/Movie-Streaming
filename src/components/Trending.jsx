import React, { useEffect, useState } from "react";
import { fetchMovies } from "../api/movieApi"; // استيراد الـ API
import { FaPlay } from "react-icons/fa";
import { Container, Row, Col, Badge } from "react-bootstrap";
import { useNavigate } from "react-router-dom"; // استيراد التنقل
import "bootstrap/dist/css/bootstrap.min.css";

const Trending = () => {
  const [movies, setMovies] = useState([]);
  const navigate = useNavigate(); // تعريف التنقل

  useEffect(() => {
    const getTrendingMovies = async () => {
      const data = await fetchMovies();
      setMovies(data.slice(0, 3)); // عرض أول 3 أفلام فقط
    };

    getTrendingMovies();
  }, []);

  return (
    <Container className="text-white mt-4" id="trending">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h4>Trending</h4>
        <a href="#" className="text-light text-decoration-none">
          View all →
        </a>
      </div>
      <Row>
        {movies.map((movie) => (
          <Col key={movie.id} md={4}>
            <div 
              className="movie-card m-4"
              onClick={() => navigate(`/movie/${movie.id}`)} // إضافة التنقل عند النقر
              style={{ cursor: "pointer" }} // إضافة مؤشر اليد للإشارة إلى النقر
            >
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                className="movie-img"
              />
              <div className="overlay">
                <span className="time">3:12:00</span>
                <span className="rating">{movie.vote_average.toFixed(1)}</span>
                <FaPlay className="play-icon" />
                <div className="movie-info">
                  <h6 className="mt-2">{movie.title}</h6>
                  <div className="genres">
                    {movie.genres.map((genre, index) => (
                      <Badge key={index} bg="warning text-dark" className="me-1">
                        {genre}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Trending;
