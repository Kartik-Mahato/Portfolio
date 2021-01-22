import React from 'react';
import { Button, Col, Container, Image, Row } from 'react-bootstrap';
import Profile from '../../images/mypic.jpg';
import './About.css';

const About = () => {
    return (
        <div id="about">
            <div className="about">
                <h1 className="pt-3 text-center font-details pb-3">About Me</h1>
                <Container>
                    <Row className="pt-3 pb-5 align-items-center">
                        <Col xs={12} md={6}>
                            <Row className="justify-content-center mb-2 mr-2">
                                <Image className="profile justify-content-end" src={Profile} roundedCircle fluid />
                            </Row>
                        </Col>
                        <Col xs={12} md={6}>
                            <Row className="align-items-start p-2 my-details rounded">
                                Hi there! I am <strong>&nbsp;Kartik Mahato</strong>
                                <br />A passionate web developer, born and brought up in India. I am a Full Stack Web Developer with React.js, Express.js, Node.js, and MongoDb as my tech stack.
                                <br />
                                In 2020, I successfully completed my Engineering with specialization in 'Electronics and Communication'.
                                <br />
                                I love learning about new technologies, what problems are they solving and How can I use them to build better and scalable products.
                                <br /> <br />
                            </Row>
                            <Row>
                                <Col className="d-flex justify-content-center flex-wrap">
                                    <div>
                                        <a href="#contact">
                                            <Button className="m-2" variant="outline-primary">Let's Talk</Button>
                                        </a>
                                    </div>
                                    <div>
                                        <a href="https://drive.google.com/file/d/1MmNyn3c4mXGwQGdGn5M28wX2fl_NsaY5/view?usp=sharing">
                                            <Button className="m-2" variant="outline-success">My Resume</Button>
                                        </a>
                                    </div>
                                    <div>
                                        <a href="https://github.com/Kartik-Mahato">
                                            <Button className="m-2" variant="outline-dark">Github</Button>
                                        </a>
                                    </div>
                                    <div>
                                        <a href="https://www.linkedin.com/in/kartik-mahato-455120197/">
                                            <Button className="m-2" variant="outline-info">Linkedin</Button>
                                        </a>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    )
}

export default About
