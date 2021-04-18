import React from "react";
import { Link } from "react-router-dom";
import "./SideBar.css";

import {
  faThList,
  faPlus,
  faCog,
  faAddressBook,
  faUserPlus,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "react-bootstrap";

const SideBar = () => {
  return (
    <div>
      <div
        className="sidebar d-flex flex-column justify-content-between py-5 px-4"
        style={{ height: "100vh" }}
      >
        <ul className="list-unstyled">
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/dashboard/order-list"
              className="text-white "
            >
              <FontAwesomeIcon icon={faThList} /> <span>Order List</span>
            </Link>
          </li>
          <div>
            <li>
              <Link
                style={{ textDecoration: "none" }}
                to="/dashboard/add-service"
                className="text-white"
              >
                <FontAwesomeIcon icon={faPlus} /> <span>Add Service</span>
              </Link>
            </li>
            <li>
              <Link
                style={{ textDecoration: "none" }}
                to="/dashboard/add-admin"
                className="text-white"
              >
                <FontAwesomeIcon icon={faUserPlus} /> <span>Make Admin</span>
              </Link>
            </li>

            <li>
              <Link
                style={{ textDecoration: "none" }}
                to="/dashboard/all-service"
                className="text-white"
              >
                <FontAwesomeIcon icon={faAddressBook} />{" "}
                <span>Manage Service</span>
              </Link>
            </li>
            <Button as={Link} to="/" className="btn-danger mt-5">
              Home
            </Button>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
