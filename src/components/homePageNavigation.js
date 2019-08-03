import React from "react"

const navigationLinks = [
  {
    title: "Work",
    link: "/work"
  }, {
    title: "About",
    link: "/about"
  }
]

const HomePageNavigation = () => (
  <ul>
    {navigationLinks.map(({title, link}, id) => {
      return <li key={id}><a href={link}>{title}</a></li>
    })}
  </ul>
)

export default HomePageNavigation
