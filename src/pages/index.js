import React, { useState } from 'react';
import HeroSection from '../components/HeroSection/HeroSection';
import MyNavbar from '../components/Navbar/MyNavbar';
import Sidebar from '../components/Sidebar/Sidebar'
import About from './About/About';
import Skills from './Skills/Skills';
import Contact from './Contact/Contact';
import Timeline from './Timeline/Timeline';
import Footer from './Footer/Footer';
import Fade from 'react-reveal/Fade';

const Home = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    }
    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <MyNavbar toggle={toggle} />
            <HeroSection />
            <Fade bottom big>
                <About />
                <hr />
                <Skills />
                <hr />
                <Timeline />
                <hr />
                <Contact />
                <hr />
                <Footer />
            </Fade>
        </>
    )
}

export default Home
