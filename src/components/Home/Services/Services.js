import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "./Services.css";
import ServiceDetails from "../ServiceDetails/ServiceDetails";
const Services = () => {
  const [serviceData, setServiceData] = useState([]);
  useEffect(() => {
    fetch("https://hidden-headland-12235.herokuapp.com/services")
      .then((res) => res.json())
      .then((data) => setServiceData(data));
  }, []);
  console.log(serviceData);
  return (
    <section className="service-container container mt-5">
      <div className="text-center">
        <h5>OUR SERVICES</h5>
        <h2 className="text-brand font-weight-bold">Services We Provide</h2>
      </div>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {
            scale: 0.8,
            opacity: 0,
          },
          visible: {
            scale: 1,
            opacity: 1,
            transition: {
              delay: 0.4,
            },
          },
        }}
      >
        <div className="row d-flex justify-content-center">
          {serviceData.map((service) => (
            <ServiceDetails key={service._id} service={service} />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Services;
