import React from 'react'
import { Link } from "react-router-dom";

const Header = (props) => {
  return (
    <header className={props.add}>
        <h2 className="logo">HireSum</h2>
        <nav className="navigation" id={props.dis}>
            <a href="#Home" className="active">Home</a>
            <a href="#about">About</a>
            <a href="#services">Service</a>
            <a href="#contact-us">Contact</a>
        </nav>
        <Link to={props.route} className="login active">{props.content}</Link>
    </header>
  )
}

export default Header
