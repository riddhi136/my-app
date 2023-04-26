import "./PricingCardStyles.css";

import React from 'react'
import { Link } from "react-router-dom"

const PricingCard = () => {
  return (
    
    <div className="pricing">
        <div className="card-container">
            <div className="card">
                <h3>- Battery Recycling -</h3>
                <span className="bar"></span>
                <p className="btc"></p>
                <p>Recycle batteries to extract Lithium, Cobalt, 
                  Nickel, Manganese, Copper and Aluminum. Quality of our products is 
                  of more than 99% purity. Our products are in the market for more than 3 years and we are able to meet the supply demands.
                  It should be considered to recycle it.</p>
                
                <Link to="/contact" className="btn">
                    Read more
                </Link>
            </div>


            <div className="card">
                <h3>- E-Waste Recycling -</h3>
                <span className="bar"></span>
                <p className="btc"></p>
                <p>Annual capacity to recycle 7500 MT of electronics waste, 
                  and with 13+ years of experience in recycling industry. 
                  We have specialized the process to extract precious metals 
                  from e-waste like Gold, Silver, Platinum and Palladium, and able to recycle effectively.-</p>
                
                <Link to="/contact" className="btn">
                    Read more
                </Link>
            </div>


            <div className="card">
                <h3>- Material Extraction -</h3>
                <span className="bar"></span>
                <p className="btc"></p>
                <p>We have specialized in hydrometallurgy technology to 
                  extract metals from black mass or from the hydroxide ores with more
                  than 90% efficiency and with more than 99% purity. We recycle e-waste and put the 
                  raw materials back into the circular economy.</p>
                
                <Link to="/contact" className="btn">
                    Read more
                </Link>
            </div>

        </div>
      
     </div>
  )
};

export default PricingCard
