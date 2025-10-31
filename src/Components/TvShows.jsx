import React from 'react'
import { Container, Row, Col, Card, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel, Button, Badge } from "react-bootstrap";
import '../Styles/Common.css';



function TvShows() {
    const shows = [
        { title: 'BIG BOSS', image: '/Images/bigboss.png' },
        { title: 'KOFFEE WITH KARUN', image: '/Images/koffee-with-karan.png' },
        { title: 'ISHMART JODI', image: '/Images/ishmart_jodi.png' },
        { title: 'SHERLOCK', image: '/Images/sherlock.png' },
        { title: 'DANCE+', image: '/Images/dance.png' },
        { title: 'SUPERSINGER JUNIOR', image: '/Images/supersinger_junior.png' },
        { title: 'BIGBOSS', image: '/Images/bigboss.png' },
        { title: 'KOFFEE WITH KARUN', image: '/Images/offee-with-karan.png' },
        { title: 'ISHMART', image: '/Images/ishmart_jodi.png' },
        { title: 'SHERLOCK', image: '/Images/sherlock.png' },
        { title: 'DANCE+', image: '/Images/dance.png' },
        { title: 'SUPERSINGER JUNIOR', image: '/supersinger_junior.png' },
    ];


    // Helper function to chunk the movies into groups for each carousel slide
    const chunkArray = (array, size) => {
        const chunkedArr = [];
        for (let i = 0; i < array.length; i += size) {
            chunkedArr.push(array.slice(i, i + size));
        }
        return chunkedArr;
    };


    // Group movies into rows of 6 cards each
    const movieGroups = chunkArray(shows, 6);
    return (
        <div className="bg-black ">
            <div className="movies-container bg-dark ">
                <Container fluid>
                    <div className="d-flex justify-content-between align-items-center ">
                        <h2 className="text-white">POPULAR TV SHOWS</h2>
                        <span className="text-white view-all">VIEW ALL &gt;</span>
                    </div>

                    
                    <Carousel
                        indicators={false}
                        nextIcon={<span aria-hidden="true" className="carousel-control-next-icon" />}
                        prevIcon={<span aria-hidden="true" className="carousel-control-prev-icon" />}
                    >
                        {movieGroups.map((group, index) => (
                            <Carousel.Item key={index}>
                                <Row className="justify-content-center">
                                    {group.map((movie, movieIndex) => (
                                        <Col xs={6} sm={4} md={3} lg={2} key={movieIndex} className="mb-4 d-flex justify-content-center">
                                            <Card className="movie-card bg-dark text-white border-0">
                                                <Card.Img
                                                    variant="top"
                                                    src={movie.image}
                                                    alt={`${movie.title} poster`}
                                                />
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



    )
}



export default TvShows