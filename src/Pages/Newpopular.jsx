import React, { useState } from 'react';
import { Container, Row, Col, Card, Nav, Navbar, Dropdown, Form, Button } from 'react-bootstrap';

// --- Helper Functions and Mock Data ---
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
      { title: 'SALAAR', image: '/Images/salaar.png' },
    ],
    MALAYALAM: [
      { title: 'MANJUMMUL BOYS', image: '/Images/manjummul_boys.png' },
      { title: 'REKHA CHITHRAM', image: '/Images/rekhachithram.png' },
      { title: '2018', image: '/Images/2018 (1).png' },
    ],
  };
  return Object.values(moviesByLang).flat();
};

const allMovies = getMovies();
const expand = 'sm';

const handleImageError = (e) => {
  e.target.onerror = null;
  e.target.src = 'https://placehold.co/100x150/0f1f2e/ffffff?text=Poster';
  e.target.style.filter = 'grayscale(50%)';
};

// --- Footer Component ---
const Footer = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer
      style={{
        backgroundColor: '#0b1622',
        color: '#ccc',
        padding: '15px 40px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        fontSize: '14px',
        borderTop: '1px solid #1a2a3a',
      }}
    >
      <p style={{ margin: 0 }}>© 2025 StarFlix. All Rights Reserved.</p>
      <button
        onClick={scrollToTop}
        style={{
          background: 'none',
          border: 'none',
          color: '#00AEEF',
          cursor: 'pointer',
          fontSize: '14px',
          fontWeight: 'bold',
          transition: 'color 0.2s',
        }}
        onMouseOver={(e) => (e.target.style.color = 'white')}
        onMouseOut={(e) => (e.target.style.color = '#00AEEF')}
      >
        Back to top ↑
      </button>
    </footer>
  );
};

