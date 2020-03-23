import PropTypes from 'prop-types';
import React from 'react';

const AlbumCard = ({ coverImage, url, links }) => {
  return (
    <a href={url} target='_blank' rel='noopener'>
      <img src={coverImage} className='App-logo' alt='logo' />
    </a>
  );
};

AlbumCard.propTypes = {
  coverImage: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
};

export default AlbumCard;
