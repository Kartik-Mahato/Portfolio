import React from 'react';
import Image from 'react-bootstrap/Image';
import { Timeline, Events, UrlButton, ImageEvent } from '@merc/react-timeline';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';

// projects
import instagramClone from '../../assets/img/projects/insta-clone.gif';

// skills
import L_REACT from '../../assets/img/skills/react.svg';
import L_FIREBASE from '../../assets/img/skills/firebase.svg';
import L_GITHUB from '../../assets/img/skills/github.svg';

import './Timeline.css';

const ProjectTimeline = () => {
    return (
        <div id="projects">
            <h1 className="pt-3 text-center font-details-b pb-3">PROJECTS</h1>
            <Timeline>
                <Events>
                    <ImageEvent
                        date="05/04/2021"
                        className="text-center"
                        text="Instagram Clone"
                        src={instagramClone}
                        alt="Instagram Clone"
                    >
                        <div className="d-flex justify-content-between flex-column mt-1">
                            <div>
                                <Accordion>
                                    <Card>
                                        <Accordion.Toggle
                                            as={Card.Header}
                                            eventKey="0"
                                            className="p-2 text-center accordian-main"
                                        >
                                            PROJECT DETAILS
                                        </Accordion.Toggle>

                                        <Accordion.Collapse eventKey="0" className="text-left">
                                            <Card.Body>
                                                <strong>Description:</strong> This is a Instagram Clone app.
                                                <hr />
                                                <strong>Features:</strong>
                                                <ul className="list-styles pt-1">
                                                    <li>User can register/login</li>
                                                    <li>User can check the photos of their followers</li>
                                                    <li>User can add comment</li>
                                                </ul>
                                                <hr />
                                                <strong>Tech used:</strong>
                                                <ul>
                                                    <li>
                                                        <span className="p-2">
                                                            <Image
                                                                src={L_REACT}
                                                                alt="React.js"
                                                                rounded
                                                                className="image-style m-1"
                                                            ></Image>{" "}
                                                            REACT.JS
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <span className="p-2">
                                                            <Image
                                                                src={L_FIREBASE}
                                                                alt="CSS 3"
                                                                rounded
                                                                className="image-style m-1"
                                                            ></Image>{" "}
                                                            FIREBASE
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <span className="p-2">
                                                            <Image
                                                                src={L_GITHUB}
                                                                alt="Material-UI"
                                                                rounded
                                                                className="image-style1 m-1"
                                                            ></Image>{" "}
                                                            GITHUB
                                                        </span>
                                                    </li>

                                                </ul>
                                            </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                </Accordion>
                            </div>
                            <div className="d-flex justify-content-between flex-nowrap text-center">
                                {/* <UrlButton
                                    href="http://65.0.184.178/"
                                    target="_blank"
                                >
                                    SEE LIVE
                                </UrlButton> */}
                                <UrlButton
                                    href="https://github.com/Kartik-Mahato/instagram-clone"
                                    target="_blank"
                                >
                                    SOURCE CODE
                                </UrlButton>
                            </div>
                        </div>
                    </ImageEvent>
                </Events>
            </Timeline>
        </div>
    )
}

export default ProjectTimeline
