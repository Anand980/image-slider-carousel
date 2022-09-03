import React, { useState } from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import './style.css';

export default function App() {
  const imgSrc = 'https://images.unsplash.com/photo-1507521604360-4dbd0008c950';
  return (
    <Carousel>
      <div style={{ marginBottom: '100px' }}>
        <img src={imgSrc} alt="test" />
        <p className="legend">Legend 1</p>
      </div>
      <div>
        <img src={imgSrc} alt="test" />
        <p className="legend">Legend 2</p>
      </div>
      <div>
        <img src={imgSrc} alt="test" />
        <p className="legend">Legend 3</p>
      </div>
      <div>
        <img src={imgSrc} alt="test" />
        <p className="legend">Legend 3</p>
      </div>
    </Carousel>
  );
}
