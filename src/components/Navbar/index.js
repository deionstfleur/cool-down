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
 import logo from '../../images/logo.PNG'

const Navbar = ({toggle}) => {
    return (
        <Nav>
            <NavbarContainer>
                <NavLogo style={{textDecoration: 'none'}} to='/'>
                    <img src ={logo} style={{height: 55, width: 55}}/>
                </NavLogo>
                {/* <MobileIcon onClick={toggle}>
                    <FaBars  />
                </MobileIcon> */}
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
                    {/* <NavItem>
                        <NavLinks to="/Contact">Contact</NavLinks>
                    </NavItem> */}
                </NavMenu>
                <NavBtn>
                    <NavBtnLink to="/Contact">Contact</NavBtnLink>
                    <NavLinks style={{display: 'none'}} to="/Contact">Contact</NavLinks>
                </NavBtn>
            </NavbarContainer>      
        </Nav>



        

    )
}

export default Navbar;
