import axios from "axios";
import React, { useState } from "react";
import SideBar from "../../SideBar/SideBar";

const AddService = () => {
  const [service, setService] = useState({});
  const [imageURL, setImageURL] = useState(null);
  const handleImageUpload = (event) => {
    const imageData = new FormData();
    imageData.set("key", "aa24c285fd37f69ddfc3a52ac77994b2");
    imageData.append("image", event.target.files[0]);

    axios
      .post("https://api.imgbb.com/1/upload", imageData)
      .then(function (response) {
        setImageURL(response.data.data.display_url);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  const handleBlur = (e) => {
    const newService = { ...service };
    newService[e.target.name] = e.target.value;
    setService(newService);
  };
  const handleSubmit = (e) => {
    const newService = {
      title: service.name,
      description: service.description,
      price: service.price,
      imageURL: imageURL,
    };
    const url = `https://hidden-headland-12235.herokuapp.com/addService`;
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newService),
    });

    console.log("ads", newService);
    // e.preventDefault();
  };

  return (
    <>
      <div className="row">
        <div className="col-md-2">
          <SideBar />
        </div>
        <div className="col-md-9 py-5 mt-5">
          <h4 className="text-brand">Add Service</h4>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label">Service Title</label>
              <input
                onBlur={handleBlur}
                type="text"
                className="form-control"
                name="name"
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Service Description</label>
              <input
                onBlur={handleBlur}
                type="text"
                name="description"
                className="form-control"
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Service Price</label>
              <input
                onBlur={handleBlur}
                type="number"
                name="price"
                className="form-control"
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Upload you Image</label>
              <input
                type="file"
                onChange={handleImageUpload}
                className="form-control"
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

export default AddService;
