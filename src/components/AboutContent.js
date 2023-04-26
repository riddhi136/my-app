import "./AboutContentStyles.css"

import React from 'react'
import { Link } from "react-router-dom"

const AboutContent = () => {
  return (
    <div className="about">
        <div className="left">
            
            <p>For more details.
            </p>
            <Link to="/contact">
                <button className="btn">Contact</button>
            </Link>
        </div>
    </div>
  )
}

export default AboutContent
