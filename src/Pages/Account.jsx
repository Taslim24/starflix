import React, { useRef } from "react";
import {Container,Row,Col,Card,Image,Button,Form,Nav} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "../Components/Footer";
import {  scrollToTop } from "react-bootstrap";



function Profile() {
    const profileDetailsRef = useRef(null);
    const changePasswordRef = useRef(null);

   
    const scrollToSection = (ref) => {
        if (ref.current) {
            ref.current.scrollIntoView({ behavior: "smooth" });
        }
    };
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };


    const handleLogout = () => {
        // Replace with your logout logic or redirect
        window.location.href = "/";
    };
    

    return (
        <>
            
            <div
                style={{
                    backgroundColor: "#0b0c10",
                    minHeight: "100vh",
                    paddingTop: "50px",
                    color: "#fff",
                }}
            >
                {/* Added style to make all form labels white */}
                <style type="text/css">
                    {`
          label, .form-label {
            color: white !important;
          }
        `}
                </style>

                <Container fluid>
                    <Row className="justify-content-center">
                        {/* Sidebar */}
                        <Col md={3} className="mb-4">
                            <Card
                                style={{ backgroundColor: "#1c2b3a", border: "1px solid #2c3e50" }}
                            >
                                <Card.Body className="text-center">
                                    <Image
                                        src="Images/digit.logo.png"
                                        roundedCircle
                                        width={100}
                                        height={100}
                                        alt="avatar"
                                        style={{ display: "block", margin: "0 auto" }}
                                    />
                                    <Button
                                        variant="info"
                                        className="mt-3"
                                        style={{ fontWeight: "bold" }}
                                    >
                                        CHANGE AVATAR
                                    </Button>
                                </Card.Body>
                                <Nav className="flex-column px-3 pb-3">
                                    <Nav.Link
                                        style={{ color: "#facc15", fontWeight: "bold", cursor: "pointer" }}
                                        onClick={() => scrollToSection(profileDetailsRef)}
                                    >
                                        PROFILE
                                    </Nav.Link>
                                    <Nav.Link
                                        style={{ color: "#fff", cursor: "pointer" }}
                                        onClick={() => scrollToSection(changePasswordRef)}
                                    >
                                        CHANGE PASSWORD
                                    </Nav.Link>
                                    <Nav.Link
                                        style={{ color: "#fff", cursor: "pointer" }}
                                        onClick={handleLogout}
                                    >
                                        LOG OUT
                                    </Nav.Link>
                                </Nav>
                            </Card>
                        </Col>

                        {/* Main content */}
                        <Col md={7}>
                            <Container
                                style={{
                                    marginBottom: "20px",
                                    paddingLeft: 0,
                                    paddingRight: 0,
                                }}
                                fluid
                            >
                                <h3 style={{ fontWeight: "bold" }}>DIGIT IT PROFILE</h3>
                                <p style={{ marginBottom: "100px", color: "#fff" }}>
                                    HOME &gt; PROFILE
                                </p>
                            </Container>

                            {/* Profile Form */}
                            <Card
                                style={{ backgroundColor: "#1c2b3a", border: "1px solid #2c3e50" }}
                            >
                                <Card.Body>
                                    {/* Profile Details */}
                                    <div ref={profileDetailsRef}>
                                        <h6 className="mt-4 mb-3" style={{ fontWeight: 600, color: "#fff" }}>
                                            01. PROFILE DETAILS
                                        </h6>
                                        <Form>
                                            <Row>
                                                <Col md={6}>
                                                    <Form.Group className="mb-3">
                                                        <Form.Label>Username</Form.Label>
                                                        <Form.Control
                                                            type="text"
                                                            defaultValue="DIGITIT"
                                                            style={{
                                                                backgroundColor: "#34495e",
                                                                color: "#fff",
                                                                border: "none",
                                                            }}
                                                        />
                                                    </Form.Group>
                                                    <Form.Group className="mb-3">
                                                        <Form.Label>First Name</Form.Label>
                                                        <Form.Control
                                                            type="text"
                                                            defaultValue="DIGIT"
                                                            style={{
                                                                backgroundColor: "#34495e",
                                                                color: "#fff",
                                                                border: "none",
                                                            }}
                                                        />
                                                    </Form.Group>
                                                    <Form.Group className="mb-3">
                                                        <Form.Label>Country</Form.Label>
                                                        <Form.Control
                                                            type="text"
                                                            defaultValue="India"
                                                            style={{
                                                                backgroundColor: "#34495e",
                                                                color: "#fff",
                                                                border: "none",
                                                            }}
                                                        />
                                                    </Form.Group>
                                                </Col>
                                                <Col md={6}>
                                                    <Form.Group className="mb-3">
                                                        <Form.Label>Email Address</Form.Label>
                                                        <Form.Control
                                                            type="email"
                                                            defaultValue="test@digit.com"
                                                            style={{
                                                                backgroundColor: "#34495e",
                                                                color: "#fff",
                                                                border: "none",
                                                            }}
                                                        />
                                                    </Form.Group>
                                                    <Form.Group className="mb-3">
                                                        <Form.Label>Last Name</Form.Label>
                                                        <Form.Control
                                                            type="text"
                                                            defaultValue="IT"
                                                            style={{
                                                                backgroundColor: "#34495e",
                                                                color: "#fff",
                                                                border: "none",
                                                            }}
                                                        />
                                                    </Form.Group>
                                                    <Form.Group className="mb-3">
                                                        <Form.Label>State</Form.Label>
                                                        <Form.Control
                                                            type="text"
                                                            defaultValue="Telangana"
                                                            style={{
                                                                backgroundColor: "#34495e",
                                                                color: "#fff",
                                                                border: "none",
                                                            }}
                                                        />
                                                    </Form.Group>
                                                </Col>
                                            </Row>
                                            <Button variant="info" className="px-4 mt-2">
                                                SAVE
                                            </Button>
                                        </Form>
                                    </div>

                                    {/* Divider */}
                                    <hr style={{ backgroundColor: "#2a2a2a", margin: "30px 0" }} />

                                    {/* Change Password Section */}
                                    <div ref={changePasswordRef}>
                                        <h6 className="mb-3" style={{ fontWeight: 600, color: "#fff" }}>
                                            02. CHANGE PASSWORD
                                        </h6>
                                        <Form>
                                            <Form.Group className="mb-3">
                                                <Form.Label>Old Password</Form.Label>
                                                <Form.Control
                                                    type="password"
                                                    placeholder=""
                                                    style={{
                                                        backgroundColor: "#34495e",
                                                        color: "#fff",
                                                        border: "none",
                                                    }}
                                                />
                                            </Form.Group>
                                            <Form.Group className="mb-3">
                                                <Form.Label>New Password</Form.Label>
                                                <Form.Control
                                                    type="password"
                                                    placeholder=""
                                                    style={{
                                                        backgroundColor: "#34495e",
                                                        color: "#fff",
                                                        border: "none",
                                                    }}
                                                />
                                            </Form.Group>
                                            <Form.Group className="mb-3">
                                                <Form.Label>Confirm New Password</Form.Label>
                                                <Form.Control
                                                    type="password"
                                                    placeholder=""
                                                    style={{
                                                        backgroundColor: "#34495e",
                                                        color: "#fff",
                                                        border: "none",
                                                    }}
                                                />
                                            </Form.Group>
                                            <Button variant="info" className="px-4">
                                                CHANGE
                                            </Button>
                                        </Form>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
            {/* ✅ Move footer inside the return */}
            <footer
                style={{
                    backgroundColor: "#0b1622",
                    color: "#ccc",
                    padding: "15px 40px",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    fontSize: "14px",
                    borderTop: "1px solid #1a2a3a",
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
                        transition: "color 0.2s",
                    }}
                    onMouseOver={(e) => (e.target.style.color = "white")}
                    onMouseOut={(e) => (e.target.style.color = "#00AEEF")}
                >
                    Back to top ↑
                </button>
            </footer>
        </>
    );
}

export default Profile;

