import React, { useState } from 'react';
import { Container, Row, Col, Card, Navbar, Nav, Dropdown, Form, Button } from 'react-bootstrap';

// --- Mock Movie Data ---
const getMovies = () => {
  const moviesByLang = {
    ENGLISH: [
      { title: 'HOBBIT', image: '/Images/hobbit.png' },
      { title: 'BACK TO THE FUTURE', image: '/Images/back-to-the-future.png' },
      { title: 'JURASSIC PARK', image: '/Images/jurassic_park.png' },
      { title: 'SICARIO', image: '/Images/sicario.png' },
      { title: 'STAR WARS', image: '/Images/star_wars.png' },
    ],
    HINDI: [
      { title: '12TH FAIL', image: '/Images/12th_fail.png' },
      { title: 'CHHAAVA', image: '/Images/chhaava (1).png' },
      { title: 'JAAT', image: '/Images/jaat.png' },
      { title: 'THE DIPLOMAT', image: '/Images/the_diplomat.png' },
    ],
    TELUGU: [
      { title: 'PUSHPA 2', image: '/Images/pushp2.png' },
      { title: 'BIG BOSS', image: '/Images/bigboss.png' },
      { title: 'KALKI', image: '/Images/kalki.png' },
      { title: 'SALAAR', image: '/Images/salaar.png' }
    ],
    MALAYALAM: [
      { title: 'MANJUMMUL BOYS', image: '/Images/manjummul_boys.png' },
      { title: 'REKHA CHITHRAM', image: '/Images/rekhachithram.png' },
      { title: '2018', image: '/Images/2018 (1).png' },
    ]
  };
  return Object.values(moviesByLang).flat();
};

const allMovies = getMovies();
const expand = "sm";

// --- Helper for Broken Images ---
const handleImageError = (e) => {
  e.target.onerror = null;
  e.target.src = "https://placehold.co/100x150/0f1f2e/ffffff?text=Poster";
  e.target.style.filter = "grayscale(50%)";
};

// --- Footer Component ---
const Footer = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
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
        onClick={scrollToTop}
        style={{
          background: "none",
          border: "none",
          color: "#00AEEF",
          cursor: "pointer",
          fontSize: "14px",
          fontWeight: "bold",
          transition: 'color 0.2s',
        }}
        onMouseOver={(e) => e.target.style.color = 'white'}
        onMouseOut={(e) => e.target.style.color = '#00AEEF'}
      >
        Back to top ↑
      </button>
    </footer>
  );
};

