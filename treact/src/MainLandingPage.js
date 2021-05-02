import React from "react";
import tw from "twin.macro"; //eslint-disable-line
import { css } from "styled-components/macro"; //eslint-disable-line
import AnimationRevealPage from "helpers/AnimationRevealPage.js";

import Header from "components/hero/BackgroundAsImage.js";
import Ceremony from "components/features/Ceremony.js";
import Reception from "components/features/Reception.js";
import Registery from "components/features/Registry.js";
import Covid from "components/features/Covid.js";
import RSVP from "components/features/RSVP.js";
import Footer from "components/footers/MiniCenteredFooter.js";
import { Container } from "components/misc/Layouts";
const SectionContainer = tw(Container)``;

export default () => (
  <AnimationRevealPage>
    <Header />
    <SectionContainer id="Ceremony">
      <Ceremony />
    </SectionContainer>
    <SectionContainer id="Reception">
      <Reception />
    </SectionContainer>
    <SectionContainer id="Registry">
      <Registery />
    </SectionContainer>
    <SectionContainer id="COVID">
      <Covid />
    </SectionContainer>
    <SectionContainer id="RSVP">
      <RSVP />
    </SectionContainer>
    <Footer />
  </AnimationRevealPage>
);
