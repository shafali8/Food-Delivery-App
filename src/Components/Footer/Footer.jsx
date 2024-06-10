import React from 'react'
import "./Footer.css"
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <section className="footer-content">
        <div className="footer-content-left">
          <img src={assets.logo} alt="" />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit possimus fugit veniam numquam exercitationem quasi nihil beatae neque eum perferendis Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati ducimus deleniti minus! Illo illum sed dignissimos blanditiis cupiditate doloremque ipsum eveniet nam magnam, veritatis ab, architecto sint dolore. Excepturi, aliquid?.</p>
          <div className="footer-social-icon">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
          </div>
        </div>
        <div className="footer-content-center">
            <h2>Company</h2>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Delivery</li>
                <li>Privacy policy</li>
            </ul>
        </div>
        <div className="footer-content-right">
            <h2>GET IN TOUCH</h2>
            <ul>
                <li>+1-12-345-322</li>
                <li>Contact@Tomato.com</li>
            </ul>
        </div>
      </section>
      <hr />
      <p className='footer-copyright'>
        Copyright 2024 ©️ Tomato.com -All Right Reserved.
      </p>
    </div>
  )
}

export default Footer
