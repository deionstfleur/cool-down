import React from 'react'
import { FaFacebook, FaInstagram} from 'react-icons/fa'
import { Link } from "react-router-dom";
import {
    Button,
    NavItem,
    NavLink,
    Nav,
    Container,
    Row,
    Col,
    UncontrolledTooltip,
  } from "reactstrap";
import {
    FooterContainer,
    FooterWrap,
    FooterLinksContainer,
    FooterLinkItems,
    FooterLinkTitle,
    FooterLink,
    FooterLinksWrapper
} from './styles'
import {
    SocialMediaWrap,
    SocialLogo,
    WebsiteRights,
    SocialIcons,
    SocailIconLink
} from './styles'
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";


const Footer = () => {
    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle> Donate</FooterLinkTitle>
                                <FooterLink to="/About">About</FooterLink>
                                <FooterLink to="/Members">Members</FooterLink>
                                 <FooterLink to="/Contact">Contact</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle> Donate</FooterLinkTitle>
                                <FooterLink to="/About">About</FooterLink>
                                <FooterLink to="/Members">Members</FooterLink>
                                 <FooterLink to="/Contact">Contact</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>

                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle> Donate</FooterLinkTitle>
                                <FooterLink to="/donate"><a href="https://www.gofundme.com/f/cool-down-boston-20?member=8422086&sharetype=teams&utm_campaign=p_na+share-sheet&utm_medium=copy_link&utm_source=customer">How it Works</a></FooterLink>
                                <FooterLink to="/donate">Testimonials</FooterLink>
                                <FooterLink to="/donate">Careers</FooterLink>
                                <FooterLink to="/donate">Terms of Service</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle> Donate</FooterLinkTitle>
                                <FooterLink to="/donate">How it works</FooterLink>
                                <FooterLink to="/donate">Testimonials</FooterLink>
                                <FooterLink to="/donate">Careers</FooterLink>
                                <FooterLink to="/donate">Terms of Service</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer>
                <SocialMediaWrap>
                    <SocialLogo to="/">
                        cooldown 
                    </SocialLogo>
                        <WebsiteRights> {new Date().getFullYear()} CopyRights Reserved</WebsiteRights>
                        <SocialIcons>
                            <SocailIconLink href="/" target="_blank" aria-label="Facebook">
                                <FaFacebook />
                            </SocailIconLink>

                            <SocailIconLink href="/" target="_blank" aria-label="Instagram">
                                <FaInstagram />
                            </SocailIconLink>

                           
                        </SocialIcons>
                </SocialMediaWrap>
            </FooterWrap>
        </FooterContainer>
    //     <Container>

    //     <div className="footer" style={{ marginTop: 1500,
    //         padding: '1rem',
    //         backgroundColor: 'black',
    //         bottom: 0,
    //         left: 0,
    //         width: '100%',}}>
                
    //     <p>This is some content in sticky footer</p>
    //   </div>
    
//     <MDBFooter color="black" className="font-small pt-4 mt-4">
//     <MDBContainer fluid className="text-center text-md-left">
//       <MDBRow>
//         <MDBCol md="6">
//           <h5 className="title">Footer Content</h5>
//           <p>
//             Here you can use rows and columns here to organize your footer
//             content.
//           </p>
//         </MDBCol>
//         <MDBCol md="6">
//           <h5 className="title">Links</h5>
//           <ul>
//             <li className="list-unstyled">
//               <a href="#!">Link 1</a>
//             </li>
//             <li className="list-unstyled">
//               <a href="#!">Link 2</a>
//             </li>
//             <li className="list-unstyled">
//               <a href="#!">Link 3</a>
//             </li>
//             <li className="list-unstyled">
//               <a href="#!">Link 4</a>
//             </li>
//           </ul>
//         </MDBCol>
//       </MDBRow>
//     </MDBContainer>
//     <div className="footer-copyright text-center py-3">
//       <MDBContainer fluid>
//         &copy; {new Date().getFullYear()} Copyright: <a href="https://www.mdbootstrap.com"> MDBootstrap.com </a>
//       </MDBContainer>
//     </div>
//   </MDBFooter>

/* <footer className="footer">
<Container>
  <Row>
    <Col md="3">
      <h1 className="title">BLK•</h1>
    </Col>
    <Col md="3">
      <Nav>
        <NavItem>
          <NavLink to="/" tag={Link}>
            Home
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/landing-page" tag={Link}>
            Landing
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/register-page" tag={Link}>
            Register
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/profile-page" tag={Link}>
            Profile
          </NavLink>
        </NavItem>
      </Nav>
    </Col>
    <Col md="3"> */
      /* <Nav>
        <NavItem>
          <NavLink href="https://creative-tim.com/contact-us?ref=blkdsr-footer">
            Contact Us
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="https://creative-tim.com/about-us?ref=blkdsr-footer">
            About Us
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="https://creative-tim.com/blog?ref=blkdsr-footer">
            Blog
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="https://opensource.org/licenses/MIT">
            License
          </NavLink>
        </NavItem>
      </Nav> */
    /* </Col>
    <Col md="3">
      <h3 className="title">Follow us:</h3>
      <div className="btn-wrapper profile">
        <Button
          className="btn-icon btn-neutral btn-round btn-simple"
          color="default"
          href="https://twitter.com/creativetim"
          id="tooltip622135962"
          target="_blank"
        >
          <i className="fab fa-twitter" />
        </Button>
        <UncontrolledTooltip delay={0} target="tooltip622135962">
          Follow us
        </UncontrolledTooltip>
        <Button
          className="btn-icon btn-neutral btn-round btn-simple"
          color="default"
          href="https://www.facebook.com/creativetim"
          id="tooltip230450801"
          target="_blank"
        >
          <i className="fab fa-facebook-square" />
        </Button>
        <UncontrolledTooltip delay={0} target="tooltip230450801">
          Like us
        </UncontrolledTooltip>
        <Button
          className="btn-icon btn-neutral btn-round btn-simple"
          color="default"
          href="https://dribbble.com/creativetim"
          id="tooltip318450378"
          target="_blank"
        >
          <i className="fab fa-dribbble" />
        </Button>
        <UncontrolledTooltip delay={0} target="tooltip318450378">
          Follow us
        </UncontrolledTooltip>
      </div>
    </Col>
  </Row>
</Container>
</footer> */
    )
}

export default Footer
