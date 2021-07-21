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
                            <FooterLinkTitle> <a target="_blank" style={{color: '#fff', textDecoration: 'none'}} href="https://www.gofundme.com/f/cool-down-boston-20?member=8422086&sharetype=teams&utm_campaign=p_na+share-sheet&utm_medium=copy_link&utm_source=customer">Donate</a></FooterLinkTitle>
                                <FooterLink to="/About">About</FooterLink>
                                <FooterLink to="/Members">Members</FooterLink>
                                <FooterLink to="/Contact">Contact</FooterLink>
                        </FooterLinkItems>

                        <FooterLinkItems>
                        <FooterLinkTitle> <a  target="_blank" style={{color: '#fff', textDecoration: 'none'}} href="https://www.gofundme.com/f/cool-down-boston-20?member=8422086&sharetype=teams&utm_campaign=p_na+share-sheet&utm_medium=copy_link&utm_source=customer">Donate</a></FooterLinkTitle>
                                <FooterLink to="/About">About</FooterLink>
                                <FooterLink to="/Members">Members</FooterLink>
                                <FooterLink to="/Contact">Contact</FooterLink>
                        </FooterLinkItems>
                 </FooterLinksWrapper>
            
          
            </InfoWrapper>
        
        </InfoContainer>
        
    )
}

export default Footer;