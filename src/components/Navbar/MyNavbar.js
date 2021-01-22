import React, { useEffect, useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { MyMobileIcon, MyNav, MyNavbarContainer, MyNavbarLogo, MyNavBtn, MyNavBtnlink, MyNavItem, MyNavLinks, MyNavMenu } from './MyNavbarElements';
import { animateScroll as scroll } from 'react-scroll';

const MyNavbar = ({ toggle }) => {

    const [scrollNav, setScrollNav] = useState(false);

    const changeNav = () => {
        if (window.scrollY >= 80) {
            setScrollNav(true)
        } else {
            setScrollNav(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', changeNav);
    })

    const toggleHome = () => {
        scroll.scrollToTop();
    }

    return (
        <>
            <MyNav scrollNav={scrollNav}>
                <MyNavbarContainer>
                    <MyNavbarLogo to="/" onClick={toggleHome}>Kartik Mahato</MyNavbarLogo>
                    <MyMobileIcon onClick={toggle}>
                        <FaBars />
                    </MyMobileIcon>
                    <MyNavMenu>
                        <MyNavItem>
                            <MyNavLinks to="about" smooth={true} duration={500} spy={true} exact='true' offset={-80}>
                                About
                            </MyNavLinks>
                        </MyNavItem>
                        <MyNavItem>
                            <MyNavLinks to="skills" smooth={true} duration={500} spy={true} exact='true' offset={-80}>
                                Skills
                            </MyNavLinks>
                        </MyNavItem>
                        <MyNavItem>
                            <MyNavLinks to="projects" smooth={true} duration={500} spy={true} exact='true' offset={-80}>
                                Projects
                            </MyNavLinks>
                        </MyNavItem>
                        <MyNavItem>
                            <MyNavLinks to="contact" smooth={true} duration={500} spy={true} exact='true' offset={-80}>
                                Contact
                            </MyNavLinks>
                        </MyNavItem>
                    </MyNavMenu>
                    <MyNavBtn>
                        <MyNavBtnlink to="/">Download CV</MyNavBtnlink>
                    </MyNavBtn>
                </MyNavbarContainer>
            </MyNav>
        </>
    )
}

export default MyNavbar
