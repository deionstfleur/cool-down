import React from 'react'
import {FaBars} from 'react-icons/fa'
import { Nav, 
    NavbarContainer, 
    NavLogo, 
    MobileIcon, 
    NavMenu, 
    NavItem, 
    NavLinks,
    NavBtn,
    NavBtnLink
 } from './styles'

const Navbar = () => {
    return (
        <Nav>
            <NavbarContainer>
                <NavLogo to='/'>cooldown</NavLogo>
                <MobileIcon>
                    <FaBars />
                </MobileIcon>
                <NavMenu>
                    <NavItem>
                        <NavLinks to="about">About</NavLinks>
                    </NavItem>
                      <NavItem>
                        <NavLinks to="discover">Discover</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="services">Services</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="contact">Contact</NavLinks>
                    </NavItem>
                </NavMenu>
                <NavBtn>
                    <NavBtnLink to="/Donate">Donate</NavBtnLink>
                </NavBtn>
            </NavbarContainer>      
        </Nav>
    )
}

export default Navbar;
