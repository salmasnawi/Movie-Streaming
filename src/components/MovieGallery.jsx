import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card, Badge, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { fetchMovies } from "../api/movieApi";
import { FaArrowRight } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";

const MovieGallery = () => {
  const [movies, setMovies] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const getMovies = async () => {
      const data = await fetchMovies();
      setMovies(data);
    };
    getMovies();
  }, []);

  const handleCardClick = (id) => {
    navigate(`/movie/${id}`);
  };

  return (
    <Container>
      <div className="d-flex justify-content-between align-items-center my-4 text-light" id="movieGallery">
        <h2>Recommended Movies</h2>
        <Button variant="warning">View All <FaArrowRight /></Button>
      </div>
      <Row>
        {movies.map((movie) => (
          <Col key={movie.id} md={3} className="mb-4">
            <Card className="bg-dark text-white" onClick={() => handleCardClick(movie.id)} style={{ cursor: "pointer" }}>
              <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
              <Card.Body>
                <Card.Title>{movie.title}</Card.Title>
                <div>
                  {movie.genres && movie.genres.map((genre, index) => (
                    <Badge bg="warning text-dark" className="me-1" key={index}>{genre}</Badge>
                  ))}
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default MovieGallery;
