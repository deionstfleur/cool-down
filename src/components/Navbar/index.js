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
 import {Link } from 'react-dom'

const Navbar = ({toggle}) => {
    return (
        <Nav>
            <NavbarContainer>
                <NavLogo to='/'>cooldown</NavLogo>
                <MobileIcon onClick={toggle}>
                    <FaBars  />
                </MobileIcon>
                <NavMenu>
                    <NavItem>
                        <NavLinks to="/About">About</NavLinks>
                    </NavItem>
                      <NavItem>
                        <NavLinks to="/Members">Members</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="/Services">Services</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="/Contact">Contact</NavLinks>
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
