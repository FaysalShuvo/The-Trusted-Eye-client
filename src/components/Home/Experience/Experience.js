import React from "react";
import ReactPlayer from "react-player";
import "./Experience.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

const Experience = () => {
  return (
    <section className="container experience">
      <div className="row">
        <div className="col-md-6 text-center mt-5">
          <h2>30 Year Experience</h2>
          <p>
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
                  <FontAwesomeIcon icon={faCheckCircle} />
                  lakdl
                </li>
              </ul>
              <ul>
                <li>
                  <FontAwesomeIcon icon={faCheckCircle} />
                  lakdl
                </li>
              </ul>
              <ul>
                <li>
                  <FontAwesomeIcon icon={faCheckCircle} />
                  lakdl
                </li>
              </ul>
            </div>
            <div className="col-md-6">
              <ul>
                <li>
                  <FontAwesomeIcon icon={faCheckCircle} />
                  lakdl
                </li>
              </ul>
              <ul>
                <li>
                  <FontAwesomeIcon icon={faCheckCircle} />
                  lakdl
                </li>
              </ul>
              <ul>
                <li>
                  <FontAwesomeIcon icon={faCheckCircle} />
                  lakdl
                </li>
              </ul>
            </div>
          </div>
          {/* <button className="btn btn-brand text-white">HIRE US</button> */}
        </div>
        <div className="col-md-6 p-3">
          <ReactPlayer className='xp-player' url="https://www.youtube.com/watch?v=iKUzhzustok" />
        </div>
      </div>
    </section>
  );
};

export default Experience;
