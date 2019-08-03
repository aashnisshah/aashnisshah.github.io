import React from "react"
import styled from "styled-components"

const Link = styled.a`
  text-decoration: none;
`;

const SocialLinkImage = styled.img`
  margin: 0 10px;
`;

const SocialLink = ({link, title, image}) => (
  <Link href={link} alt={title} rel="noopenner noreferrer">
    <SocialLinkImage src={image} alt={title} width="32px" height="32px" />
  </Link>
)

export default SocialLink
