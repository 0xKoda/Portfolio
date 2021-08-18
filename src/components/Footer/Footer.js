import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin, AiFillMediumSquare, AiFillTwitterCircle } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
      <LinkColumn>
      <LinkTitle>Email</LinkTitle>
      <LinkItem href="mailto:0xkoda@pm.me">0xKoda@pm.me</LinkItem>
      </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Innovating one project at a time</Slogan>
        </CompanyContainer>
        <SocialContainer>
        <SocialIcons href="https://github.com">
        <AiFillGithub size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://twitter.com/coin_hunting">
        <AiFillTwitterCircle size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://coinhunting.medium.com">
        <AiFillMediumSquare size="3rem" />
      </SocialIcons>
      </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
