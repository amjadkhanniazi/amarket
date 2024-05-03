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
      <Card imageSrc={LinkBuildLogo} text="Link Building" description="Hello! There, This is Link Building CArd..." />
      <Card imageSrc={CustomerSupport} text="Customer Support" description="Hello! There, This is Customer Support CArd..." />
      <Card imageSrc={SeoSection2} text="One Page SEO" description="Hello! There, This is One Page Seo CArd..." />
    </div>
  );
};

export default Section2;