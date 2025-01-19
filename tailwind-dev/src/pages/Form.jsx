import React, { useState } from "react";

const Form = () => {
  const [userInput, setUserInput] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const [userData, setUserData] = useState([]);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserInput({ ...userInput, [name]: value });
    console.log(userInput);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // setUserData([...userData, userInput]); // this will empty the first array
    setUserData((pre) => {
      const updatedUserData = [...pre, userInput]; // most up-to-date state.
      return updatedUserData;
    });
    setUserInput({
      name: "",
      email: "",
      phone: "",
    });
    console.log(userData, "fromuserData");
  };
  const handleDelete = (ind) => {
    const updateData = userData.filter((_, t) => t !== ind);
    setUserData(updateData);
  };
  return (
    <>
      <form action="" onSubmit={handleSubmit}>
        <div className="container mt-3">
          <div className="row">
            <div className="col-6">
              <label htmlFor="" className="form-label">
                Name
              </label>
              <input
                value={userInput.name}
                onChange={handleChange}
                type="text"
                className="form-control"
                name="name"
                id=""
              />
            </div>
            <div className="col-6">
              <label htmlFor="" className="form-label">
                Phone
              </label>
              <input
                value={userInput.phone}
                onChange={handleChange}
                type="text"
                className="form-control"
                name="phone"
                id=""
              />
            </div>
          </div>
          <div className="row">
            <div className="col-6">
              <label htmlFor="" className="form-label">
                email
              </label>
              <input
                value={userInput.email}
                onChange={handleChange}
                type="text"
                className="form-control"
                name="email"
                id=""
              />
            </div>
          </div>
          <div className="row mt-3">
            <div className="col-3">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
          </div>
        </div>
      </form>
      {userData.map((ele, ind) => {
        return (
          <div key={ind} className="p-3">
            <span className="text-2xl px-3 text-red-600">{ele.name}</span>
            <span className="text-2xl px-3 text-red-600">{ele.phone}</span>
            <span className="text-2xl px-3 text-red-600">{ele.email}</span>
            <span>
              <button
                className="btn btn-danger"
                onClick={() => handleDelete(ind)}
              >
                Delete
              </button>
            </span>
          </div>
        );
      })}
    </>
  );
};

export default Form;
