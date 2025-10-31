import React, { useState } from "react";
import { Container, Row, Col, Button, Nav, Tab } from "react-bootstrap";
import { PlayCircle, CreditCard } from "react-bootstrap-icons";           
import Header from './Header'
import Footer from "./Footer";
import Searchbar from "./Searchbar";




const movieDetails = {
  chhaava: {
    title: "Chhaava",
    poster: "/images/chhaava.png",
    background: "/images/chhaava-bg.png",
    overview:
      "After Chhatrapati Shivaji Maharaj’s death, the Mughals aim to expand into the Deccan, only to face his fearless son, Chhatrapati Sambhaji Maharaj. Chhaava, inspired by Shivaji Sawant’s novel, chronicles Chhatrapati Sambhaji Maharaj’s unwavering resistance against Aurangzeb, marked by courage, strategy, and betrayal.",
    director: "Laxman Utekar",
    stars: "Vicky Kaushal, Rashmika Mandanna, Akshaye Khanna",
    genres: "Action, Drama, Historical",
    releaseDate: "14 Feb, 2025",
    runtime: "2h 41min",
    rating: "9.2/10",
    reviews: "192K Reviews",
    trailerUrl: "https://www.youtube.com/embed/1rIqGqYDR8A",
    cast: [
      { name: "Vicky Kaushal", role: "Chhatrapati Sambhaji Maharaj" },
      { name: "Rashmika Mandanna", role: "Yesubai" },
      { name: "Akshaye Khanna", role: "Aurangzeb" },
    ],
    reviewList: [
      { user: "Rajesh", text: "An epic performance by Vicky! Goosebumps guaranteed.", rating: "⭐⭐⭐⭐⭐" },
      { user: "Meera", text: "Visually stunning and emotionally powerful!", rating: "⭐⭐⭐⭐" },
    ],
  },
};

const Details = () => {
  const [activeTab, setActiveTab] = useState("overview");
  const [showShare, setShowShare] = useState(false);
  const movie = movieDetails["chhaava"];

  return (
    <div
      style={{
        backgroundColor: "#020d18",
        color: "#fff",
        minHeight: "100vh",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Decorative Background Image */}
      <img
        src={movie.background}
        alt="background"
        style={{
          position: "absolute",
          width: "100%",
          height: "80vh",
          objectFit: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          opacity: 0.2,
          pointerEvents: "none",
        }}
      />

      <Header />
      
      <Searchbar/>
      <Container className="py-5">
        <Row className="align-items-start">
          {/* Poster Section */}
          <Col md={4} className="text-center mb-4">
            <img
              src={movie.poster}
              alt={movie.title}
              className="rounded shadow-lg mb-4"
              style={{
                width: "100%",
                height: "450px",
                objectFit: "cover",
                border: "2px solid #444",
              }}
            />
            <div className="d-grid gap-3">
              <Button
                variant="primary"
                className="d-flex align-items-center justify-content-center gap-2 fw-semibold"
              >
                <PlayCircle /> WATCH TRAILER
              </Button>
              <Button
                variant="warning"
                className="d-flex align-items-center justify-content-center gap-2 fw-semibold text-dark"
              >
                <CreditCard /> BUY TICKET
              </Button>
            </div>
          </Col>

          {/* Movie Info Section */}
          <Col md={8}>
            <h2 className="fw-bold text-uppercase mb-2 mt-5">{movie.title}</h2>

            <div className="d-flex align-items-center gap-3 mt-2 mb-3 mt-5">
              <Button variant="outline-light" size="sm">
                + Add to Favorite
              </Button>
              <Button
                variant="outline-light"
                size="sm"
                onClick={() => setShowShare(!showShare)}
              >
                ↗ Share
              </Button>
            </div>

            <div className="d-flex align-items-center gap-3 mt-5">
              <h5 className="mb-0 text-warning">⭐ {movie.rating}</h5>
              <p className="text-light mb-0">{movie.reviews}</p>
            </div>

            <hr className="border-secondary mt-3" />

            {/* Tabs Section */}
            <Tab.Container activeKey={activeTab} onSelect={(k) => setActiveTab(k)}>
              <Nav variant="tabs" className="mb-4 mt-5">
                <Nav.Item>
                  <Nav.Link eventKey="overview" className="text-light fw-semibold">
                    Overview
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="cast" className="text-light fw-semibold">
                    Cast & Crew
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="reviews" className="text-light fw-semibold">
                    Reviews
                  </Nav.Link>
                </Nav.Item>
              </Nav>

              <Tab.Content>
                {/* Overview Tab */}
                <Tab.Pane eventKey="overview">
                  <p className="text-light lh-lg">{movie.overview}</p>
                  <Row className="mt-4 align-items-start">
                    <Col md={6}>
                      <div
                        className="ratio ratio-16x9 rounded overflow-hidden shadow-lg"
                        style={{ maxWidth: "100%", height: "260px" }}
                      >
                        <iframe
                          src={movie.trailerUrl}
                          title={`${movie.title} Trailer`}
                          allowFullScreen
                          style={{ border: "none" }}
                        ></iframe>
                      </div>
                    </Col>

                    <Col md={6}>
                      <div className="text-light">
                        <p><strong>Director:</strong> {movie.director}</p>
                        <p><strong>Stars:</strong> {movie.stars}</p>
                        <p><strong>Genres:</strong> {movie.genres}</p>
                        <p><strong>Release Date:</strong> {movie.releaseDate}</p>
                        <p><strong>Run Time:</strong> {movie.runtime}</p>
                      </div>
                    </Col>
                  </Row>
                </Tab.Pane>

                {/* Cast & Crew Tab */}
                <Tab.Pane eventKey="cast">
                  <Row>
                    {movie.cast.map((actor, idx) => (
                      <Col md={4} key={idx} className="mb-3">
                        <div className="p-3 bg-dark rounded shadow-sm h-100 text-center">
                          <h6 className="text-warning mb-1">{actor.name}</h6>
                          <p className="text-light mb-0">{actor.role}</p>
                        </div>
                      </Col>
                    ))}
                  </Row>
                </Tab.Pane>

                {/* Reviews Tab */}
                <Tab.Pane eventKey="reviews">
                  {movie.reviewList.map((r, i) => (
                    <div key={i} className="mb-4 p-3 bg-dark rounded shadow-sm">
                      <h6 className="text-warning mb-1">{r.user}</h6>
                      <p className="text-light mb-1">{r.text}</p>
                      <span className="text-warning">{r.rating}</span>
                    </div>
                  ))}
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>

      <Footer />
    </div>
  );
};

export default Details;
