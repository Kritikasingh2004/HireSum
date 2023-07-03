import React from 'react'
import { Link } from "react-router-dom";

import hiring1 from '../svg/hiring1.png'

const About = () => {
  return (
    <div className='abt-sec' id='about'>
      <div className="abt-head">
        <h1 data-aos="fade-right">Streamline Your <span>Hiring Process</span> with Our HireSum</h1>
        <Link to='/signup' className='btn' data-aos="zoom-in-right">Start Hiring</Link>
      </div>
      <div className="abt-img">
      <img src={hiring1} data-aos="fade-left" alt="img" />
      </div>
    </div>
  )
}

export default About
