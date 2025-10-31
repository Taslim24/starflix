

import React from 'react'
import { Carousel, Container, Row, Col, Button, Badge } from "react-bootstrap";
import { FaPlay, FaHeart, FaShareAlt, FaStar } from "react-icons/fa";

import '../Styles/Common.css'
// import HeaderPage from '../Component/HeaderPage.jsx';


function MovieCarousel() {
    const movies = [
        {
            title: "WARFARE",
            description:
                "Written and directed by Iraq War veteran Ray Mendoza and Alex Garland (Civil War, 28 Days Later), Warfare embeds audiences with a platoon of American Navy SEALs on a surveillance mission gone wrong in insurgent territory. A visceral, boots-on-the-ground story of modern warfare and brotherhood, told like never before: in real-time and based on the memory of the people who lived it.",
            tags: ["Drama", "Action", "War"],
            rating: "8.4/10",
            runtime: "1h 38mins",
            certificate: "A",
            poster: "Images/warfare.jpg ",
        },
        {
            title: "CHHAAVA",
            description:
                "After Chhatrapati Shivaji Maharaj's death, the Mughals aim to expand into the Deccan, only to face his fearless son, Chhatrapati Sambhaji Maharaj. Chhaava, inspired by Shivaji Sawant's novel, chronicles Chhatrapati Sambhaji Maharaj's unwavering resistance against Aurangzeb, marked by courage, strategy, and betrayal.",
            tags: ["DRAMA", "Action", "HISTORICAL"],
            rating: "9.2/10",
            runtime: "2h 41mins",
            certificate: "UA",
            poster: "Images/chhaava.png",
        },
        {
            title: "MAD SQUARE",
            description:
                "Mad Square is a Telugu movie starring Narne Nithin, Sangeeth Shobhan, Ram Nithin and Priyanka Jawalkar in prominent roles. It is written and directed by Kalyan Shankar.",
            tags: ["Drama", "COMEDY"],
            rating: "8.4/10",
            runtime: "2h 7mins",
            certificate: "UA",
            poster: "Images/mad-square.png",
        },
    ];

    return (
        <div className='mx-25% vh-100 ' style={{ backgroundImage: "url('images/background.png')" }}>
            <Carousel indicators={false}>
                {movies.map((movie, index) => (
                    <Carousel.Item key={index}>
                        <Container fluid className="text-white d-sm-flex w-75 p-3 mt-5"  >
                            <Row className="align-items-center">

                                <Col md={8} className="px-5">

                                    <div className="mb-2">
                                        {movie.tags.map((tag, i) => (
                                            <Badge
                                                key={i}
                                                bg={i === 0 ? "primary" : i === 1 ? "warning" : "danger"}
                                                text={i === 1 ? "dark" : "light"}
                                                className="me-2"
                                            >
                                                {tag}
                                            </Badge>
                                        ))}
                                    </div>


                                    <h1 className="">{movie.title}</h1>


                                    <p className=" ">{movie.description}</p>


                                    <div className="d-flex flex-row mb-3">
                                        <Button className='bg-blue border-0  d-flex align-items-center gap-2'>
                                            <FaPlay /> Watch Trailer
                                        </Button>
                                        <Button className='bg-blue border-0  d-flex align-items-center gap-2'>
                                            <FaHeart /> Add to Favorite
                                        </Button>
                                        <Button className='bg-blue border-0  d-flex align-items-center gap-2'>
                                            <FaShareAlt /> Share
                                        </Button>
                                    </div>


                                    <div className="mb-3">
                                        <span className="me-2 text-warning">
                                            <FaStar /> {movie.rating}
                                        </span>
                                        <span className="me-2">• Run Time: {movie.runtime}</span>
                                        <span>• {movie.certificate}</span>
                                    </div>


                                    <Button variant="info" size="lg" className="fw-bold rounded-pill" href="/rating/id:" >
                                        
                                        More Detail
                                    </Button>
                                </Col>


                                <Col md={4} className="text-center">
                                    <img src={movie.poster} alt={`${movie.title} Poster`} className="img-fluid rounded-4 shadow" />
                                </Col>
                                
                            


                            </Row>
                        </Container>
                    </Carousel.Item>
                ))}
            </Carousel>



        </div>
    )
}

export default MovieCarousel;