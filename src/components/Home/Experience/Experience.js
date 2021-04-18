import React from "react";
import ReactPlayer from "react-player";
import "./Experience.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

const Experience = () => {
  return (
    <section className="container experience">
      <div className="row">
        <div className="col-md-6  mt-5">
          <h2 className="text-brand text-center font-weight-bold mb-5">
            30 Year Experience
          </h2>
          <p className="text-center mb-5">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio illum
            animi corporis, dolorem sit dolore obcaecati porro totam numquam
            iure officiis nostrum soluta recusandae vitae hic harum illo Lorem
            ipsum dolor sit, amet consectetur adipisicing elit. Maxime officia
            aliquam facilis perspiciatis, iure amet? Cumque nulla itaque quos
            harum eum magnam? Sunt accusamus consectetur quae, cum voluptas
            blanditiis ut! pariatur modi.
          </p>

          <div className="row">
            <div className="col-md-6">
              <ul>
                <li>
                  <FontAwesomeIcon
                    className="text-brand"
                    icon={faCheckCircle}
                  />
                  <span className="ml-3">99% success rate </span> solving case
                </li>
              </ul>
              <ul>
                <li>
                  <FontAwesomeIcon
                    className="text-brand"
                    icon={faCheckCircle}
                  />
                  <span className="ml-3">100% confidential</span>
                </li>
              </ul>
              <ul>
                <li>
                  <FontAwesomeIcon
                    className="text-brand"
                    icon={faCheckCircle}
                  />
                  <span className="ml-3">Affordable fees</span>
                </li>
              </ul>
            </div>
            <div className="col-md-6">
              <ul>
                <li>
                  <FontAwesomeIcon
                    className="text-brand"
                    icon={faCheckCircle}
                  />
                  <span className="ml-3">Free consultation</span>
                </li>
              </ul>
              <ul>
                <li>
                  <FontAwesomeIcon
                    className="text-brand"
                    icon={faCheckCircle}
                  />
                  <span className="ml-3">Over 30 years Experience</span>
                </li>
              </ul>
              <ul>
                <li>
                  <FontAwesomeIcon
                    className="text-brand"
                    icon={faCheckCircle}
                  />
                  <span className="ml-3"> Trustable!</span>
                </li>
              </ul>
            </div>
          </div>
          {/* <button className="btn btn-brand text-white">HIRE US</button> */}
        </div>
        <div className="col-md-6 p-3 mt-5">
          <ReactPlayer
            className="xp-player"
            url="https://www.youtube.com/watch?v=iKUzhzustok"
          />
        </div>
      </div>
    </section>
  );
};

export default Experience;
