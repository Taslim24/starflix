import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import '../Styles/Login.css';
import '../Styles/Common.css';

const LoginPage = () => {
    const [show, setShow] = useState(false);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleSubmit = (e) => {
        e.preventDefault();

        // Simple authentication (replace with API later)
        if (username === "digit" && password === "digitit") {
            navigate('/home');
        } else {
            alert("Invalid username or password");
        }
    };

    return (
        <div className='login-page w-100 vh-100 d-flex flex-column text-center justify-content-center align-items-center' style={{ backgroundImage: "url('images/background.png')" }}>
            <img src='images/logo1.png' alt='StarFlix Logo' width='220px' />
            <div className='my-5'>
                <h2 className='text-white fs-48 fw-medium'>Unlimited streaming of</h2>
                <h2 className='text-blue fs-48 fw-bold'>movies, series, and more.</h2>
                <h2 className='text-white fs-3'>All your favorites in one place. Start watching now.</h2>
            </div>
            <Button className='bg-blue border-0 px-5 rounded-pill' onClick={handleShow}>
                Login
            </Button>

            <Modal show={show} onHide={handleClose} keyboard={false} centered>
                <Modal.Body>
                    <h2 className='text-center'>Login</h2>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="formBasicUsername">
                            <Form.Label>Username</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter Username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </Form.Group>

                        <Button className='bg-blue border-0 px-10 w-100 justify-content-center' type="submit">
                            Submit
                        </Button>
                    </Form>
                </Modal.Body>
            </Modal>
        </div>
    );
};

export default LoginPage;