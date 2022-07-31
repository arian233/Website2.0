import React from 'react'
import { NavbarContainer, NavLogo, MobileIcon, NavMenu, NavLinks } from './NavbarElements'
import { FaBars } from 'react-icons/fa'
import logo from '../images/logo.png'

const Navbar = ({ toggle }) => {
    return (
        <>
            <NavbarContainer>
                <NavLogo to='/'>
                    <img src={logo} ></img>
                </NavLogo>
                <MobileIcon onClick={toggle}>
                    <FaBars />
                </MobileIcon>
                <NavMenu>
                    <NavLinks to='about'>About</NavLinks>

                    <NavLinks to='projects'>Projects</NavLinks>

                    <NavLinks to='contact'>Contact</NavLinks>

                </NavMenu>
            </NavbarContainer>
        </>
    )
}

export default Navbar