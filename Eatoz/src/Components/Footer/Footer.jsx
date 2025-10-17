import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'
const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
             <img className='footer-logo' src={assets.EEAT_logo} alt="" />
             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa odio maxime quibusdam est distinctio dolore laudantium ad voluptate velit officia, corrupti mollitia quam magnam recusandae. Eum iusto maiores labore sequi.</p>
              <div className="footer-social-icons">
                <img src={assets.facebook_icon}alt="" />
                {/* <img src={assets.twitter_icon}alt="" /> */}
                <img src={assets.linkedin_icon}alt="" />
              </div>

            </div>
            <div className="footer-content-center">
                 <h2>COMPANY</h2>
                 <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>
                 </ul>
            </div>
            <div className="footer-content-right">
                    <h2>GET IN TOUCH</h2>
                    <ul>
                        <li>+91-333-222-7777</li>
                        <li>contact@Eatoz.com</li>
                    </ul>
            </div>
        </div>
     <hr />
     <p className="footer-copyright">Copyright 2025 © Eatoz.com-All Right Reserved.</p>
    </div>
  )
}

export default Footer