import PropTypes from 'prop-types';
import React from 'react';
import './Links.css';

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

Links.defaultProps = {
  links: []
};

Links.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      url: PropTypes.string.isRequired,
      renderIcon: PropTypes.func.isRequired
    })
  ).isRequired
};

export default Links;

{
  /* <a
href='https://www.instagram.com/txbrown__/'
className='social-link'
target='_blank'
rel='noopener noreferrer'
>
<FaInstagram color='white' />
</a>
<a
href='https://www.facebook.com/txbrown/'
className='social-link'
target='_blank'
rel='noopener noreferrer'
>
<FaFacebook color='white' />
</a>
<a
href='https://soundcloud.com/txbrown'
className='social-link'
target='_blank'
rel='noopener noreferrer'
>
<FaSoundcloud color='white' />
</a> */
}
