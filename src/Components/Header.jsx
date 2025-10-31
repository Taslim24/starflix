import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Nav, Offcanvas, Dropdown } from 'react-bootstrap'

function Header() {
    const expand = 'sm';

    return (
        <div>
            <Navbar
                key={expand}
                expand={expand}
                className="bg-black w-100 position-fixed z-3"
                sticky="top"
            >
                <Container fluid>

                    <Navbar.Brand href="#home" className="d-flex align-items-center">
                        <span style={{ color: 'gold', fontSize: '24px', marginRight: '5px' }}>★</span>
                        <span style={{ color: '#00AEEF', fontWeight: 'bold' }}>Star</span>
                        <span style={{ color: '#F9A825', fontWeight: 'bold' }}>Flix</span>
                    </Navbar.Brand>


                    <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end w-100">
                        <Nav className="align-items-center">
                            <Nav.Link href="/home" className="fw-bold text-white me-3">HOME</Nav.Link>
                            <Nav.Link href="/movies" className="fw-bold text-white me-3">MOVIES</Nav.Link>
                            <Nav.Link href="/tvshow" className="fw-bold text-white me-3">TV SHOWS</Nav.Link>
                            <Nav.Link href="/Newpopular" className="fw-bold text-white me-3">NEW & POPULAR</Nav.Link>
                           


                            <Dropdown align="end">
                                <Dropdown.Toggle
                                    as="a"
                                    id="profile-dropdown-toggle"
                                    className="nav-link p-0"
                                    style={{ cursor: 'pointer', backgroundColor: 'transparent', border: 'none' }}
                                >
                                    <img
                                        src="Images/digit.logo.png"
                                        alt="Profile"
                                        style={{
                                            width: '35px',
                                            height: '35px',
                                            borderRadius: '50%',
                                            backgroundColor: '#fff',
                                            padding: '5px',
                                        }}
                                    />
                                </Dropdown.Toggle>

                                <Dropdown.Menu className="bg-dark p-0" style={{ border: '1px solid #333', minWidth: '200px' }}>
                                    <Dropdown.Item
                                        href="#digitit"
                                        className="text-white py-3"
                                        style={{ backgroundColor: 'transparent', borderBottom: '1px solid #333' }}
                                        active={false}
                                    >
                                        <strong>DIGIT IT</strong>
                                    </Dropdown.Item>
                                    <Dropdown.Item
                                        href="/Account"
                                        className="text-white py-3"
                                        style={{ backgroundColor: 'transparent', borderBottom: '1px solid #333' }}
                                        active={false}
                                    >
                                        <strong>ACCOUNT</strong>
                                    </Dropdown.Item>
                                    <Dropdown.Item
                                        href="/"
                                        className="text-white py-3"
                                        style={{ backgroundColor: 'transparent' }}
                                        active={false}
                                    >
                                        <strong className="d-flex align-items-center">
                                            <span className="me-2" style={{ fontSize: '1.2em' }}>⟲</span>
                                            SIGN OUT OF STARFLIX
                                        </strong>
                                    </Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </Nav>
                    </Navbar.Collapse>

                    {/* Toggle button for Offcanvas */}
                    <Navbar.Toggle aria-controls={`offcanvasNavbar - expand - ${expand}`} className="ms-3" />

                    {/* Offcanvas menu for small screens */}
                    <Navbar.Offcanvas
                        id={`offcanvasNavbar - expand - ${expand}`}
                        aria-labelledby={`offcanvasNavbarLabel - expand - ${expand}`}
                        placement="end"
                        className="bg-dark text-white"
                    >
                        <Offcanvas.Header closeButton className="border-bottom border-secondary c-white">
                            <Offcanvas.Title id={`offcanvasNavbarLabel - expand - ${expand}`} className="text-white">
                                Menu
                            </Offcanvas.Title>
                        </Offcanvas.Header>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar >

        </div >
    )
}

export default Header

