import { img } from "framer-motion/client";
import React, { useState, useEffect } from "react";

// List of videos with title and URL
const videos = [
    {
        title: "Logan Official Trailer 1 (2017) - Hugh Jackman Movie",
        url: "https://www.youtube.com/embed/Div0iP65aZo"
    },
    {
        title: "Beauty and the Beast: Official Teaser Trailer 2",
        url: "https://www.youtube.com/embed/OvW_L8sTu5E", image: '/Images/12th_fail.png'
    },
    {
        title: "Fast & Furious 8",
        url: "https://www.youtube.com/embed/uisBaTkQAEs"
    },
    {
        title: "Wonder Woman",
        url: "https://www.youtube.com/embed/1Q8fG0TtVAY"
    },
    {
        title: "Oblivion: Official Teaser Trailer",
        url: "https://www.youtube.com/embed/dQ3Mt9yiz6k"
    }
];

function TheaterPage() {
    const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentVideoIndex((prevIndex) =>
                prevIndex === videos.length - 1 ? 0 : prevIndex + 1
            );
        }, 5000); // Change every 5 seconds

        return () => clearInterval(interval);
    }, []);

    return (
        <div style={{ display: "flex", backgroundColor: "#0B1C2C", color: "white" }}>
            <div style={{ flex: 3, margin: "10px" }}>
                <h2>IN THEATER</h2>
                <iframe
                    width="75%"
                    height="400"
                    src={videos[currentVideoIndex].url}
                    title={videos[currentVideoIndex].title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
                <p>{videos[currentVideoIndex].title}</p>
            </div>
            <div style={{ flex: 1, margin: "10px" }}>
                
                <ul style={{ listStyle: "none", padding: 0 }}>
                    {videos.map((vid, index) => (
                        <li
                            key={index}
                            onClick={() => setCurrentVideoIndex(index)}
                            style={{
                                margin: "10px 0",
                                cursor: "pointer",
                                background:
                                    index === currentVideoIndex ? "#38628cff" : "transparent",
                                padding: "5px",
                                height: "50px",
                                width: "100%",
                                textaline:"center"

                            }}
                        >
                            {vid.title}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default TheaterPage;
// import React, { useState, useEffect } from "react";
// import { Container, Row, Col, Carousel, Button } from "react-bootstrap";
// import "bootstrap/dist/css/bootstrap.min.css";

// const trailers = [
//     {
//         title: "Logan: Director James Mangold Interview",
//         time: "2:43",
//         video: "https://www.youtube.com/embed/gbug3zTm3Ws",
//         thumbnail: "Images/jaat.png",
//     },
//     {
//         title: "Beauty and the Beast: Official Teaser Trailer 2",
//         time: "2:32",
//         video: "https://www.youtube.com/embed/e3Nl_TCQXuw",
//         thumbnail: "Images/e.jpg",
//     },
//     {
//         title: "Fast & Furious 8",
//         time: "3:11",
//         video: "https://www.youtube.com/embed/uisBaTkQAEs",
//         thumbnail: "Images/o.jpg",
//     },
//     {
//         title: "Wonder Woman",
//         time: "2:30",
//         video: "https://www.youtube.com/embed/1Q8fG0TtVAY",
//         thumbnail: "Images/e.jpg",
//     },
//     {
//         title: "Oblivion: Official Teaser Trailer",
//         time: "2:45",
//         video: "https://www.youtube.com/embed/XmIIgE7eSak",
//         thumbnail: "Images/ponman.png",
//     },
// ];

// const InTheater = () => {
//     const [activeIndex, setActiveIndex] = useState(0);
//     const [playlistIndex, setPlaylistIndex] = useState(0);

//     const visibleItems = 5; // Show 3 items at a time
//     const totalSlides = Math.ceil(trailers.length / visibleItems);

//     const handlePrev = () => {
//         setPlaylistIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
//     };

//     const handleNext = () => {
//         setPlaylistIndex((prev) => (prev + 1) % totalSlides);
//     };

//     // 🔥 Auto scroll playlist every 5 seconds
//     useEffect(() => {
//         const interval = setInterval(() => {
//             setPlaylistIndex((prev) => (prev + 1) % totalSlides);
//         }, 5000);

//         return () => clearInterval(interval); // cleanup
//     }, [totalSlides]);

//     return (
//         <div
//             className="in-theater-section text-white py-5"
//             style={{ backgroundColor: "#07131f" }}
//         >
//             <Container>
//                 {/* Header */}
//                 <Row className="align-items-center mb-4">
//                     <Col md={6}>
//                         <h3 className="fw-bold text-uppercase">In Theater</h3>
//                     </Col>
//                     <Col md={6} className="text-end">
//                         <a
//                             href="/trailers"
//                             className="text-white-50 fw-semibold text-decoration-none"
//                         >
//                             View All →
//                         </a>
//                     </Col>
//                 </Row>

//                 <Row>
//                     {/* Left: Video Carousel */}
//                     <Col md={8}>
//                         <Carousel
//                             activeIndex={activeIndex}
//                             onSelect={setActiveIndex}
//                             fade
//                             interval={5000}
//                         >
//                             {trailers.map((trailer, index) => (
//                                 <Carousel.Item key={index}>
//                                     <div className="ratio ratio-16x9">
//                                         <iframe
//                                             src={trailer.video}
//                                             title={trailer.title}
//                                             allowFullScreen
//                                         />
//                                     </div>
//                                 </Carousel.Item>
//                             ))}
//                         </Carousel>
//                     </Col>

//                     {/* Right: Vertical Playlist Carousel */}
//                     <Col md={4} className="d-flex flex-column">



//                         <div style={{ flex: 1, overflow: "hidden" }}>
//                             {trailers
//                                 .slice(
//                                     playlistIndex * visibleItems,
//                                     playlistIndex * visibleItems + visibleItems
//                                 )
//                                 .map((trailer, index) => (
//                                     <div
//                                         key={index}
//                                         onClick={() =>
//                                             setActiveIndex(playlistIndex * visibleItems + index)
//                                         }
//                                         className={`d-flex align-items-center p-2 mb-2 rounded ${activeIndex === playlistIndex * visibleItems + index
//                                                 ? "bg-primary text-white"
//                                                 : "bg-dark"
//                                             }`}
//                                         style={{ cursor: "pointer" }}
//                                     >
//                                         <img
//                                             src={trailer.thumbnail}
//                                             alt={trailer.title}
//                                             style={{
//                                                 width: "80px",
//                                                 height: "50px",
//                                                 objectFit: "cover",
//                                                 borderRadius: "4px",
//                                             }}
//                                             className="me-3"
//                                         />
//                                         <div>
//                                             <div className="fw-semibold small">{trailer.title}</div>
//                                             <small className="text-muted">{trailer.time}</small>
//                                         </div>
//                                     </div>
//                                 ))}
//                         </div>





//                     </Col>
//                 </Row>
//             </Container>
//         </div>
//     );
// };

// export default InTheater;