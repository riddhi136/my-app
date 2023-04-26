import "./FooterStyles.css"

import React from 'react'
import { FaHome,FaPhone,FaMailBulk, FaFacebook,
    FaTwitter, FaLinkedin } from "react-icons/fa"

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
            <div className="location">
                <FaHome size={20} style={{ color :"#fff",
                marginRight: "2rem"}}/>

                <div>
                    <p>329, Dawn Bldg.</p>
                    <p>Mumbai</p>
                </div>
            </div>

            <div className="phone">
                <h4>
                <FaPhone size={20} style={{ color :"#fff",
                marginRight: "2rem"}}/>
                9819289459
                </h4>
            </div>


            <div className="email">
                <h4>
                <FaMailBulk size={20} style={{ color :"#fff",
                marginRight: "2rem"}}/>
                riddhisawant13@gmail.com
                </h4>
            </div>



        </div>
        <div className="right">
            <h4>About the company</h4>
            <p>We started our journey of recycling back in 2010 with paper recycling and gradually recycling of e-waste and all type of Lithium-ion batteries. 
              We have collective experience of more than 150 years into recycling and extraction of metals out of waste, which keeps us ahead of curve in the 
              competition with Strong Team and Sustainable Technology.</p>
            <div className="social">
            <FaFacebook
            size={30} 
            style={{ color :"#fff",
            marginRight: "1rem"}}/>

            <FaTwitter
            size={30} 
            style={{ color :"#fff",
            marginRight: "1rem"}}/>

            <FaLinkedin
            size={30} 
            style={{ color :"#fff",
            marginRight: "1rem"}}/>

            </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
