import React from 'react';
import { FaFacebook, FaInstagram, FaSoundcloud } from 'react-icons/fa';
import './Links.css';

const Links = props => {
    return (
        <div className="social-links">
  <a href="https://www.instagram.com/txbrown__/" className="social-link"    target="_blank"
          rel="noopener noreferrer">

            <FaInstagram  color="white"  />
  </a>
  <a href="https://www.facebook.com/txbrown/" className="social-link"    target="_blank"
          rel="noopener noreferrer">

            <FaFacebook  color="white" />
  </a>
  <a href="https://soundcloud.com/txbrown" className="social-link"    target="_blank"
          rel="noopener noreferrer">
            <FaSoundcloud  color="white"  />
  </a>
        </div>
    );
};

Links.propTypes = {
    
};

export default Links;