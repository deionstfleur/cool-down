import React from 'react'
import { Container, Row, Col, Figure } from 'react-bootstrap';
import{ Button} from '../ButtonElement';
import { 
    InfoContainer, 
    InfoWrapper, 
    Column1, 
    Column2, 
    TextWrapper, 
    TopLine, 
    Heading, 
    Subtitle, 
    BtnWrap,
    ImgWrap,
    Img,
    InfoRow } from './styles4'
    import Boston from '../../images/Boston.jpg'
    import {
        FooterContainer,
        FooterWrap,
        FooterLinksContainer,
        FooterLinkItems,
        FooterLinkTitle,
        FooterLink,
        FooterLinksWrapper
    } from '../Footer/styles'
    

const Footer = ({
 
}) => {
    return (
        
        <InfoContainer >
      
            <InfoWrapper>
            <FooterLinksWrapper> 
                        <FooterLinkItems>
                            <FooterLinkTitle> Donate</FooterLinkTitle>
                                <FooterLink to="/donate">About</FooterLink>
                                <FooterLink to="/donate">Discover</FooterLink>
                                <FooterLink to="/donate">Services</FooterLink>
                                <FooterLink to="/donate">Contact</FooterLink>
                        </FooterLinkItems>

                        <FooterLinkItems>
                            <FooterLinkTitle> Donate</FooterLinkTitle>
                                <FooterLink to="/donate">How it works</FooterLink>
                                <FooterLink to="/donate">Testimonials</FooterLink>
                                <FooterLink to="/donate">Careers</FooterLink>
                                <FooterLink to="/donate">Terms of Service</FooterLink>
                        </FooterLinkItems> 
                 </FooterLinksWrapper>
        
          
            </InfoWrapper>
        
        </InfoContainer>
        
    )
}

export default Footer;