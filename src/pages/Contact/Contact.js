import React from 'react';
import { Button, Col, Jumbotron, Row } from 'react-bootstrap';


import './Contact.css';

const Contact = () => {
    return (
        <div id="contact">
            <h1 className="pt-3 text-center font-details-b pb-3">CONTACT ME</h1>
            <Jumbotron className="contact-jumbotron">
                <Row>
                    <Col className="d-flex justify-content-center flex-wrap">
                        <div className="m-2 mx-3">
                            <a href="kartikmahato1996@gmail.com" target="_blank" rel="noopener noreferrer">
                                <Button variant="outline-danger" title="kartikmahato1996@gmail.com">
                                    <i className="fas fa-envelope-square"></i> Email Me
                                </Button>
                            </a>
                        </div>
                        <div className="m-2 mx-3">
                            <a href="https://www.linkedin.com/in/kartik-mahato-455120197/" target="_blank" rel="noopener noreferrer">
                                <Button variant="outline-primary" title="Visit my LinkenIn">
                                    <i className="fab fa-linkedin"></i> LinkedIn
                                </Button>
                            </a>
                        </div>

                        <div className="m-2 mx-3">
                            <a href="https://github.com/Kartik-Mahato" target="_blank" rel="noopener noreferrer">
                                <Button variant="outline-dark" title="My other projects">
                                    <i className="fab fa-github-square"></i> GitHub
                                </Button>
                            </a>
                        </div>
                        <div className="m-2 mx-3">
                            <a href="https://www.facebook.com/kartik.mahato.56" target="_blank" rel="noopener noreferrer">
                                <Button variant="outline-primary" title="Say hello on FB">
                                    <i className="fab fa-facebook-square"></i> FaceBook
                                </Button>
                            </a>
                        </div>
                    </Col>
                </Row>
            </Jumbotron>
        </div>
    )
}

export default Contact
