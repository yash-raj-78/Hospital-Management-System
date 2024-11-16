import React from "react";

const Biography = ({imageUrl}) => {
  return (
    <>
      <div className="container biography">
        <div className="banner">
          <img src={imageUrl} alt="whoweare" />
        </div>
        <div className="banner">
          <p>Biography</p>
          <h3>Who We Are</h3>
          <p>
          AIIMS Delhi, established in 1956, is India's premier medical institution,
           known for its excellence in medical education, research, and patient care.
            Founded with the vision of offering world-class medical training and services,
            it has grown to become a globally recognized center for healthcare. 
          </p>
          <p>
            The institution offers highly competitive programs, including 
            the prestigious MBBS course, and serves as a leading hub for medical research in India.
            Its associated hospital provides specialized care across various medical fields, 
            making it a critical referral center for patients from all over the country. 
            AIIMS Delhi's alumni include some of India's most renowned medical professionals, 
            contributing significantly to healthcare advancements both nationally and internationally.
            </p>
          <p>
          AIIMS Delhi, located in New Delhi, India, is often considered 
          the gold standard for medical education and healthcare in the country. 
          It was established as part of the Indian government's post-independence 
          initiative to create centers of excellence in various fields. 
          AIIMS Delhi was envisioned to set a benchmark for medical education, 
          research, and patient care, serving as a model for other medical institutions in India.
          </p>
        </div>
      </div>
    </>
  );
};

export default Biography;
