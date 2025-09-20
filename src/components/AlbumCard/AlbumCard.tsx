import React from 'react';

type Props = {
  coverImage: string;
  url: string;
  title?: string;
};

const AlbumCard: React.FC<Props> = ({ coverImage, url, title }) => {
  return (
    <a href={url} target='_blank' rel='noopener noreferrer' className='album-card'>
      <img src={coverImage} className='album-image' alt={title || 'Album cover'} />
    </a>
  );
};

export default AlbumCard;
