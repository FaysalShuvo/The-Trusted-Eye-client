import React, { useEffect, useState } from "react";
import Testimonial from "../Testimonial/Testimonial";

const Testimonials = () => {
  const [testimonialData, setTestimonialData] = useState([]);
  useEffect(() => {
    fetch("https://hidden-headland-12235.herokuapp.com/reviews")
      .then((res) => res.json())
      .then((data) => setTestimonialData(data));
  }, []);

  console.log("re", testimonialData);
  return (
    <section className="my-5 py-5">
      <div className="container ">
        <h5>TESTIMONIAL</h5>
        <h2 className="text-brand font-weight-bold mb-5">
          What is Our client is saying about us
        </h2>

        <div className="row  d-flex justify-content-around">
          {testimonialData.map((testimonial) => (
            <Testimonial key={testimonial._id} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
