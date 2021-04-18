import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {} from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <>
      <div className="row">
        <div className="col-md-3 ml-4">
          <h2 className="text-brand">The Trusted Eye</h2>

          <address>
            <a href="mailto:jim@rock.com">theTrustedey@rock.com</a> <br />
            <a href="tel:+13115552368">(311) 555-2368</a>
          </address>
        </div>
        <div className="col-md-4">
          <h3 className="text-brand">Services</h3>
          <ul>
            <li style={{ listStyle: "none" }}>
              <a href="/">Find a person</a>
            </li>
            <li style={{ listStyle: "none" }}>
              <a href="/">Murder Mystery</a>
            </li>
            <li style={{ listStyle: "none" }}>
              <a href="/">Find a person</a>
            </li>
            <li style={{ listStyle: "none" }}>
              <a href="/">Murder Mystery</a>
            </li>
          </ul>
        </div>
        <div className="col-md-4">
          <h3 className="text-brand">Find Us in</h3>
          <ul>
            <li style={{ listStyle: "none" }}>
              <a href="https://www.facebook.com/">Facebook</a>
            </li>
            <li style={{ listStyle: "none" }}>
              <a href="https://www.google.com/">Google</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Footer;
