import React from "react";
import detective01 from "../../../image/detective-01.jpg";
import detective02 from "../../../image/detective-02.jpg";
import detective03 from "../../../image/detective-03.jpg";
import Detective from "../Detective/Detective";

const detectivesData = [
  {
    _id: 1,
    name: "Faysal",
    img: detective01,
    phone: 12121212,
  },
  {
    _id: 11,
    name: "Islam",
    img: detective02,
    phone: 12121212,
  },
  {
    _id: 111,
    name: "Shuvo",
    img: detective03,
    phone: 12121212,
  },
];

const Detectives = () => {
  return (
    <section className="my-5 py-5">
      <div className="container">
        <h2 className="text-brand text-center font-weight-bold mb-5">
          Our Detectives
        </h2>

        <div className="row  d-flex justify-content-around">
          {detectivesData.map((detective) => (
            <Detective key={detective._id} detective={detective} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Detectives;
