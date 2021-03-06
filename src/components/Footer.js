import React from 'react';
import styled from 'styled-components';
import {Link} from 'gatsby';

const Footer = () => {
  return (
    <FooterContainer>
      <FooterLinkWrapper>
        <FooterDesc>
          <h1>CRTVhouse productions</h1>
          <p>we strive to create the best experience for our clients.</p>
        </FooterDesc>
        <FooterLinkItems>
          <FooterLinkTitle>Contact Us</FooterLinkTitle>
          <FooterLink to="/about">Contact</FooterLink>
          <FooterLink to="/about">Support</FooterLink>
          <FooterLink to="/about">Content</FooterLink>
          <FooterLink to="/about">Sponsorship</FooterLink>
        </FooterLinkItems>
      </FooterLinkWrapper>
      <FooterLinkWrapper>
      <FooterLinkItems>
          <FooterLinkTitle>Contact Us</FooterLinkTitle>
          <FooterLink to="/about">Contact</FooterLink>
          <FooterLink to="/about">Support</FooterLink>
          <FooterLink to="/about">Content</FooterLink>
          <FooterLink to="/about">Sponsorship</FooterLink>
        </FooterLinkItems>
        <FooterLinkItems>
          <FooterLinkTitle>Contact Us</FooterLinkTitle>
          <FooterLink to="/about">Contact</FooterLink>
          <FooterLink to="/about">Support</FooterLink>
          <FooterLink to="/about">Content</FooterLink>
          <FooterLink to="/about">Sponsorship</FooterLink>
        </FooterLinkItems>
      </FooterLinkWrapper>
    </FooterContainer>
  )
};

export default Footer;

const FooterContainer = styled.div`
  padding: 5rem calc((100vw - 1100px) / 2);
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  color: #000;
  background: #fafafb;
`
const FooterDesc = styled.div`
  padding: 0 2rem;

  h1 {
    margin-bottom: 3rem;
    color: #f26a2e;
  }

  @media screen and (max-width: 400px){
    padding: 1rem;
  }
`
const FooterLinkWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  @media screen and (max-width: 820px){
    grid-template-columns: 1fr;
  }
`
const FooterLinkItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 1rem 2rem;

  @media screen and (max-width: 480px) {
    padding: 1rem;
  }
`
const FooterLink = styled(Link)`
  text-decoration: none;
  margin-bottom: 0.5rem;
  font-size: 14px;
  color: #3d3d4c;

  &:hover {
    color: #f26a2e;
    transition: 0.3s ease-out;
  }
`
const FooterLinkTitle = styled.h2`
  font-size: 14px;
  margin-bottom: 16px;
`