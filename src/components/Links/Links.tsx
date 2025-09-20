import React from 'react';

const Links = ({ links }) => {
  return (
    <ul className='social-links'>
      {links.map(l => (
        <li className='social-link'>
          <a
            href='https://www.instagram.com/txbrown__/'
            target='_blank'
            rel='noopener noreferrer'
          >
            {l.renderIcon && l.renderIcon()}
          </a>
        </li>
      ))}
    </ul>
  );
};


export default Links;
