import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col, Badge, Button, Modal, Spinner } from "react-bootstrap"; // استيراد Spinner
import "bootstrap/dist/css/bootstrap.min.css";
import { FaStar } from "react-icons/fa";
import axios from "axios";

const API_KEY = "36b927caa7f63dd9f0ca6caaf5592946";
const BASE_URL = "https://api.themoviedb.org/3";

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [trailerKey, setTrailerKey] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(true); // حالة التحميل

  useEffect(() => {
    const getMovieDetails = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/movie/${id}`, {
          params: { api_key: API_KEY, language: "en-US", append_to_response: "videos" },
        });
        setMovie(response.data);

        // استخراج أول فيديو "Trailer" من YouTube
        const officialTrailer = response.data.videos.results.find(
          (video) => video.type === "Trailer" && video.site === "YouTube"
        );

        if (officialTrailer) {
          setTrailerKey(officialTrailer.key);
        }
      } catch (error) {
        console.error("Error fetching movie details:", error);
      } finally {
        setLoading(false); // إيقاف التحميل
      }
    };
    getMovieDetails();
  }, [id]);

  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center mt-5 vh-100">
        <Spinner animation="border" variant="warning" style={{ width: "100px", height: "100px" }} />
      </div>
    );
  }

  return (
    <Container className="text-light mt-5 pt-2">
      <Row>
        <Col md={4}>
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
            className="img-fluid rounded"
          />
        </Col>
        <Col md={8}>
          <h1>{movie.title}</h1>
          <div className="mb-3">
            {movie.genres && movie.genres.map((genre) => (
              <Badge bg="light" text="dark" className="me-2" key={genre.id}>
                {genre.name}
              </Badge>
            ))}
          </div>
          <p>
            <FaStar className="text-warning" /> {movie.vote_average} |{" "}
            {movie.runtime} min | {movie.release_date.split("-")[0]}
          </p>
          <p>{movie.overview}</p>
          
          {trailerKey ? (
            <Button variant="warning" onClick={() => setShowModal(true)}>
              Watch it Now
            </Button>
          ) : (
            <p>No trailer available</p>
          )}
        </Col>
      </Row>

      {/* Modal لعرض الفيديو */}
      <Modal show={showModal} onHide={() => setShowModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title className="text-warning">Watch Trailer</Modal.Title>
        </Modal.Header>
        <Modal.Body className="d-flex justify-content-center">
          <iframe
            width="100%"
            height="315"
            src={`https://www.youtube.com/embed/${trailerKey}`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </Modal.Body>
      </Modal>
    </Container>
  );
};

export default MovieDetails;