// --- Main MovieGridPage Component ---
function MovieGridPage() {
  const [sortOption, setSortOption] = useState("popularity descending");
  const [filteredMovies, setFilteredMovies] = useState(allMovies);

  const onSortChange = (e) => {
    const value = e.target.value;
    setSortOption(value);
    const sorted = [...filteredMovies].sort((a, b) => {
      if (value === "popularity ascending") return a.title.localeCompare(b.title);
      if (value === "popularity descending") return b.title.localeCompare(a.title);
      if (value === "rating descending") return b.title.localeCompare(a.title);
      if (value === "release asc") return a.title.localeCompare(b.title);
      if (value === "release desc") return b.title.localeCompare(a.title);
      return 0;
    });
    setFilteredMovies(sorted);
  };

  return (
    <>
      <style>{`
        body { background-color: #0b1622; }
        @import url("https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css");
        .starflix-navbar {
          background-color: #0b1622 !important;
          border-bottom: 1px solid #1a2a3a;
          box-shadow: 0 2px 4px rgba(0,0,0,0.5);
        }
        .movie-card {
          background-color: #0b1622 !important;
          border-radius: 8px;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          border: 1px solid #1a2a3a;
        }
        .movie-card:hover {
          transform: scale(1.05);
          box-shadow: 0 0 20px rgba(0, 174, 239, 0.5);
        }
        .movie-card img {
          aspect-ratio: 2/3;
          width: 100%;
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
        .hover-overlay {
          position: absolute;
          top: 0; left: 0;
          width: 100%; height: 100%;
          background: rgba(0, 174, 239, 0.85);
          display: flex;
          justify-content: center;
          align-items: center;
          opacity: 0;
          transition: opacity 0.3s ease;
          border-radius: 8px;
        }
        .movie-hover-card:hover .hover-overlay { opacity: 1; }
        .read-more {
          padding: 10px 20px;
          background-color: #fff;
          color: #0b1622;
          border-radius: 50px;
          font-weight: bold;
          text-decoration: none;
        }
        .read-more:hover {
          background-color: #00AEEF;
          color: white;
        }
        .totalmovies {
          background-color: #0b1622;
          border-bottom: 1px solid #1a2a3a;
          padding: 10px 15px;
        }
        .form-select:focus {
          box-shadow: 0 0 5px #00AEEF;
          border-color: #00AEEF;
        }
      `}</style>

      {/* Navbar */}
      <Navbar key={expand} expand={expand} className="starflix-navbar w-100 position-fixed z-3" sticky="top">
        <Container fluid className="px-md-5">
          <Navbar.Brand href="#home" className="d-flex align-items-center">
            <span style={{ color: 'gold', fontSize: '24px', marginRight: '5px' }}>★</span>
            <span style={{ color: '#00AEEF', fontWeight: 'bold' }}>Star</span>
            <span style={{ color: 'white', fontWeight: 'bold' }}>Flix</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" variant="dark" className="border-0 bg-secondary" />
          <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end w-100">
            <Nav className="align-items-center">
              <Nav.Link href="/home" className="fw-bold text-white me-3">HOME</Nav.Link>
              <Nav.Link href="/movies" className="fw-bold text-white me-3">MOVIES</Nav.Link>
              <Nav.Link href="/tvshow" className="fw-bold text-white me-3">TV SHOWS</Nav.Link>
              <Nav.Link href="/Newpopular" className="fw-bold text-white me-3">NEW & POPULAR</Nav.Link>
              <Dropdown align="end" className="ms-3">
                <Dropdown.Toggle as="a" className="nav-link p-0 d-flex align-items-center">
                  <img src="Images/digit.logo.png" alt="Profile"
                    style={{ width: "35px", height: "35px", borderRadius: "50%", backgroundColor: "#fff", padding: "5px" }} />
                </Dropdown.Toggle>
                <Dropdown.Menu variant="dark" className="bg-dark p-0" style={{ border: '1px solid #333' }}>
                  <Dropdown.Item className="text-white py-2 border-bottom">Profile</Dropdown.Item>
                  <Dropdown.Item className="text-white py-2 border-bottom">ACCOUNT</Dropdown.Item>
                  <Dropdown.Item className="text-white py-2">SIGN OUT</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Movie Section */}
      <div className="py-5" style={{ backgroundColor: '#0b1622', minHeight: '100vh', paddingTop: '80px' }}>
        <Container fluid className="pt-4 px-md-5">
          {/* Total + Sort Row */}
          <div className="totalmovies text-white d-flex flex-column flex-md-row justify-content-between align-items-md-center mb-3">
            <p className="m-0">Found <span className="text-info fw-bold">{filteredMovies.length}</span> movies in total</p>
            <Form>
              <Form.Select
                name="selection"
                value={sortOption}
                onChange={onSortChange}
                className="form-select bg-dark text-white border-0"
                style={{ minWidth: '220px' }}
              >
                <option value="popularity descending">Popularity Descending</option>
                <option value="popularity ascending">Popularity Ascending</option>
                <option value="rating descending">Rating Descending</option>
                <option value="release asc">Release Date Ascending</option>
                <option value="release desc">Release Date Descending</option>
              </Form.Select>
            </Form>
          </div>

          {/* Movie Grid */}
          <Row className="gy-4 justify-content-center">
            {filteredMovies.map((movie, movieIndex) => (
              <Col xs={6} sm={4} md={3} xl={2} key={movieIndex} className="d-flex justify-content-center">
                <Card className="movie-card movie-hover-card" style={{ cursor: 'pointer', maxWidth: '200px', position: 'relative' }}>
                  <Card.Img variant="top" src={movie.image} alt={movie.title} onError={handleImageError} />
                  <div className="hover-overlay">
                    <a href={`/rating/id:${encodeURIComponent(movie.title)}`}  className="read-more" target="_blank"
  rel="noopener noreferrer">
                      READ MORE
                    </a>
                  </div>
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

// --- App Wrapper ---
export default function App() {
  return (
    <div style={{ fontFamily: 'Inter, sans-serif' }}>
      <MovieGridPage />
      <Footer />
    </div>
  );
}
