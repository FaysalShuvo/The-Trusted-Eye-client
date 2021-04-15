import React from "react";
import "./Services.css";
import services01 from "../../../image/service-01.jpg";
import services02 from "../../../image/service-02.jpg";
import services03 from "../../../image/service-03.jpg";
import ServiceDetails from "../ServiceDetails/ServiceDetails";
const serviceData = [
  {
    name: "Find A Person",
    img: services01,
    price: 20,
  },
  {
    name: "Murder Mystery",
    img: services02,
    price: 34,
  },
  {
    name: "Material Infidelity",
    img: services03,
    price: 54,
  },
  
];
const Services = () => {
  return (
    <section className="service-container container mt-5">
      <div className="text-center">
        <h5>OUR SERVICES</h5>
        <h2>Services We Provide</h2>
      </div>
      <div className="row d-flex justify-content-center">
        {serviceData.map((service) => (
          <ServiceDetails key={service.name} service={service} />
        ))}
      </div>
    </section>
  );
};

export default Services;
