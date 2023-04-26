import "./HeroImgStyles.css";
import IntroImg from "../assets/intro-bg.jpg";

import React from 'react'
// import { Link } from "react-router-dom";
import PricingCard from "./PricingCard";

const HeroImg = () => {
  return (
    <div className="hero">
    <div className="mask">
    <img className="into-img"
    src={IntroImg} alt="IntroImg"/>
    </div>
    <div className="content">
        
        <h1>The E- waste journey and lithium-ion battery recycling</h1>
        <p>E-waste or waste from electrical and electronic equipment (WEEE) covers a wide 
          range of products with a power or battery supply: from computers and mobile phones
           to household appliances or medical devices. It is one of the fastest-growing waste streams 
           and thus a critical global concern. Proper handling and recycling are key: not only because it contains 
           hazardous materials and can have a negative impact on the environment and public health, but e-waste is also 
           a source of scarce and valuable resources.</p>
        
    </div>
    <PricingCard/>
    {/* <div>
        <Link to="/project" className="btn">Products</Link>
        <Link to="/contact" className="btn btn-light">Contacts</Link>
    </div> */}
    </div>
  )
}


export default HeroImg
