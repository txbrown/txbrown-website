import React from 'react';

type Props = {
  coverImage: string;
  url: string;
};

const AlbumCard: React.FC<Props> = ({ coverImage, url }) => {
  return (
    <a href={url} target='_blank' rel='noopener noreferrer'>
      <img src={coverImage} className='App-logo' alt='logo' />
    </a>
  );
};

export default AlbumCard;
