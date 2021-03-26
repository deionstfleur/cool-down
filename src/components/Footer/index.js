import React from 'react'
import { FaFacebook, FaInstagram} from 'react-icons/fa'
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

const Footer = () => {
    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
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

                    {/* <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle> Donate</FooterLinkTitle>
                                <FooterLink to="/donate">How it works</FooterLink>
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
                    </FooterLinksWrapper> */}
                </FooterLinksContainer>
                <SocialMediaWrap>
                    {/* <SocialLogo to="/">
                        cooldown 
                    </SocialLogo> */}
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
    )
}

export default Footer
