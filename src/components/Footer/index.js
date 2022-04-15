import React from 'react';
import arborImg from '../../images/certifiedArborist.png';
import {
  // FaFacebook,
  FaInstagram,
  // FaYoutube,
  // FaTwitter,
  // FaLinkedin,
  FaYelp
} from 'react-icons/fa';
import { animateScroll as scroll } from 'react-scroll';
import {
  FooterContainer,
  FooterWrap,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkItems,
  // FooterLinkTitle,
  FooterLink,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  ArborLogo,
  WebsiteRights,
  SocialIcons,
  SocialIconLink,
  Img
} from './FooterElements';

const Footer = () => {
  const logoImg= require('../../images/logo-nobackground.svg').default;
  const toggleHome = () => {
    scroll.scrollToTop();
  };
  return (
    <FooterContainer id="contact">
      <FooterWrap>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinkItems>
              {/* <FooterLinkTitle>About Us</FooterLinkTitle> */}
              <FooterLink to='/'>ashsarborcare@gmail.com</FooterLink>
              <FooterLink to='/'>(812) 344-6664</FooterLink>
              {/* <FooterLink to='/'>Careers</FooterLink>
              <FooterLink to='/'>Investors</FooterLink>
              <FooterLink to='/'>Terms of Service</FooterLink> */}
            </FooterLinkItems>
            <FooterLinkItems>
              {/* <FooterLinkTitle>Contact Us</FooterLinkTitle> */}
              <FooterLink to='/' style={{display: "table-cell"}} href="//www.treesaregood.org/treeowner/treeownersmanual" target="_blank">Tree Owners Manual</FooterLink>
              <FooterLink to='/' style={{display: "table-cell"}} href="//www.treesaregood.org/treeowner/whyhireanarborist" target="_blank">Why hire an Arborist?</FooterLink>
              {/* <FooterLink to='/'>Destinations</FooterLink>
              <FooterLink to='/'>Sponsorships</FooterLink> */}
            </FooterLinkItems>
          </FooterLinksWrapper>
          {/* <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>Videos</FooterLinkTitle>
              <FooterLink to='/'>Submit Video</FooterLink>
              <FooterLink to='/'>Ambassadors</FooterLink>
              <FooterLink to='/'>Agency</FooterLink>
              <FooterLink to='/'>Influencer</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>Social Media</FooterLinkTitle>
              <FooterLink to='/'>Instagram</FooterLink>
              <FooterLink to='/'>Facebook</FooterLink>
              <FooterLink to='/'>Youtube</FooterLink>
              <FooterLink to='/'>Twitter</FooterLink>
              <FooterLink to='/'>Yelp</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper> */}
        </FooterLinksContainer>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to='/' onClick={toggleHome}>
              <Img src={logoImg} alt={'logo'}/>
            </SocialLogo>
            <ArborLogo to='/' style={{display: "table-cell"}} href="//www.isa-arbor.com" target="_blank">
              <Img src={arborImg} alt={'certifiedArborist'}/>
            </ArborLogo>
            <WebsiteRights>Ash's Arbor Care L.L.C. © 2022 All rights reserved.</WebsiteRights>
            <SocialIcons>
              {/* <SocialIconLink href='/' target='_blank' aria-label='Facebook'> */}
                {/* <FaFacebook /> */}
              {/* </SocialIconLink> */}
              <SocialIconLink href='/' target='_blank' aria-label='Instagram'>
                <FaInstagram />
              </SocialIconLink>
              {/* <SocialIconLink
                // href=''
                target='_blank'
                aria-label='Youtube'
                rel='noopener noreferrer'
              >
                <FaYoutube />
              </SocialIconLink> */}
              {/* <SocialIconLink>
                <FaTwitter />
              </SocialIconLink> */}
              {/* <SocialIconLink href='/' target='_blank' aria-label='Linkedin'>
                <FaLinkedin />
              </SocialIconLink> */}
              <SocialIconLink
                href='//www.yelp.com/biz/ashs-arbor-care-indianapolis'
                target='_blank'
                aria-label='Yelp'
              >
                <FaYelp />
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;