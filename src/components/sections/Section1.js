import React from 'react';
import { Button } from 'react-bootstrap';
import MarketImage from './images/seo.gif';


const Section1 = () => {
    return (
        <div className="section1-container">
            <div className="section1-content">
                <div className="section1-text">
                    <h4>Welcome to</h4>
                    <h1>DK <span className='h1Color'>Marketing</span></h1>
                    <p>Marketing agencies drive brand success<br/>through creative strategies, digital channels, and adaptability.<br/> They help brands stand out<br/>and engage effectively.</p>
                    <Button variant="primary">Get Started</Button>
                </div>
                <div className="section1-image">
                    <img src={MarketImage} alt="placeholder" />
                </div>
            </div>
        </div>
    );
};

export default Section1;
