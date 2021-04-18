import React, { useState } from "react";
import SideBar from "../SideBar/SideBar";

const AddAdmin = () => {
  const [admin, setAdmin] = useState({});
  const handleBlur = (e) => {
    const newAdmin = { ...admin };
    newAdmin[e.target.name] = e.target.value;
    setAdmin(newAdmin);
  };
  // console.log(admin);
  const handleSubmit = (e) => {
    const addNewAdmin = {
      email: admin.email,
    };
    console.log(addNewAdmin);
    const url = `https://hidden-headland-12235.herokuapp.com/addAdmin`;
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(addNewAdmin),
    });
  };
  return (
    <>
      <div className="row">
        <div className="col-md-2">
          <SideBar />
        </div>
        <div className="col-md-9 py-5 mt-5">
          <h4 className="text-brand">Add Admin</h4>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label">Email address</label>
              <input
                onBlur={handleBlur}
                type="email"
                className="form-control"
                name="email"
              />
            </div>

            <button type="submit" className="btn btn-brand text-white">
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddAdmin;
