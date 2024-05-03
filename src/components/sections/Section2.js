import React from 'react';
import LinkBuildLogo from './images/link_Building_Logo.png';
import CustomerSupport from './images/customer-service.png';
import SeoSection2 from './images/seoSection2.png';

const Card = ({ imageSrc, text, description }) => {
  return (
    <div className="card">
      <img src={imageSrc} alt="" />
      <h5>{text}</h5>
      <p>{description}</p>
    </div>
  );
};

const Section2 = () => {
  return (
    <div className="card-row">
      <Card imageSrc={LinkBuildLogo} text="Link Building" description="Supercharge your search ranking! Get valuable links and watch your website climb to the top." />
      <Card imageSrc={CustomerSupport} text="Customer Support" description="Happy customers, happy business! We provide stellar support to build trust and loyalty." />
      <Card imageSrc={SeoSection2} text="One Page SEO" description="Dominate your target keyword with a powerful, laser-focused landing page." />
    </div>
  );
};

export default Section2;