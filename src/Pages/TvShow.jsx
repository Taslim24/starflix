
import React, { useState } from 'react';
import { Container, Row, Col, Card, Nav, Navbar, Dropdown, Form } from 'react-bootstrap';

const getMovies = () => {
  const moviesByLang = {
    tvShows: [
      { title: "BIG BOSS", image: "/Images/bigboss.png" },
      { title: "KOFFEE WITH KARUN", image: "/Images/koffee-with-karan.png" },
      { title: "ISHMART JODI", image: "/Images/ishmart_jodi.png" },
      { title: "SHERLOCK", image: "/Images/sherlock.png" },
      { title: "DANCE+", image: "/Images/dance.png" },
      { title: "SUPERSINGER JUNIOR", image: "/Images/supersinger_junior.png" },
      { title: "BreakingBad", image: "/Images/breaking_bad.png" },
      { title: "dance-deewane", image: "/Images/dance-deewane.png" },
      { title: "chernoby", image: "/Images/chernobyl.png" },
      { title: "the-last-dance", image: "/Images/the-last-dance.png" },
      { title: "game-of-thrones", image: "/Images/game-of-thrones.png" },
      { title: "kiraack_boys_khiladi_girls", image: "/Images/kiraack_boys_khiladi_girls.png" },
    ]
  };
  return Object.values(moviesByLang).flat();
};

const allMovies = getMovies();
const expand = "sm";

const handleImageError = (e) => {
  e.target.onerror = null;
  e.target.src = "https://placehold.co/100x150/0f1f2e/ffffff?text=Poster";
  e.target.style.filter = "grayscale(50%)";
};

const Footer = () => (
  <footer
    style={{
      backgroundColor: "#0b1622",
      color: "#ccc",
      padding: "15px 40px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      fontSize: "14px",
      borderTop: '1px solid #1a2a3a'
    }}
  >
    <p style={{ margin: 0 }}>© 2025 StarFlix. All Rights Reserved.</p>
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      style={{
        background: "none",
        border: "none",
        color: "#00AEEF",
        cursor: "pointer",
        fontSize: "14px",
        fontWeight: "bold",
      }}
    >
      Back to top ↑
    </button>
  </footer>
);

function MovieGridPage() {
  const [sortBy, setSortBy] = useState("Popularity Descending");

  const handleCardClick = (movie) => {
    console.log(`Navigating to movie details for: ${movie.title}`);
  };

  return (
    <>
      <style>
        {`
          body {
            background-color: #0b1622;
          }
          @import url("https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css");
          .movie-card {
            background-color: #0b1622 !important;
            border-radius: 8px;
            transition: transform 0.3s ease, box-shadow 0.3s ease;
            overflow: hidden;
            height: 100%;
            border: 1px solid #1a2a3a;
          }
          .movie-card:hover {
            transform: scale(1.05);
            box-shadow: 0 0 20px rgba(0, 174, 239, 0.5);
          }
          .movie-card img {
            width: 100%;
            aspect-ratio: 2/3;
            object-fit: cover;
            border-radius: 8px 8px 0 0;
          }
          .movie-title {
            font-size: 14px;
            font-weight: 600;
            text-align: center;
            color: white;
            padding: 8px 0;
            text-transform: uppercase;
          }
          .info-bar {
            background-color: #0b1622;
            color: #ccc;
            display: flex;
            justify-content: space-between;
            align-items: center;
            border-bottom: 1px solid #1a2a3a;
            padding: 10px 0;
            font-size: 14px;
          }
          .info-bar select {
            background-color: #0b1622;
            color: #fff;
            border: 1px solid #1a2a3a;
            padding: 5px 10px;
            border-radius: 5px;
          }
          .info-bar select:focus {
            outline: none;
            border-color: #00AEEF;
          }
        `}
      </style>

      {/* Navbar */}
      <Navbar expand={expand} className="starflix-navbar w-100 position-fixed z-3" sticky="top" style={{ minHeight: '60px', backgroundColor: "#0b1622", borderBottom: "1px solid #1a2a3a" }}>
        <Container fluid className="px-md-5">
          <Navbar.Brand href="#home" className="d-flex align-items-center">
            <span style={{ color: 'gold', fontSize: '24px', marginRight: '5px' }}>★</span>
            <span style={{ color: '#00AEEF', fontWeight: 'bold' }}>Star</span>
            <span style={{ color: 'white', fontWeight: 'bold' }}>Flix</span>
          </Navbar.Brand>
        </Container>
      </Navbar>

      {/* Main Section */}
      <div className="py-5" style={{ backgroundColor: '#0b1622', minHeight: '100vh', paddingTop: '80px' }}>
        <Container fluid className="pt-4 px-md-5">

          {/* ✅ Info Bar (like your screenshot) */}
          <div className="info-bar">
            <div>
              Found <span style={{ color: '#00AEEF', fontWeight: 'bold' }}>{allMovies.length.toLocaleString()}</span> movies in total
            </div>
            <div>
              <span style={{ marginRight: "8px" }}>Sort by:</span>
              <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
                <option>Popularity Descending</option>
                <option>Popularity Ascending</option>
                <option>Rating Descending</option>
                <option>Rating Ascending</option>
              </select>
            </div>
          </div>

          {/* Movie Grid */}
          <Row className="gy-4 mt-4">
            {allMovies.map((movie, movieIndex) => (
              <Col xs={6} sm={4} md={3} xl={2} key={movieIndex} className="d-flex justify-content-center">
                <Card className="movie-card movie-hover-card justify-content-center" style={{ cursor: 'pointer', maxWidth: '200px' }} onClick={() => handleCardClick(movie)}>
                  <Card.Img variant="top" src={movie.image} alt={`${movie.title} poster`} onError={handleImageError} />
                  <Card.Body className="p-0 text-center">
                    <Card.Title className="movie-title px-1">{movie.title}</Card.Title>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    </>
  );
}

export default function App() {
  return (
    <div style={{ fontFamily: 'Inter, sans-serif' }}>
      <MovieGridPage />
      <Footer />
    </div>
  );
}
