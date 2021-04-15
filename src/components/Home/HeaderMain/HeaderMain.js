import React from "react";
import "./HeaderMain.css";
import header from "../../../image/header.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
const HeaderMain = () => {
  return (
    <div className="header-bg">
      <section className="container">
        <div className="row ">
          <div className="col-md-6 pt-5 mt-2">
            <h4 className="text-uppercase">
              If you think it's happening ; it probably is!
            </h4>
            <h1
              className="mt-5"
              style={{ fontSize: "60px", fontWeight: "bold" }}
            >
              This Best Private Detective Services
            </h1>
            <button className="btn text-white btn-brand p-2 mt-3">
              Discover More
            </button>
          </div>
          <div className="col-md-6 mt-4 p-5">
            <img style={{ height: "400px" }} src={header} alt="" />
          </div>
        </div>

        <div className="row header-bottom">
          <div className="col-md-6">
            <div className="row seeking-service">
              <div className="col-md-2 pt-4">
                <FontAwesomeIcon style={{ fontSize: "50px" }} icon={faCoffee} />
              </div>
              <div className="col-md-10 pt-3">
                <h5>SEEKING SERVICE</h5>
                <h3>Know The Truth for Peace Of Mind</h3>
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <div className="row hire">
              <div className="col-md-2 pt-4">
                <FontAwesomeIcon style={{ fontSize: "50px" }} icon={faCoffee} />
              </div>
              <div className="col-md-10 pt-3">
                <h5>WE'RE READY TO HELP</h5>
                <h3>Let's Hire a Private Investigator</h3>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeaderMain;
