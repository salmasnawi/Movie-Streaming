import React, { useEffect, useState } from "react";
import { fetchMovies } from "../api/movieApi"; // استيراد API
import MovieCard from "./MovieCard"; // استيراد مكون الكارت
import { Container, Row, Col } from "react-bootstrap";

const NewRelease = () => {
  const [movies, setMovies] = useState([]);
  const [series, setSeries] = useState([]);

  useEffect(() => {
    const getNewContent = async () => {
      const moviesData = await fetchMovies();
      const seriesData = await fetchMovies();
      setMovies(moviesData.slice(0, 4)); // عرض أول 4 أفلام
      setSeries(seriesData.slice(5, 9)); // عرض أول 4 مسلسلات
    };

    getNewContent();
  }, []);

  return (
    <Container className="text-white mt-4" id="newRelease">
      {/* قسم الأفلام */}
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h4>New Release - Movies</h4>
        <a href="#" className="text-light text-decoration-none">
          View all →
        </a>
      </div>
      <Row>
        {movies.map((movie) => (
          <Col key={movie.id} md={3}>
            <MovieCard movie={movie} type="movie" />
          </Col>
        ))}
      </Row>

      {/* قسم المسلسلات */}
      <div className="d-flex justify-content-between align-items-center mt-4 mb-3">
        <h4>New Release - Series</h4>
        <a href="#" className="text-light text-decoration-none">
          View all →
        </a>
      </div>
      <Row>
        {series.map((show) => (
          <Col key={show.id} md={3}>
            <MovieCard movie={show} type="series" />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default NewRelease;
