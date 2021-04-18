import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import SideBar from "../SideBar/SideBar";

const OrderList = () => {
  const [allCases, setAllCases] = useState([]);
  useEffect(() => {
    fetch("https://hidden-headland-12235.herokuapp.com/allCases")
      .then((res) => res.json())
      .then((data) => setAllCases(data));
  }, []);
  console.log(allCases);
  return (
    <div>
      <div className="row">
        <div className="col-md-4">
          <SideBar />
        </div>
        <div className="col-md-7 py-5 mt-5">
          <h4 className="text-brand">Your cases to finish</h4>
          <Table className="shadow" striped bordered hover variant="danger">
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th> Email</th>
                <th>Title</th>
                <th>Order Time</th>
                <th> Money</th>
              </tr>
            </thead>
            <tbody>
              {allCases.map((allCase, index) => (
                <tr key={allCase._id}>
                  <td>{index + 1}</td>
                  <td>{allCase.name}</td>
                  <td>{allCase.email}</td>
                  <td>{allCase.title}</td>
                  <td>
                    {new Date(allCase.orderTime).toDateString("dd/MM/yyyy")}
                  </td>
                  <td>{allCase.price}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default OrderList;
