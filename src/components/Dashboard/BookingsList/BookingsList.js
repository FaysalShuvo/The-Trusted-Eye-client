import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { Spinner } from "react-bootstrap";
import { UserContext } from "../../../App";
import AllBookings from "../AllBookings/AllBookings";
import SideBarCustomer from "../SideBarCustomer/SideBarCustomer";

const BookingsList = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const [cases, setCases] = useState([]);

  useEffect(() => {
    fetch(
      "https://hidden-headland-12235.herokuapp.com/cases?email=" +
        loggedInUser.email
    )
      .then((res) => res.json())
      .then((data) => setCases(data));
  }, []);

  console.log(cases);
  return (
    <>
      <div className="row">
        <div className="col-md-4">
          <SideBarCustomer />
        </div>
        <div className="col-md-7 py-5 mt-5">
          <h4 className="text-brand">
            Welcome back {loggedInUser.name}. here is your list of problem your
            asked us to solve!{" "}
          </h4>
          {cases.length === 0 ? (
            <Spinner animation="grow" variant="danger" />
          ) : (
            <AllBookings cases={cases} />
          )}
        </div>
      </div>
    </>
  );
};

export default BookingsList;
