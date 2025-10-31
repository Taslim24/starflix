
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Nav, Offcanvas, Row, Col, Button, Tabs, Tab } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
import { FaHeart, FaShareAlt, FaStar } from 'react-icons/fa';

// Helper component for displaying cast/crew member details
const CrewMemberItem = ({ initials, name, role, asCharacter }) => (
    <div className="d-flex align-items-center mb-3">
        {/* Avatar with Initials */}
        <div
            className="rounded-circle d-flex justify-content-center align-items-center me-3"
            style={{ width: '40px', height: '40px', backgroundColor: '#00AEEF', color: 'white', fontWeight: 'bold', fontSize: '0.9rem' }}
        >
            {initials}
        </div>

        {/* Name and Role */}
        <div>
            <p className="mb-0 fw-bold text-white">{name}</p>
            <p className="mb-0 text-muted" style={{ fontSize: '0.9rem' }}>
                {asCharacter ? `as ${asCharacter}` : role}
            </p>
        </div>
    </div>
);

function HeaderPages() {
    const expand = 'sm';
    const location = useLocation();
    const { movie } = location.state || {}; // movie object passed
    const [activeTab, setActiveTab] = useState('overview'); // State for controlling the active tab

    // --- NEW: Detailed Cast and Crew Data Structure ---
    const castAndCrewData = {
        director: [
            { initials: 'LU', name: 'Laxman Utekar', role: 'Director' }
        ],
        cast: [
            { initials: 'VK', name: 'Vicky Kaushal', asCharacter: 'Chhatrapati Sambhaji Maharaj' },
            { initials: 'RM', name: 'Rashmika Mandanna', asCharacter: 'Yesubai Bhonsale' },
            { initials: 'AK', name: 'Akshaye Khanna', asCharacter: 'Aurangzeb' }
        ],
        music: [
            { initials: 'AR', name: 'A. R. Rahman', role: 'Musician' }
        ],
        producer: [
            { initials: 'DV', name: 'Dinesh Vijan', role: 'Producer' }
        ]
    };

    // Placeholder data based on the images
    const movieData = {
        title: movie?.title || 'Chhaava',
        image: movie?.image || '/path/to/default/poster.jpg',
        link: movie?.link,
        rating: '9.2/10',
        reviewCount: '10K Reviews',
        movieRatingStars: 5,
        description: "After Chhatrapati Shivaji Maharaj's death, the Mughals aim to expand into the Deccan, only to face his fearless son, Chhatrapati Sambhaji Maharaj. Chhaava, inspired by Shivaji Sawant's novel, chronicles Chhatrapati Sambhaji Maharaj's unwavering resistance against Aurangzeb, marked by courage, strategy, and betrayal.",
        director: castAndCrewData.director.map(d => d.name).join(', '), // Kept for the side column
        stars: castAndCrewData.cast.map(c => c.name).join(', '), // Kept for the side column
        genres: 'Action, Drama, Historic',
        releaseDate: '14 Feb, 2025',
        runTime: '2h 41 mins',
        trailerUrl: 'https://www.youtube.com/embed/gW9w-z-mG6Q?si=7l9Oq4JpU0k32vF6', // Placeholder URL
    };

    if (!movie) return <div>No movie selected</div>;

    // Helper to render the star rating
    const renderStars = (count) => {
        let stars = [];
        for (let i = 0; i < 5; i++) {
            stars.push(
                <FaStar
                    key={i}
                    color={i < count ? 'gold' : 'grey'}
                    className="mx-1"
                />
            );
        }
        return stars;
    };

    // Helper component for metadata items (for the right column)
    const MetadataItem = ({ label, value }) => (
        <div className="mb-3">
            <h6 className="text-muted text-uppercase mb-0" style={{ fontSize: '0.8rem' }}>{label}</h6>
            <p className="text-white fw-bold mb-0">{value}</p>
        </div>
    );

    // Custom Nav link styling
    const CustomNavLink = (props) => (
        <Nav.Link
            {...props}
            className={`fw - bold text-uppercase ${props.eventKey === activeTab ? 'text-primary' : 'text-white-50'}`}
style = {{
    color: props.eventKey === activeTab ? '#00AEEF' : undefined,
        borderBottom: props.eventKey === activeTab ? '2px solid #00AEEF' : 'none',
            paddingBottom: '0.5rem',
                marginBottom: '-1px'
}}
        >
    { props.children }
        </Nav.Link >
    );

// YouTube Embed Component
const YouTubeEmbed = ({ url }) => (
    <div className="ratio ratio-16x9 mb-4">
        <iframe
            src={"https://www.youtube.com/embed/Div0iP65aZo"}
            title="Movie Trailer"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            style={{ borderRadius: '8px' }}
        ></iframe>
    </div>
);

// --- NEW: Cast and Crew Content JSX ---
const CastAndCrewContent = () => (
    <div className="mt-4 text-white">
        <h5 className="fw-bold mb-3 text-uppercase">Director & Writer</h5>
        {castAndCrewData.director.map((member, index) => (
            <CrewMemberItem key={index} {...member} />
        ))}

        <h5 className="fw-bold mb-3 mt-4 text-uppercase">Cast</h5>
        {castAndCrewData.cast.map((member, index) => (
            <CrewMemberItem key={index} {...member} />
        ))}

        {/* Added Musician based on the image */}
        <h5 className="fw-bold mb-3 mt-4 text-uppercase">Music</h5>
        {castAndCrewData.music.map((member, index) => (
            <CrewMemberItem key={index} {...member} />
        ))}

        <h5 className="fw-bold mb-3 mt-4 text-uppercase">Produced By</h5>
        {castAndCrewData.producer.map((member, index) => (
            <CrewMemberItem key={index} {...member} />
        ))}
    </div>
);

return (
    <div className=' w-100 bg-none z-3 h-100%' style={{ backgroundImage: "url('/Images/background.png')", minHeight: '100vh', backgroundSize: 'cover' }}>

        {/* Navbar (Kept As Is) */}
        <Navbar key={expand} expand={expand} className="bg-black navbar-dark" sticky="top">
            <Container fluid>
                <Navbar.Brand className="d-flex align-items-center">
                    <span style={{ color: 'gold', fontSize: '24px', marginRight: '5px' }}>★</span>
                    <span style={{ color: '#00AEEF', fontWeight: 'bold' }}>Star</span>
                    <span style={{ color: '#F9A825', fontWeight: 'bold' }}>Flix</span>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls={`offcanvasNavbar - expand - ${expand}`} />
                <Navbar.Offcanvas
                    id={`offcanvasNavbar - expand - ${expand}`}
                aria-labelledby={`offcanvasNavbarLabel - expand - ${expand}`}
                placement="end"
                    >
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title id={`offcanvasNavbarLabel - expand - ${expand}`}>Menu</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>`
                <Nav className="justify-content-end flex-grow-1 pe-3">
                    <Nav.Link href="/home" className="fw-bold text-white">HOME</Nav.Link>
                    <Nav.Link href="/movies" className="fw-bold text-white">MOVIES</Nav.Link>
                    <Nav.Link href="/tvshows" className="fw-bold text-white">TV SHOWS</Nav.Link>
                    <Nav.Link href="/Newpopular" className="fw-bold text-white">NEW & POPULAR</Nav.Link>
                    <Nav.Link className="ms-3">
                        <img
                            src="/Images/digit_icon.png"
                            alt="Profile"
                            style={{ width: '35px', height: '35px', borderRadius: '50%', backgroundColor: 'white', padding: '5px' }}
                        />
                    </Nav.Link>
                </Nav>
            </Offcanvas.Body>
        </Navbar.Offcanvas>
    </Container>
            </Navbar >

    {/* Search Bar (Kept As Is) */ }
    <div div className = "search-bar d-flex justify-content-center align-items-center py-3 px-4 bg-black bg-opacity-75" >
                <select className="form-select w-auto me-2 text-white" style={{ backgroundColor: '#212529', borderColor: '#495057' }}>
                    <option className="bg-dark">TV SHOW</option>
                    <option className="bg-dark">MOVIE</option>
                </select>
                <input
                    type="text"
                    className="form-control"
                    placeholder="Search for a movie, TV Show or celebrity that you are looking for"
                    style={{ background: 'transparent', color: 'white', borderColor: '#495057' }}
                />
                <Button variant="outline-light" className="ms-2 border-0">🔍</Button>
            </div>

    {/* Main Content: Three-Column Layout */ }
    <Container Container className = "py-5 " >
        <Row className="text-white">

            {/* === Column 1: Poster and Trailer Button (3/12 width) === */}
            <Col xs={12} lg={3} className="mb-4 mb-lg-0 d-flex flex-column align-items-center align-items-lg-start">
                <img
                    src={movieData.image}
                    alt={movieData.title}
                    className="img-fluid rounded shadow"
                    style={{ maxWidth: '300px', width: '100%', aspectRatio: '2/3', objectFit: 'cover' }}
                />
                <div className="d-flex flex-column gap-3 mt-3">
                    <Button variant="info" size="lg" className="fw-bold w-100">
                        More Detail
                    </Button>
                    <Button variant="warning" size="lg" className="fw-bold w-100">
                        Buy Ticket
                    </Button>
                </div>
            </Col>

            {/* === Column 2: Details, Rating, Tabs, and Synopsis (5/12 width) === */}
            <Col xs={12} lg={9} className="mb-4 mb-lg-0 ">
                <h1 className="fw-bold display-4">{movieData.title}</h1>

                {/* Action Buttons */}
                <div className="d-flex align-items-center my-3">
                    <Button variant="dark" className="me-3 p-2 border border-secondary text-white-50">
                        <FaHeart className="me-2 text-danger" /> ADD TO FAVORITE
                    </Button>
                    <Button variant="dark" className="p-2 border border-secondary text-white-50">
                        <FaShareAlt className="me-2" /> SHARE
                    </Button>
                </div>

                {/* Rating Section */}
                <div className="d-flex align-items-center my-4">
                    <div className="me-4 text-center">
                        <h3 className="mb-0 fw-bold" style={{ color: '#00AEEF' }}>{movieData.rating}</h3>
                        <small className="text-muted">{movieData.reviewCount}</small>
                    </div>
                    <div className="d-flex align-items-center">
                        <span className="me-2 fw-bold text-nowrap">Movie Rating:</span>
                        {renderStars(movieData.movieRatingStars)}
                    </div>
                </div>

                {/* Navigation Tabs */}
                <div className='bg-black w-75'>
                    <Tabs
                        activeKey={activeTab}
                        onSelect={(k) => setActiveTab(k)}
                        className="mb-4 border-bottom border-secondary"
                        id="movie-details-tabs"
                        mountOnEnter
                        unmountOnExit
                    >
                        <Tab eventKey="overview" title={<CustomNavLink eventKey="overview">OVERVIEW</CustomNavLink>}>
                            {/* YouTube Trailer Embed */}
                            {movieData.trailerUrl && <YouTubeEmbed url={movieData.trailerUrl} />}

                            {/* Tab 1 Content: Synopsis/Description */}
                            <div className="mt-4">
                                <p className="text-white-75 " style={{ lineHeight: '1.8' }}>
                                    {movieData.description}
                                </p>
                            </div>
                        </Tab>

                        <Tab eventKey="cast" title={<CustomNavLink eventKey="cast">CAST & CREW</CustomNavLink>}>
                            {/* --- UPDATED: Cast & Crew Content using the dedicated component --- */}
                            <CastAndCrewContent />
                        </Tab>

                        <Tab eventKey="reviews" title={<CustomNavLink eventKey="reviews">REVIEWS</CustomNavLink>}>
                            {/* Tab 3 Content: Reviews - Placeholder */}
                            <div className="mt-4 text-white-50">
                                <p>Avengers Age of Ultron is an excellent sequel and a worthy MCU title! There are a lot of good and one thing that feels off in my opinion.

                                    THE GOOD:

                                    First off the action in this movie is amazing, to buildings crumbling, to evil blue eyed robots tearing stuff up, this movie has the action perfectly handled. And with that action comes visuals. The visuals are really good, even though you can see clearly where they are through the movie, but that doesn't detract from the experience. While all the CGI glory is taking place, there are lovable characters that are in the mix. First off the original characters, Iron Man, Captain America, Thor, Hulk, Black Widow, and Hawkeye, are just as brilliant as they are always. And Joss Whedon fixed my main problem in the first Avengers by putting in more Hawkeye and him more fleshed out. Then there is the new Avengers, Quicksilver, Scarletwich, and Vision, they are pretty cool in my opinion. Vision in particular is pretty amazing in all his scenes.

                                    THE BAD:

                                    The beginning of the film it's fine until towards the second act and there is when it starts to feel a little rushed. Also I do feel like there are scenes missing but there was talk of an extended version on Blu-Ray so that's cool..</p>
                                <p>Rating: {movieData.rating}</p>
                            </div>
                        </Tab>
                    </Tabs>
                </div>

            </Col>




        </Row>
            </Container >
        </div >
    );
}

export default HeaderPages;