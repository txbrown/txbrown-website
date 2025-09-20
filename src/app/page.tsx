import React from 'react';
import { FaInstagram, FaSoundcloud, FaSpotify, FaApple } from 'react-icons/fa';
import Links from '../components/Links/Links';
import AlbumCard from '@/components/AlbumCard/AlbumCard';

function App() {
  const albums = [
    {
      title: 'Cold Season',
      url: 'https://smarturl.it/a6ztpz',
      coverImage: '/cold_season_cover.png'
    },
    {
      title: 'Fading Season',
      url: 'https://smarturl.it/laqxxz',
      coverImage: '/fading_season_cover.jpg'
    },
    {
      title: 'Barbecue Season',
      url: 'https://smarturl.it/barbecue-season',
      coverImage: '/barbacue__season_cover.png'
    }
  ];

  const socialLinks = [
    {
      url: 'https://www.instagram.com/txbrown__/',
      renderIcon: () => <FaInstagram size={20} />,
    },
    {
      url: 'https://soundcloud.com/txbrown',
      renderIcon: () => <FaSoundcloud size={20} />,
    },
    {
      url: 'https://open.spotify.com/artist/1eabFeAdVQMpFaqFFd383G?si=CROwjpUvSdm86G_Wtfniug',
      renderIcon: () => <FaSpotify size={20} />,
    },
    {
      url: 'https://music.apple.com/us/artist/txbrown/1488556413',
      renderIcon: () => <FaApple size={20} />,
    },
  ];

  return (
    <main>
      {/* Editorial Hero Section */}
      <section className="editorial-hero">
        <div className="hero-grid">
          <div className="hero-content">
            <h1 className="hero-title">TXBROWN</h1>
            <p className="hero-subtitle">Music Producer • London</p>
            <p className="hero-description">
                        </p>
            <div className="hero-bio">
              <p>
                TXBROWN is a music producer who blends the foundations of hip-hop with jazz and soul to create sonic textures.
                His journey has taken him from beat-making to bass guitar, evolving his sound towards lo-fi and R&B territories
                while maintaining that core hip-hop essence. He's based in London and when not producing he is engineering software –
                two worlds that intersect in Midicircuit, an app he built to help others learn to make music in easy and interactive way.
              </p>
            </div>
            <Links links={socialLinks} />
          </div>
          <div className="hero-image">
            <img src="/pictures/24970002.jpeg" alt="TXBROWN - Music Producer" />
          </div>
        </div>
      </section>

      {/* Albums Section */}
      <section className="albums-section">
        <div className="container">
          <h2 className="section-title">Latest Releases</h2>
          <div className="albums-grid">
            {albums.map((album, index) => (
              <AlbumCard
                key={index}
                title={album.title}
                url={album.url}
                coverImage={album.coverImage}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

export default App;
