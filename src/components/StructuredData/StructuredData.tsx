import React from 'react';

const StructuredData: React.FC = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": "#person",
        "name": "TXBROWN",
        "alternateName": "TX Brown",
        "description": "London-based music producer blending hip-hop foundations with jazz and soul to create unique sonic textures",
        "image": "/pictures/24970002.jpeg",
        "sameAs": [
          "https://www.instagram.com/txbrown__/",
          "https://soundcloud.com/txbrown",
          "https://txbrown.bandcamp.com",
          "https://open.spotify.com/artist/1eabFeAdVQMpFaqFFd383G",
          "https://music.apple.com/us/artist/txbrown/1488556413"
        ],
        "jobTitle": "Music Producer",
        "worksFor": {
          "@type": "Organization",
          "name": "Independent"
        },
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "London",
          "addressCountry": "GB"
        },
        "genre": ["Hip-Hop", "Jazz", "Soul", "Lo-Fi", "R&B"],
        "instrument": ["Bass Guitar", "Digital Audio Workstation"],
        "knowsAbout": ["Music Production", "Beat Making", "Software Engineering", "App Development"]
      },
      {
        "@type": "MusicGroup",
        "@id": "#musicgroup",
        "name": "TXBROWN",
        "description": "Music producer blending hip-hop, jazz, and soul to create sonic textures",
        "genre": ["Hip-Hop", "Jazz", "Soul", "Lo-Fi", "R&B"],
        "member": {
          "@id": "#person"
        },
        "foundingLocation": {
          "@type": "Place",
          "name": "London, UK"
        },
        "album": [
          {
            "@type": "MusicAlbum",
            "name": "Cold Season",
            "url": "https://txbrown.bandcamp.com/album/cold-season",
            "image": "/cold_season_cover.png"
          },
          {
            "@type": "MusicAlbum",
            "name": "Fading Season",
            "url": "https://txbrown.bandcamp.com/album/fading-season-2019",
            "image": "/fading_season_cover.jpg"
          },
          {
            "@type": "MusicAlbum",
            "name": "Barbecue Season",
            "url": "https://txbrown.bandcamp.com/album/barbecue-season-2016",
            "image": "/barbacue__season_cover.png"
          }
        ]
      },
      {
        "@type": "WebSite",
        "@id": "#website",
        "name": "TXBROWN - Music Producer",
        "description": "Official website of TXBROWN, London-based music producer blending hip-hop, jazz, and soul",
        "publisher": {
          "@id": "#person"
        }
      },
      {
        "@type": "SoftwareApplication",
        "name": "Midicircuit",
        "description": "An app built to help others learn to make music in an easy and interactive way",
        "creator": {
          "@id": "#person"
        },
        "applicationCategory": "Music Production",
        "operatingSystem": "Cross-platform"
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
};

export default StructuredData;