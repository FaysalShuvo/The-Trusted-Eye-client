import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import {
  faCartPlus,
  faListAlt,
  faCommentDots,
} from "@fortawesome/free-solid-svg-icons";

const SideBarCustomer = () => {
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
              to="/dashboard/bookings"
              className="text-white "
            >
              <FontAwesomeIcon icon={faCartPlus} /> <span>Book Your Case</span>
            </Link>
          </li>
          <div>
            <li>
              <Link
                style={{ textDecoration: "none" }}
                to="/dashboard/bookings-list"
                className="text-white"
              >
                <FontAwesomeIcon icon={faListAlt} />{" "}
                <span>Your Bookings List</span>
              </Link>
            </li>
            <li>
              <Link
                style={{ textDecoration: "none" }}
                to="/dashboard/add-comment"
                className="text-white"
              >
                <FontAwesomeIcon icon={faCommentDots} />{" "}
                <span>Comment To Our Detectives</span>
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

export default SideBarCustomer;
