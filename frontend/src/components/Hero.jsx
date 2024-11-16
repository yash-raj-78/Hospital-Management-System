import React from "react";

const Hero = ({ title, imageUrl }) => {
  return (
    <>
      <div className="hero container">
        <div className="banner">
          <h1>{title}</h1>
          <p>
          AIIMS stands for All India Institute of Medical Sciences. 
          It's a group of autonomous public medical colleges of 
          higher education in India. AIIMS institutions are known 
          for offering top-tier medical education, research, 
          and healthcare services. Established in 1956, 
          the primary AIIMS in New Delhi is renowned globally. 
          There are multiple AIIMS across India, each providing medical education,
          research opportunities, and patient care services..
          </p>
        </div>
        <div className="banner">
          <img src={imageUrl} alt="hero" className="animated-image" />
          <span>
            <img src="/Vector.png" alt="vector" />
          </span>
        </div>
      </div>
    </>
  );
};

export default Hero;
