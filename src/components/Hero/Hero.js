import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome To <br />
        Insignis DAO
      </SectionTitle>
      <SectionText>
        The Insignis Dao aims to shake up the DAO market with a new way to elect council members. Insigis is powered by Atlantis, the deepest Meta liquidty pool.
      </SectionText>
      <Button onClick={() => window.location = 'https://medium.com'} >Learn More</Button>
    </LeftSection>
  </Section>
);

export default Hero;