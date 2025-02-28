import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { fetchMovies } from "../api/movieApi"; // استيراد API
import { Container, Spinner } from "react-bootstrap";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const RecentlyUpdated = () => {
  const [recentlyUpdated, setRecentlyUpdated] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getRecentlyUpdated = async () => {
      try {
        const data = await fetchMovies();
        setRecentlyUpdated(data);
      } catch (error) {
        console.error("Error fetching recently updated data:", error);
      } finally {
        setLoading(false);
      }
    };

    getRecentlyUpdated();
  }, []);

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2, slidesToScroll: 1 } },
      { breakpoint: 768, settings: { slidesToShow: 1, slidesToScroll: 1 } },
    ],
  };

  if (loading) {
    return (
      <div className="text-center py-4">
        <Spinner animation="border" variant="light" />
      </div>
    );
  }

  return (
    <Container className="text-white my-4" id="recentlyUpdated">
      <h4 className="mb-3">Recently Updated</h4>
      <Slider {...settings} className="recently-updated-slider">
        {recentlyUpdated.map((item) => (
          <div key={item.id} className="d-flex align-items-center bg-dark p-3">
            {/* صورة المسلسل */}
            <img
              src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
              alt={item.title}
              className="rounded shadow"
              width={100}
              height={150}
            />
            {/* تفاصيل المسلسل */}
            <div className="ms-3">
              <h6 className="mb-1">{item.title}</h6>
              <p className="small mb-1">
                <strong>Season:</strong> {item.season} / <strong>EP:</strong> {item.episode}
              </p>
              <p className="text-muted small mb-0">Updated: {item.date}</p>
            </div>
          </div>
        ))}
      </Slider>
    </Container>
  );
};

export default RecentlyUpdated;
