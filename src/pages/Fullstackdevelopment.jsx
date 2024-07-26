import React from 'react';
import img1 from '../assets/fullstackimg.jpg';

const FullstackDevelopment = () => {
  return (
    <div>
      <h1 style={{ textAlign: 'center', margin: '20px 0' }}>
        Full Stack Development
      </h1>
      <img src={img1} alt="Full Stack Development" style={{ width: '50%', height: 'auto' }} />
      <div>
        <h3 style={{ textAlign: 'center', margin: '20px 0' }}>
          Welcome to the Full Stack Development page. Here, you can explore the 
          comprehensive and versatile field of full stack development. Our company 
          excels in creating robust, scalable, and user-friendly applications by 
          integrating both front-end and back-end technologies. We provide a collaborative 
          environment that encourages continuous learning and innovation. The image below 
          illustrates the seamless integration of various technologies that we employ to 
          build efficient and effective software solutions.
        </h3>
      </div>
    </div>
  );
};

export default FullstackDevelopment;
