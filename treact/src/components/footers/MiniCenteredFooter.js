import React from "react";
import tw from "twin.macro";
import {Container as ContainerBase } from "components/misc/Layouts.js"


const Container = tw(ContainerBase)`bg-gray-900 text-gray-100 -mx-8 -mb-8`
const Content = tw.div`max-w-screen-xl mx-auto py-20 lg:py-24`;

const Row = tw.div`flex items-center justify-center flex-col px-8`

const LinksContainer = tw.div`mt-8 font-medium flex flex-wrap justify-center items-center flex-col sm:flex-row`
const Link = tw.a`border-b-2 border-transparent hocus:text-gray-300 hocus:border-gray-300 pb-1 transition duration-300 mt-2 mx-4`;

const CopyrightText = tw.p`text-center mt-10 font-medium tracking-wide text-sm text-gray-600`
export default () => {
  return (
    <Container>
      <Content>
        <Row>
          <LinksContainer>
            <Link href="#Ceremony">Ceremony</Link>
            <Link href="#Reception">Reception</Link>
            <Link href="#Registry">Registry</Link>
            <Link href="#COVID">COVID-19</Link>
            <Link href="#RSVP">RSVP</Link>
          </LinksContainer>
          <CopyrightText href="https://treact.owaiskhan.me/">
            This website was made with <a href="https://treact.owaiskhan.me/">Treact</a>.
          </CopyrightText>
        </Row>
      </Content>
    </Container>
  );
};
