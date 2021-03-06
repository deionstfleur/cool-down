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
    NavBtnLink,
  
 } from './styles'

const nav = () => {
    return(

        <Navbar  collapseOnSelect expand="lg" bg="black" variant="black" style={{zIndex: 1000, position: 'fixed', width: '100%', backgroundColor: 'black', margin: 'auto'}}>
  <Navbar.Brand href="/" style={{fontSize: 25}}>CDB</Navbar.Brand>
  <Navbar.Toggle  style={{color: 'white'}} aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse style={{color: 'white'}}  id="responsive-navbar-nav">
    <Nav style={{fontSize: 20, display: 'flex', alignItems: 'center'}} className="mr-auto">
      <Nav.Link style={{color: 'white'}} href="/About">About</Nav.Link>
      <Nav.Link style={{color: 'white'}}  href="/Members">Members</Nav.Link>
      {/* <Nav.Link href="/Services">Services</Nav.Link> */}
      <Nav.Link style={{color: 'white'}}  href="/Contact">Contact</Nav.Link>
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
      <Nav.Link style={{color: 'white'}}  eventKey={2} href="/Donate">

        
      </Nav.Link>
              

      </NavBtn>
    </Nav>
  </Navbar.Collapse>
</Navbar>

    )
}

export default nav;