import React from 'react'

import insta from '../svg/instagram.png'
import linkedin from '../svg/linkedin.png'
import twitter from '../svg/twitter.png'
import divider2 from '../svg/divider2.svg'

const Footer = () => {
  return (
    <div className='footer-cont' id='contact-us'>
    <img src={divider2} alt="img" className='divider2'/>
      <section class="footer">
                <div class="contact-us">
                    <h2 data-aos="zoom-in-right">Contact</h2>
                    <ul class="details" data-aos="fade-up">
                        <li>
                            Phone : <a href="tel:+91 9889494645">+91 9889494645</a>
                        </li>
                        <li>
                            Email : <a href="mailto:hiresumcontact@gmail.com" target="_blank" rel="noreferrer">hiresumsupport@gmail.com</a>
                        </li>
                        <li>
                            Address : <span>Maumbai, Maharastra, India</span>
                        </li>
                    </ul>
                </div>
                <div class="f-nav">
                    <h2 data-aos="zoom-in">Navigation</h2>
                    <ul data-aos="fade-up">
                        <li><a href="#about">About Us</a></li>
                        <li><a href="#features">Hire from the top colleges</a></li>
                        <li><a href="#home">Hire by roles</a></li>
                        <li><a href="#success">Filter Candidates</a></li>
                        <li><a href="#success">Hire Interns</a></li>
                    </ul>
                </div>
                <div class="follow_us">
                    <h2 data-aos="zoom-in-left"> FOLLOW US</h2>
                    <div class="social_images" data-aos="fade-up">
                        <a href="https://instagram.com" target="_blank" rel="noreferrer"><img
                                src={insta} alt="img"/></a>
                        <a href="https://LinkedIn.com"
                            target="_blank" rel="noreferrer"><img src={linkedin} alt="img"/></a>
                        <a href="https://twitter.com" target="_blank" rel="noreferrer"><img src={twitter} alt="img"/></a>
                    </div>
                </div>
            </section>

            <section class="copyright">
                © 2023 Kritika Singh. All Rights Reserved
            </section>
    </div>
  )
}

export default Footer
