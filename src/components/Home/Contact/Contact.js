import React from "react";
import "./Contact.css";

const Contact = (e) => {
  const handleMessage = (data) => {
    alert("You Got Your message!");
    console.log("clikc");
  };
  return (
    <section className="contact my-5 py-5">
      <div className="container">
        <div className="section-header text-center text-brand mb-5">
          <h4 className=" text-white ">Contact</h4>
          <h1>Always connect with us</h1>
        </div>
        <div className="col-md-9 mx-auto">
          <form onSubmit={handleMessage}>
            <div className="form-group mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Email Address *"
              />
            </div>
            <div className="form-group mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Subject *"
              />
            </div>
            <div className="form-group mb-3">
              <textarea
                name=""
                className="form-control"
                id=""
                cols="30"
                rows="10"
                placeholder="Message *"
              ></textarea>
            </div>
            <div className="form-group mb-3 text-center">
              <button type="submit" className="btn  text-white btn-brand">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
