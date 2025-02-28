import React from "react";
import { Container, Button } from "react-bootstrap";

const Hero = () => {
  return (
    <div className="hero-section" id="hero">
      <Container className="text-white d-flex flex-column justify-content-center align-items-start">
        <h1 className="fw-bold">Avatar: The Way of Water</h1>
        <div className="mb-3">
          <span className="badge bg-primary me-2">Action</span>
          <span className="badge bg-secondary me-2">Adventure</span>
          <span className="badge bg-light text-dark">Science Fiction</span>
        </div>
        <p className="w-100 w-md-50">
          Set more than a decade after the events of the first film, learn the story of the Sully family...
        </p>
        <div className="d-flex flex-column flex-sm-row">
          <Button variant="warning" className="me-2 mb-2 mb-sm-0">
            <i className="fas fa-play"></i> Watch Now
          </Button>
          <Button variant="outline-light">
            <i className="fas fa-clock"></i> Watch Later
          </Button>
        </div>
      </Container>
    </div>
  );
};

export default Hero;
