import React, { useState } from 'react';
import { Container, Row, Col, Card, Nav, Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Styles/Common.css';
import { useNavigate } from 'react-router-dom';

function MovieItem() {
  // ✅ Movies by language (correct syntax)
  const moviesByLang = {
    ENGLISH: [
      { id: 'hobbit', title: 'HOBBIT', image: '/Images/hobbit.png', link: '../Pages/Movies.jsx' },
      { id: 'back_to_the_future', title: 'BACK TO THE FUTURE', image: '/Images/back-to-the-future.png', link: 'https://youtu.be/77vRyWNqZjM' },
      { id: 'jurassic_park', title: 'JURASSIC PARK', image: '/Images/jurassic_park.png' },
      { id: 'pulse', title: 'PULSE', image: '/Images/pulse.png' },
      { id: 'sicario', title: 'SICARIO', image: '/Images/sicario.png' },
      { id: 'star_wars', title: 'STAR WARS', image: '/Images/star_wars.png' },
      { id: 'hobbit2', title: 'HOBBIT', image: '/Images/hobbit.png' },
      { id: 'back_to_the_future2', title: 'BACK TO THE FUTURE', image: '/Images/back-to-the-future.png' },
      { id: 'jurassic_park2', title: 'JURASSIC PARK', image: '/Images/jurassic_park.png' },
      { id: 'pulse2', title: 'PULSE', image: '/Images/pulse.png' },
      { id: 'sicario2', title: 'SICARIO', image: '/Images/sicario.png' },
      { id: 'star_wars2', title: 'STAR WARS', image: '/Images/star_wars.png' },
    ],

    HINDI: [
      { id: '12th_fail', title: '12TH FAIL', image: '/Images/12th_fail.png' },
      { id: 'chhaava', title: 'CHHAAVA', image: '/Images/chhaava (1).png' },
      { id: 'jaat', title: 'JAAT', image: '/Images/jaat.png' },
      { id: 'the_diplomat', title: 'THE DIPLOMAT', image: '/Images/the_diplomat.png' },
    ],

    TELUGU: [
      { id: 'court', title: 'COURT', image: '/Images/court.png' },
      { id: 'pushpa2', title: 'PUSHPA2', image: '/Images/pushp2.png' },
      { id: 'kalki', title: 'KALKI', image: '/Images/kalki.png' },
      { id: 'salaar', title: 'SALAAR', image: '/Images/salaar.png' },
    ],

    TAMIL: [
      { id: 'indian2', title: 'INDIAN2', image: '/Images/barateeyudu_2.png' },
      { id: 'good_bad_ugly', title: 'GOOD BAD UGLY', image: '/Images/good_bad_ugly.png' },
      { id: 'dragon', title: 'DRAGON', image: '/Images/dragon.png' },
      { id: 'maharaja', title: 'MAHARAJA', image: '/Images/maharaja.png' },
    ],

    MALAYALAM: [
      { id: 'manjummul_boys', title: 'MANJUMMUL BOYS', image: '/Images/manjummul_boys.png' },
      { id: '2018', title: '2018', image: '/Images/2018 (1).png' },
      { id: 'ponman', title: 'PONMAN', image: '/Images/ponman.png' },
      { id: 'rekha_chithram', title: 'REKHA CHITHRAM', image: '/Images/rekhachithram.png' },
    ],
  };

  // Active language tab
  const [activeLang, setActiveLang] = useState('ENGLISH');

  // Helper to chunk movies into groups of 6
  const chunkArray = (array, size) => {
    const chunkedArr = [];
    for (let i = 0; i < array.length; i += size) {
      chunkedArr.push(array.slice(i, i + size));
    }
    return chunkedArr;
  };

  const navigate = useNavigate();
  const movieGroups = chunkArray(moviesByLang[activeLang] || [], 6);

  return (
    <>
      <div className="bg-black py-4">
        <div className="movies-container bg-dark py-4">
          <Container fluid>
            <div className="d-flex justify-content-between align-items-center mt-2">
              <h2 className="text-white">MOVIES</h2>
              <span className="text-white view-all">VIEW ALL &gt;</span>
            </div>

            {/* Language Tabs */}
            <Nav
              variant="tabs"
              activeKey={activeLang}
              onSelect={(selectedKey) => setActiveLang(selectedKey)}
              className="movie-langs mt-3"
            >
              {Object.keys(moviesByLang).map((lang) => (
                <Nav.Item key={lang}>
                  <Nav.Link eventKey={lang} className="text-orange">
                    {lang}
                  </Nav.Link>
                </Nav.Item>
              ))}
            </Nav>

            {/* Carousel */}
            <Carousel
              interval={null}
              indicators={false}
              nextIcon={<span aria-hidden="true" className="carousel-control-next-icon" />}
              prevIcon={<span aria-hidden="true" className="carousel-control-prev-icon" />}
              className="mt-3"
            >
              {movieGroups.map((group, index) => (
                <Carousel.Item key={index}>
                  <Row className="justify-content-center">
                    {group.map((movie) => (
                      <Col
                        xs={6}
                        sm={4}
                        md={3}
                        lg={2}
                        key={movie.id}
                        className="mb-4 d-flex justify-content-center"
                      >
                        <Card
                          className="movie-card bg-dark text-white border-0 position-relative"
                          style={{ cursor: 'pointer' }}
                          onClick={() => navigate(`/movie/${movie.id}`, { state: { movie } })}
                        >
                          <Card.Img variant="top" src={movie.image} alt={`${movie.title} poster`} />
                          <div className="hover-overlay">
                            <button className="read-more">Read More</button>
                          </div>
                          <Card.Body className="p-0 mt-2 text-center">
                            <Card.Title className="movie-title">{movie.title}</Card.Title>
                          </Card.Body>
                        </Card>
                      </Col>
                    ))}
                  </Row>
                </Carousel.Item>
              ))}
            </Carousel>
          </Container>
        </div>
      </div>

      <style>
        {`
          .movie-hover-card {
            overflow: hidden;
          }

          .hover-overlay {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.5);
            display: flex;
            align-items: center;
            justify-content: center;
            opacity: 0;
            transition: opacity 0.3s ease;
          }

          .movie-card:hover .hover-overlay {
            opacity: 1;
          }

          .read-more {
            background-color: #2066bc;
            color: white;
            border: none;
            padding: 8px 16px;
            text-transform: uppercase;
            font-weight: bold;
            cursor: pointer;
            border-radius: 4px;
            transition: background-color 0.3s ease;
          }

          .read-more:hover {
            background-color: #154a8a;
          }
        `}
      </style>
    </>
  );
}

export default MovieItem;
