import React from "react"
import { HomePageNavigation, SocialLinks } from "../components"
import '../style/main.css'
import styled from "styled-components"
import { phone } from "../utils/breakpoints"

const MainPage = styled.div`
  display: grid;
  place-items: center;
  @media(min-width: ${phone}) {
    place-items: left;
  }
`;

const Header = styled.h1`
  font-family: Zeyada;
  font-size: 2.6em;
  margin-block-start: 0;
  margin-block-end: 0;
  margin-top: 48px;
  line-height: 0.8em;
  font-weight: 300;
  @media(min-width: ${phone}) {
    font-size: 4em;
  }
`;

const IndexPage = () => (
  <MainPage>
    <Header>Aashni Shah</Header>
    <HomePageNavigation />
    <SocialLinks />
  </MainPage>
)

export default IndexPage
