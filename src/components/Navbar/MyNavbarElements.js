import styled from 'styled-components';
import { Link as LinkR } from 'react-router-dom';
import { Link as LinkS } from 'react-scroll';

export const MyNav = styled.nav`
    background: ${({ scrollNav }) => (scrollNav ? "#010606" : "transparent")};
    height: 80px;
    margin-top: -80px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.2rem;
    position: sticky;
    top: 0;
    z-index: 10;

    @media screen and (max-width: 968px) {
        transition: 0.8s all ease;
    }
`

export const MyNavbarContainer = styled.div`
    color: crimson;
    display: flex;
    justify-content: space-between;
    height: 80px;
    z-index: 1;
    width: 100%;
    padding: 0 24px !important;
    max-width: 1100px;
`

export const MyNavbarLogo = styled(LinkR)`
    color: #fff;
    justify-self: flex-start;
    cursor: pointer;
    font-size: 1.8rem;
    display: flex;
    align-items: center;
    margin-left: 24px;
    font-weight: bold;
    text-decoration: none;

    :hover {
        color: #fff;
        text-decoration: none;
        cursor: pointer;
    }

    @media screen and (max-width: 400px) {
        font-size: 1.5rem;
        margin-left: 10px;
    }
`

export const MyMobileIcon = styled.div`
    display: none;

    @media screen and (max-width: 768px) {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 60%);
        font-size: 1.8rem;
        cursor: pointer;
        color: #fff;
    }

    @media screen and (max-width: 400px) {
    transform: translate(-100%,56%);
    font-size: 1.5rem;
    }
`

export const MyNavMenu = styled.ul`
    margin: 0;
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;
    margin-right: -22px;
    cursor: pointer;

    @media screen and (max-width: 760px) {
        display: none;
    }
`

export const MyNavItem = styled.li`
    height: 80px;
    color: #fff;

    :hover {
        color: #fff;
        cursor: pointer;
    }
`

export const MyNavLinks = styled(LinkS)`
    color: #fff;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;

    :hover {
        cursor: pointer;
    }

    &.active {
        border-bottom: 5px solid #01bf71;
    }
`

export const MyNavBtn = styled.nav`
    display: flex;
    align-items: center;

    @media screen and (max-width: 768px) {
        display: none
    }

`
export const MyNavBtnlink = styled(LinkR)`
    border-radius: 50px;
    background: #01bf71;
    white-space: nowrap;
    padding: 10px 20px;
    color: #010606;
    font-size: 16px;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: #fff;
        color: #010606;
        text-decoration: none;
    }
`