import React from 'react';
import img1 from '../assets/fullstackimg.jpg';

const FullstackDevelopment = () => {
  return (
    <div>
      <h1 style={{ textAlign: 'center', margin: '20px 0' }}>
        Full Stack Development
      </h1>
      <img src={img1} alt="Full Stack Development" style={{ width: '100%', height: 'auto' }} />
    </div>
  );
};

export default FullstackDevelopment;
