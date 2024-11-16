import React from "react";
import Hero from "../components/Hero";
import AppointmentForm from "../components/AppointmentForm";

const Appointment = () => {
  return (
    <>
      <Hero
        title={"Schedule Your Appointment | AIIMS Medical Institute"}
        imageUrl={"/reception.jpg"}
      />
      <AppointmentForm/>
    </>
  );
};

export default Appointment;
