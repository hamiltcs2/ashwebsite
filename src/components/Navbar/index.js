import React, {useEffect, useState} from 'react';
import {FaBars} from 'react-icons/fa';
import {Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink, Img} from './NavbarElements';
import {IconContext} from 'react-icons/lib';
import { animateScroll as scroll} from 'react-scroll/modules';

const Navbar = ({toggle}) => {
    const [scrollNav, setScrollNav] = useState(false);
    //img: require('../../images/svg-1.svg').default
    const img= require('../../images/logo-nobackground.svg').default;
    const alt = 'Ashton';
    const changeNav = () => {
        if(window.scrollY >= 80) {
            setScrollNav(true)

        } else {
            setScrollNav(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', changeNav)
        return () => {
            window.removeEventListener('scroll', changeNav)
        }
    }, []);

    const toggleHome = () => {
        scroll.scrollToTop();
    }

    return (
    <>
    <IconContext.Provider value={{ color: '#fff'}}>
        <Nav scrollNav={scrollNav}>
            <NavbarContainer>
                <NavLogo to='/' onClick={toggleHome}>
                <Img src={img} alt={alt}/>
                </NavLogo>
                <MobileIcon onClick={toggle}>
                    <FaBars/>
                </MobileIcon>
                <NavMenu>
                    <NavItem>
                        <NavLinks to="about"
                        smooth={true} duration={500} spy={true}
                        exact='true' offset={-80}
                        >About</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="services"
                        smooth={true} duration={500} spy={true}
                        exact='true' offset={-80}
                        >Services</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="contact"
                        smooth={true} duration={500} spy={true}
                        exact='true' offset={-80}
                        >Contact</NavLinks>
                    </NavItem>
                </NavMenu>
                <NavBtn>
                    <NavBtnLink to="/request">Request Quote</NavBtnLink>
                </NavBtn>
                <h1></h1>
            </NavbarContainer>
        </Nav>
    </IconContext.Provider>
    </>
  )
}

export default Navbar;