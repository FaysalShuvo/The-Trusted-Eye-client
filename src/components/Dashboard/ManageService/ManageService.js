import React, { useEffect, useState } from "react";
import ManageCase from "../ManageCase/ManageCase";
import SideBar from "../SideBar/SideBar";

const ManageService = () => {
  const [allCases, setAllCases] = useState([]);
  useEffect(() => {
    fetch("https://hidden-headland-12235.herokuapp.com/allCases")
      .then((res) => res.json())
      .then((data) => setAllCases(data));
  }, []);
  console.log(allCases);
  return (
    <>
      <div className="row">
        <div className="col-md-4">
          <SideBar />
        </div>
        <div className="col-md-7 mt-5">
          <h4 className="text-brand">Manage Service</h4>
          <h3>We Have {allCases.length} Cases In our Hand</h3>
          {allCases.map((allCase) => (
            <ManageCase key={allCase._id} allCase={allCase} />
          ))}
        </div>
      </div>
    </>
  );
};

export default ManageService;
