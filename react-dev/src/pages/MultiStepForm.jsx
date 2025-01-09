import React, { useState } from "react";
import Button from "../Components/Button/Button";

const MultiStepForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    password: "",
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
    console.log(userData, " form Submit");
    setFormData({
      name: "",
      email: "",
      address: "",
      city: "",
      password: "",
    });
  };
  const handleDelete = (ind) => {
    const updatedData = userData.filter((_, t) => t !== ind);
    setUserData(updatedData);
  };
  return (
    <>
      <div className="row">
        <div className="col-6">
          <form action="">
            {step === 1 && (
              <div className="container mt-3">
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
                      id="name"
                    />
                  </div>
                  <div className="col-4">
                    <label htmlFor="" className="form-label">
                      Enter Your Password
                    </label>
                    <input
                      type="password"
                      name="password"
                      className="form-control"
                      onChange={handleChange}
                      value={formData.password}
                      id="password"
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-3 mt-2">
                    <Button
                      onClick={handleNext}
                      className=" btn-primaryOne btn-small"
                      label="Next"
                    ></Button>
                  </div>
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="container mt-3">
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
                    <Button
                      onClick={handlePrev}
                      className="btn-primaryOne btn-small"
                      label="Previous"
                    ></Button>
                  </div>
                  <div className="col-3">
                    <Button
                      onClick={handleNext}
                      className="btn-primaryOne btn-small"
                      label="Next"
                    ></Button>
                  </div>
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="container mt-3">
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
                    <Button
                      onClick={handlePrev}
                      className="btn-primaryOne btn-small"
                      label="Previous"
                    ></Button>
                  </div>
                  <div className="col-3">
                    <Button
                      onClick={handleNext}
                      className="btn-primaryOne btn-small"
                      label="Next"
                    ></Button>
                  </div>
                </div>
              </div>
            )}

            {step === 4 && (
              <div className="container mt-3">
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
                    <Button
                      onClick={handlePrev}
                      className="btn-primaryOne btn-small"
                      label="Previous"
                    ></Button>
                  </div>
                  <div className="col-3">
                    <Button
                      onClick={handleSubmit}
                      className="btn-primaryOne btn-small"
                      label="Submit"
                    ></Button>
                  </div>
                </div>
              </div>
            )}
          </form>
        </div>
        <div className="col-6">
          <table className="table table-light mt-3">
            <thead>
              <tr>
                <th>Name</th>
                <th>email</th>
                <th>address</th>
                <th>city</th>
                <th>Opration</th>
              </tr>
            </thead>
            <tbody>
              {userData &&
                userData.map((ele, ind) => {
                  return (
                    <tr key={ind}>
                      {/* <span>{ele.name}</span>
                <span>{ele.email}</span>
                <span>{ele.address}</span>
                <span>{ele.city}</span> */}
                      <td>{ele.name}</td>
                      <td>{ele.email}</td>
                      <td>{ele.address}</td>
                      <td>{ele.city}</td>
                      <td>
                        <Button
                          className="btn btn-danger"
                          onClick={() => handleDelete(ind)}
                        >
                          Delete
                        </Button>
                      </td>
                    </tr>
                  );
                })}
            </tbody>{" "}
          </table>
        </div>
      </div>
    </>
  );
};

export default MultiStepForm;
