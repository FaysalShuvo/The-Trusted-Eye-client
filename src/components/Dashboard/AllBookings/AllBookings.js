import React from "react";
import { Table } from "react-bootstrap";

const AllBookings = ({ cases }) => {
  return (
    <>
      <Table className="shadow" striped bordered hover variant="danger">
        <thead>
          <tr>
            <th>#</th>
            <th> Name</th>
            <th>Case Name</th>
            <th>Cost</th>
            <th>status</th>
          </tr>
        </thead>
        <tbody>
          {cases.map((caseList, index) => (
            <tr>
              <td>{index + 1}</td>
              <td>{caseList.name}</td>
              <td>{caseList.title}</td>
              <td>{caseList.price}</td>
              <td>On Going</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
};

export default AllBookings;
