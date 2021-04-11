import React from 'react'
import {Navbar, Nav, NavDropdown } from 'react-bootstrap'
import {Link } from 'react-dom'
import { 
    NavbarContainer, 
    NavLogo, 
    MobileIcon, 
    NavMenu, 
    NavItem, 
    NavLinks,
    NavBtn,
    NavBtnLink
 } from './styles'

const nav = () => {
    return(

        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" style={{zIndex: 1000, position: 'fixed', width: '100%',}}>
  <Navbar.Brand href="/" style={{fontSize: 25}}>cooldown</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="/About">About</Nav.Link>
      <Nav.Link href="/Members">Members</Nav.Link>
      {/* <Nav.Link href="/Services">Services</Nav.Link> */}
      <Nav.Link href="/Contact">Contact</Nav.Link>
      {/* <NavbarContainer>
                <NavLogo to='/'>cooldown</NavLogo> */}
                {/* <MobileIcon onClick={toggle}>
                    <FaBars  />
                </MobileIcon> */}
                {/* <NavMenu>
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
            </NavbarContainer>   */}
      {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown> */}
    </Nav>
    <Nav>
      {/* <Nav.Link href="#deets">More deets</Nav.Link> */}
      <NavBtn style={{zIndex: 100}}>
      <Nav.Link eventKey={2} href="/Donate">

        Donate
      </Nav.Link>
      </NavBtn>
    </Nav>
  </Navbar.Collapse>
</Navbar>

    )
}

export default nav;