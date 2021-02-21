import React from 'react';
import { 
    FooterContainer, 
    SiteNav,
    NavItem,
    NavLink,
    SocialMedia,
    SocialItem,
    SocialLink,
    FooterText,
    CompanyDetails
} from './Footer.elements';
import {
    IoLogoFacebook,
    IoLogoInstagram,
    IoLogoVimeo,
    IoLogoTwitter,
} from 'react-icons/io5'

const Footer = () => {
    return (
        <FooterContainer>
            <SiteNav>
                <NavItem>
                    <NavLink href="#">Press</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="#">Careers</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="#">Privacy Policy</NavLink>
                </NavItem>
            </SiteNav>
            <FooterText>
                <CompanyDetails>
                    <p>27 San Miguel Ave, San Antonio, Pasig, Metro Manila, Philippines</p>
                    <p>+632.8633.2433</p>
                    <p>ecstudio.mnl@gmail.com</p>
                </CompanyDetails>
                <p>EC Studio MNL &copy; 2021 powered by RM!</p>
            </FooterText>
            <SocialMedia>
                <SocialItem>
                    <SocialLink href="https://www.facebook.com" target="_blank">
                        <IoLogoFacebook />
                    </SocialLink>
                </SocialItem>
                <SocialItem>
                    <SocialLink href="https://www.instagram.com" target="_blank">
                        <IoLogoInstagram />
                    </SocialLink>
                </SocialItem>
                <SocialItem>
                    <SocialLink href="https://www.twitter.com" target="_blank">
                        <IoLogoTwitter />
                    </SocialLink>
                </SocialItem>
                <SocialItem>
                    <SocialLink href="https://www.vimeo.com" target="_blank">
                        <IoLogoVimeo />
                    </SocialLink>
                </SocialItem>
            </SocialMedia>
            
        </FooterContainer>
    )
}

export default Footer;
