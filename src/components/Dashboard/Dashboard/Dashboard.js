import React from "react";
import SideBar from "../SideBar/SideBar";

const Dashboard = () => {
  return (
    <>
      <div className="row">
      
        <div className="col-md-2">
          <SideBar />
        </div>
        <div className="col-md-9">
          <h1>only dashborad</h1>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
