import React, { useState } from "react";
import SideBarCustomer from "../SideBarCustomer/SideBarCustomer";

const AddComment = () => {
  const [comment, setComment] = useState({});
  const handleBlur = (e) => {
    const newComment = { ...comment };
    newComment[e.target.name] = e.target.value;
    setComment(newComment);
  };
  const handleSubmit = (e) => {
    const addNewComment = {
      email: comment.email,
      review: comment.comment,
    };
    const url = `https://hidden-headland-12235.herokuapp.com/addComment`;
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(addNewComment),
    });

    console.log("addNewComment", addNewComment);
  };
  console.log(comment);
  return (
    <>
      <div className="row">
        <div className="col-md-4">
          <SideBarCustomer />
        </div>
        <div className="col-md-7 py-5 mt-5 ">
          <h4 className="text-brand mb-3">Add Comment</h4>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label">Your Email</label>
              <input
                onBlur={handleBlur}
                type="email"
                className="form-control"
                name="email"
              />
            </div>
            <div className="mb-3">
              <input
                type="text"
                style={{ height: "100px", fontSize: "20px", fontWeight: "600" }}
                onBlur={handleBlur}
                className="form-control"
                name="comment"
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

export default AddComment;
