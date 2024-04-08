import React from 'react';
import WhatsAppLogo from '../images/whatsapp.png'; // Import your WhatsApp logo image
import EmailLogo from '../images/email.png'; // Import your email logo image

const FloatingButtons = () => {
  return (
    <div className="floating-buttons">
      <a href="https://api.whatsapp.com/send?phone=03244217097" className="whatsapp-button" target="_blank" rel="noopener noreferrer">
        <img src={WhatsAppLogo} alt="WhatsApp" />
        
      </a>
      <a href="mailto:amjadkhanniazi010@gmail.com" className="email-button">
        <img src={EmailLogo} alt="Email" />
        
      </a>
    </div>
  );
}

export default FloatingButtons;
