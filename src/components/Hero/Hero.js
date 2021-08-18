import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome To <br />
        0xKoda's Portfolio
      </SectionTitle>
      <SectionText>
        I am a web developer who recently took the plunge into solidity, developing smart contracts and interacting with the blockchain via web3. 
      </SectionText>
      <Button onClick={() => window.location = 'https://github.com/0xkoda'} >Learn More</Button>
    </LeftSection>
  </Section>
);

export default Hero;