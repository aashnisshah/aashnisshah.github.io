import React from "react"
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

const SocialLinks = () => (
  <ul>
    {socialLinks.map(({title, link, image}, id) => {
      return <li key={id}><a href={link} alt={title} rel="noopenner noreferrer">
          <img src={image} alt={title} width="32px" height="32px" />
        </a></li>
    })}
  </ul>
)

export default SocialLinks
