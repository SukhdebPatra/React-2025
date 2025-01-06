import React, { useState } from "react";

const MultiStepForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    city: "",
  });
  const [step, setStep] = useState(1);
  const [userData, setUserData] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleNext = () => setStep(step + 1);
  const handlePrev = () => setStep(step - 1);

  const handleSubmit = (e) => {
    e.preventDefault();
    setUserData([...userData, formData]); // using this in a object you will loose the first data
    console.log(userData, "from user data after form Submit");
    setFormData({
      name: "",
      email: "",
      address: "",
      city: "",
    });
  };
  const handleDelete = (ind) => {
    const updatedData = userData.filter((_, t) => t !== ind);
    setUserData(updatedData);
  };
  return (
    <>
      <form action="">
        {step === 1 && (
          <div className="container">
            <div className="row">
              <div className="col-4">
                <label htmlFor="" className="form-label">
                  Enter Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  onChange={handleChange}
                  value={formData.name}
                  id=""
                />
              </div>
            </div>
            <div className="row">
              <div className="col-3 mt-2">
                <button onClick={handleNext} className="btn btn-sm btn-primary">
                  Next
                </button>
              </div>
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="container">
            <div className="row">
              <div className="col-4">
                <label htmlFor="" className="form-label">
                  Enter Your Email
                </label>
                <input
                  type="text"
                  name="email"
                  className="form-control"
                  onChange={handleChange}
                  value={formData.email}
                  id=""
                />
              </div>
            </div>
            <div className="row mt-2">
              <div className="col-3 ">
                <button onClick={handlePrev} className="btn btn-sm btn-primary">
                  Previous
                </button>
              </div>
              <div className="col-3">
                <button onClick={handleNext} className="btn btn-sm btn-primary">
                  Next
                </button>
              </div>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="container">
            <div className="row">
              <div className="col-4">
                <label htmlFor="" className="form-label">
                  Enter Your Address
                </label>
                <input
                  type="text"
                  name="address"
                  className="form-control"
                  onChange={handleChange}
                  value={formData.address}
                  id=""
                />
              </div>
            </div>
            <div className="row mt-2">
              <div className="col-3 ">
                <button onClick={handlePrev} className="btn btn-sm btn-primary">
                  Previous
                </button>
              </div>
              <div className="col-3">
                <button onClick={handleNext} className="btn btn-sm btn-primary">
                  Next
                </button>
              </div>
            </div>
          </div>
        )}

        {step === 4 && (
          <div className="container">
            <div className="row">
              <div className="col-4">
                <label htmlFor="" className="form-label">
                  Enter Your City
                </label>
                <input
                  type="text"
                  name="city"
                  className="form-control"
                  onChange={handleChange}
                  value={formData.city}
                  id=""
                />
              </div>
            </div>
            <div className="row mt-2">
              <div className="col-3 ">
                <button onClick={handlePrev} className="btn btn-sm btn-primary">
                  Previous
                </button>
              </div>
              <div className="col-3">
                <button
                  onClick={handleSubmit}
                  className="btn btn-sm btn-primary"
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        )}
        {/* <div className="row mt-2">
          <div className="col-3 ">
            <button className="btn btn-sm">Previous</button>
          </div>
          <div className="col-3">
            <button className="btn btn-sm">Next</button>
          </div>
        </div> */}
      </form>
      <ul>
        {userData &&
          userData.map((ele, ind) => {
            return (
              <li key={ind}>
                <span>{ele.name}</span>
                <span>{ele.email}</span>
                <span>{ele.address}</span>
                <span>{ele.city}</span>
                <span>
                  <button
                    className="btn btn-danger"
                    onClick={() => handleDelete(ind)}
                  >
                    Delete
                  </button>
                </span>
              </li>
            );
          })}
      </ul>
    </>
  );
};

export default MultiStepForm;
