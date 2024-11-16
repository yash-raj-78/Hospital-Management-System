import React from "react";
import Hero from "../components/Hero";
import Biography from "../components/Biography";
const AboutUs = () => {
  return (
    <>
      <Hero
        title={"Learn More About Us | AIIMS Medical Institute"}
        imageUrl={"/about1.jpg"}
      />
      <Biography imageUrl={"/experiment.jpg"} />
    </>
  );
};

export default AboutUs;
