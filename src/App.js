import React from 'react';
import { FaFacebook, FaInstagram, FaSoundcloud } from 'react-icons/fa';
import AlbumCard from './AlbumCard';
import './App.css';
import Links from './Links';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <p>TXBROWN</p>
        <AlbumCard
          url={'https://smarturl.it/a6ztpz'}
          coverImage={process.env.PUBLIC_URL + '/cold_season_cover.png'}
        />

        <AlbumCard
          url={'https://smarturl.it/laqxxz'}
          coverImage={process.env.PUBLIC_URL + '/fading_season_cover.jpg'}
        />

        <AlbumCard
          url={'https://smarturl.it/barbecue-season'}
          coverImage={process.env.PUBLIC_URL + '/barbacue__season_cover.png'}
        />

        <Links
          links={[
            {
              url: 'https://www.instagram.com/txbrown__/',
              renderIcon: () => <FaInstagram color='white' />
            },
            {
              url: 'https://www.facebook.com/txbrown/',
              renderIcon: () => <FaFacebook color='white' />
            },
            {
              url: 'https://soundcloud.com/txbrown',
              renderIcon: () => <FaSoundcloud color='white' />
            }
          ]}
        />
      </header>
    </div>
  );
}

export default App;
