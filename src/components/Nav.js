import React from "react"
// <!-- <li><a href="#">Experience</a></li> -->
// <!-- <li><a href="#">Education</a></li> -->
const Nav = () => {
  return (
    <>
      <nav className="topnav">
        <a className="navitem" href="#about">
          About
        </a>
        <a className="navitem" href="#projects">
          Projects
        </a>
        <a className="navitem" href="#skills">
          Skills
        </a>
        <a className="navitem" href="#contact">
          Contact
        </a>
      </nav>
    </>
  )
}

export default Nav
