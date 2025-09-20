import React from 'react';

type LinkItem = {
  url: string;
  renderIcon: () => React.ReactNode;
};

type Props = {
  links: LinkItem[];
};

const Links: React.FC<Props> = ({ links }) => {
  return (
    <ul className='social-links'>
      {links.map((link, index) => (
        <li key={index} className='social-link'>
          <a
            href={link.url}
            target='_blank'
            rel='noopener noreferrer'
          >
            {link.renderIcon && link.renderIcon()}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Links;
