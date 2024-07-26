import React from 'react';
import fullstack from "../assets/fullstackimg.jpg";
import datascience from "../assets/datasceimg.png";
import cyber from "../assets/cyber.webp";
import career from "../assets/Careerimg.webp";

const All = () => {
  const containerStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    overflow: 'auto',
  };

  const itemStyle = {
    flex: '1 1 20%',
    margin: '5px',
    boxSizing: 'border-box',
    textAlign: 'center',
  };

  const imgStyle = {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  };

  return (
    <div style={containerStyle}>
      <div style={itemStyle}>
        <h3>Full Stack Development</h3>
        <img src={fullstack} alt="Full Stack Development" style={imgStyle} />
      </div>
      <div style={itemStyle}>
        <h3>Data Science</h3>
        <img src={datascience} alt="Data Science" style={imgStyle} />
      </div>
      <div style={itemStyle}>
        <h3>Cybersecurity</h3>
        <img src={cyber} alt="Cybersecurity" style={imgStyle} />
      </div>
      <div style={itemStyle}>
        <h3>Career Opportunities</h3>
        <img src={career} alt="Career Opportunities" style={imgStyle} />
      </div>
    </div>
  );
};

export default All;
