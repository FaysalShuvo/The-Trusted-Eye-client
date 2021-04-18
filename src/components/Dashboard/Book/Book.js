import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Payment from "../Payment/Payment";
import SideBarCustomer from "../SideBarCustomer/SideBarCustomer";

const Book = () => {
  const { id } = useParams();
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    fetch("https://hidden-headland-12235.herokuapp.com/services")
      .then((res) => res.json())
      .then((data) => setBookings(data));
  }, []);
  const found = bookings.find((b) => b._id === id);
  console.log(found);
  const { title, price } = found || {};
  return (
    <>
      <div className="row">
        <div className="col-md-4">
          <SideBarCustomer />
        </div>
        <div className="col-md-6 py-5 mt-5">
          <h4 className="text-brand">Book</h4>
          <form>
            <div className="mb-3">
              <label className="form-label">Your Problem</label>
              <h2> {title}</h2>
            </div>
            <div className="mb-3">
              <h3>Cost for solving That {price}</h3>
            </div>
            {/* 
            <button type="submit" className="mb-5 btn btn-brand text-white">
              Submit
            </button> */}
          </form>
          <Payment found={found} />
        </div>
      </div>
    </>
  );
};

export default Book;
