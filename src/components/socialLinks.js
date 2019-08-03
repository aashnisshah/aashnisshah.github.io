import React from "react"
import SocialLink from "./socialLink"
import styled from "styled-components"
import { github, instagram, linkedin, stackoverflow, twitter } from "../utils/images"

const socialLinks = [
  {
    title: "LinkedIn",
    link: "https://linkedin.com/in/aashnisshah",
    image: linkedin
  }, {
    title: "Github",
    link: "https://github.com/aashnisshah",
    image: github
  }, {
    title: "Twitter",
    link: "https://twitter.com/aashnisshah",
    image: twitter
  }, {
    title: "Instagram",
    link: "https://instagram.com/aashnisshah",
    image: instagram
  }, {
    title: "Stackoverflow",
    link: "https://stackoverflow.com/users/1989265/aashnisshah",
    image: stackoverflow
  }
]

const SocialUl = styled.ul`
  list-style: none;
  list-style-type: none;
  margin: 0 0px;
  padding: 0 0;
  display: inline;
`;

const SocialLi = styled.li`
  display: inline;
`;

const SocialLinks = () => (
  <SocialUl>
    {socialLinks.map(({title, link, image}, id) => {
      return <SocialLi key={id}><SocialLink link={link} title={title} image={image}/></SocialLi>
    })}
  </SocialUl>
)

export default SocialLinks