// --- Movie Grid Page ---
function MovieGridPage() {
  const [filterState, setFilterState] = useState({
    movieName: '',
    genres: '',
    rating: '',
    releaseFrom: '',
    releaseTo: '',
  });

  const [sortOption, setSortOption] = useState('popularity descending');

  const handleSortChange = (e) => {
    setSortOption(e.target.value);
  };

  const handleFilterSubmit = (e) => {
    e.preventDefault();
    console.log('Filter submitted:', filterState);
  };

  const handleCardClick = (movie) => console.log(`Navigating to movie: ${movie.title}`);

  return (
    <>
      <style>
        {`
          body {
            background-color: #0b1622;
          }
          @import url("https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css");
          .starflix-navbar {
            background-color: #0b1622 !important;
            border-bottom: 1px solid #1a2a3a;
            box-shadow: 0 2px 4px rgba(0,0,0,0.5);
          }
          .totalmovies {
            background-color: #0b1622;
            border-bottom: 1px solid #1a2a3a;
            padding: 10px 15px;
          }
          .totalmovies p {
            font-size: 15px;
          }
          .form-select:focus {
            box-shadow: 0 0 5px #00AEEF;
            border-color: #00AEEF;
          }
          .movie-card {
            background-color: #0b1622 !important;
            border-radius: 8px;
            transition: transform 0.3s ease, box-shadow 0.3s ease;
            overflow: hidden;
            height: 100%;
            display: flex;
            flex-direction: column;
            border: 1px solid #1a2a3a;
          }
          .movie-card:hover {
            transform: scale(1.05);
            box-shadow: 0 0 20px rgba(0, 174, 239, 0.5);
          }
          .movie-title {
            font-size: 14px;
            font-weight: 600;
            text-align: center;
            color: white;
            padding: 8px 0;
            text-transform: uppercase;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
          }
          .filter-sidebar {
            background-color: #1a2a3a;
            color: white;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 4px 15px rgba(0,0,0,0.3);
            position: sticky;
            top: 80px;
            margin-bottom: 20px;
          }
          .filter-sidebar .form-control, .filter-sidebar .form-select {
            background-color: #0b1622;
            border: 1px solid #333;
            color: white;
          }
          .btn-submit {
            background-color: #00AEEF;
            border: none;
            font-weight: bold;
            border-radius: 5px;
          }
          .btn-submit:hover {
            background-color: #1d95c8ff;
          }
        `}
      </style>

      {/* Navbar */}
      <Navbar expand={expand} className="starflix-navbar w-100 position-fixed z-3" sticky="top">
        <Container fluid className="px-md-5">
          <Navbar.Brand href="#home">
            <span style={{ color: 'gold', fontSize: '24px', marginRight: '5px' }}>★</span>
            <span style={{ color: '#00AEEF', fontWeight: 'bold' }}>Star</span>
            <span style={{ color: 'white', fontWeight: 'bold' }}>Flix</span>
          </Navbar.Brand>
          <Navbar.Toggle className="border-0 bg-secondary" />
          <Navbar.Collapse className="justify-content-end">
            <Nav className="align-items-center">
              <Nav.Link href="/home" className="fw-bold text-white me-3">HOME</Nav.Link>
              <Nav.Link href="/movies" className="fw-bold text-white me-3">MOVIES</Nav.Link>
              <Nav.Link href="/TvShow" className="fw-bold text-white me-3">TV SHOWS</Nav.Link>
              <Nav.Link href="/Newpopular" className="fw-bold text-white me-3">NEW & POPULAR</Nav.Link>
              <Dropdown align="end" className="ms-3">
                <Dropdown.Toggle as="a" className="nav-link p-0 d-flex align-items-center" style={{ cursor: 'pointer' }}>
                  <img
                    src="Images/digit.logo.png"
                    alt="Profile"
                    style={{ width: '35px', height: '35px', borderRadius: '50%', backgroundColor: '#fff', padding: '5px' }}
                  />
                </Dropdown.Toggle>
                <Dropdown.Menu variant="dark" className="bg-dark p-0" style={{ border: '1px solid #333' }}>
                  <Dropdown.Item href="#profile" className="text-white py-2">Profile</Dropdown.Item>
                  <Dropdown.Item href="#account" className="text-white py-2">ACCOUNT</Dropdown.Item>
                  <Dropdown.Item href="#signout" className="text-white py-2">SIGN OUT</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Main Content */}
      <div className="py-5" style={{ backgroundColor: '#0b1622', minHeight: '100vh', paddingTop: '80px' }}>
        <Container fluid className="pt-4 px-md-5">
          <Row>
            {/* Left Column: Movie Grid */}
            <Col xs={12} lg={9}>
              <div className="totalmovies text-white d-flex flex-column flex-md-row justify-content-between align-items-md-center mb-3">
                <div>
                  <p className="m-0">
                    Found <span className="text-info fw-bold">{allMovies.length}</span> movies in total
                  </p>
                </div>
                <Form.Select
                  name="selection"
                  value={sortOption}
                  onChange={handleSortChange}
                  className="form-select bg-dark text-white border-0"
                  style={{ width: '250px' }}
                >
                  <option value="popularity descending">Popularity Descending</option>
                  <option value="popularity ascending">Popularity Ascending</option>
                  <option value="rating descending">Rating Descending</option>
                  <option value="release asc">Release Date Ascending</option>
                  <option value="release desc">Release Date Descending</option>
                </Form.Select>
              </div>

              <h2 className="text-white text-center mb-3">NEW & POPULAR</h2>
              <Row className="gy-4">
                {allMovies.map((movie, idx) => (
                  <Col xs={6} sm={4} md={3} xl={2} key={idx} className="d-flex justify-content-center">
                    <Card className="movie-card" style={{ cursor: 'pointer', maxWidth: '200px' }} onClick={() => handleCardClick(movie)}>
                      <Card.Img variant="top" src={movie.image} alt={movie.title} onError={handleImageError} />
                      <Card.Body className="p-0 text-center">
                        <Card.Title className="movie-title">{movie.title}</Card.Title>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Row>
            </Col>

            {/* Right Column: Filter Sidebar */}
            <Col xs={12} lg={3}>
              <div className="filter-sidebar">
                <h5 className="text-center mb-4">Movie Filter</h5>
                <Form onSubmit={handleFilterSubmit}>
                  <Form.Group className="mb-3">
                    <Form.Label>Movie name</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter keywords"
                      value={filterState.movieName}
                      onChange={(e) => setFilterState({ ...filterState, movieName: e.target.value })}
                    />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Genres & Subgenres</Form.Label>
                    <Form.Select
                      value={filterState.genres}
                      onChange={(e) => setFilterState({ ...filterState, genres: e.target.value })}
                    >
                      <option value="">Enter to filter genres</option>
                      <option value="Action">Action</option>
                      <option value="Thriller">Thriller</option>
                      <option value="SciFi">Sci-Fi</option>
                      <option value="Drama">Drama</option>
                    </Form.Select>
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Rating Range</Form.Label>
                    <Form.Select
                      value={filterState.rating}
                      onChange={(e) => setFilterState({ ...filterState, rating: e.target.value })}
                    >
                      <option value="">-- Select rating range --</option>
                      <option value="8+">8.0 & above</option>
                      <option value="7+">7.0 - 7.9</option>
                      <option value="6+">6.0 - 6.9</option>
                    </Form.Select>
                  </Form.Group>

                  <Form.Group className="mb-4">
                    <Form.Label>Release Year</Form.Label>
                    <Row>
                      <Col>
                        <Form.Select
                          value={filterState.releaseFrom}
                          onChange={(e) => setFilterState({ ...filterState, releaseFrom: e.target.value })}
                        >
                          <option value="">From</option>
                          <option value="2020">2020</option>
                          <option value="2010">2010</option>
                        </Form.Select>
                      </Col>
                      <Col>
                        <Form.Select
                          value={filterState.releaseTo}
                          onChange={(e) => setFilterState({ ...filterState, releaseTo: e.target.value })}
                        >
                          <option value="">To</option>
                          <option value="2025">2025</option>
                          <option value="2015">2015</option>
                        </Form.Select>
                      </Col>
                    </Row>
                  </Form.Group>

                  <Button type="submit" className="btn-submit w-100 py-2">
                    APPLY FILTER
                  </Button>
                </Form>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

// --- App Export ---
export default function App() {
  return (
    <div style={{ fontFamily: 'Inter, sans-serif' }}>
      <MovieGridPage />
      <Footer />
    </div>
  );
}
