import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { resetForm, setFormData } from "../Redux/formSliice";

const Form = () => {
  const dispatch = useDispatch();
  const formData = useSelector((state) => state.form);

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch(setFormData({ name, value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("form data", formData);
    dispatch(resetForm());
  };
  const handleReset = () => {
    dispatch(resetForm());
  };
  return (
    <>
      <div className="container">
        <form onSubmit={handleSubmit}>
          <div className="mb-1">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>

          <div className="mb-1">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div className="mb-1">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
          </div>

          <div className="mb-1">
            <label htmlFor="address" className="form-label">
              Address
            </label>
            <input
              type="text"
              className="form-control"
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
            />
          </div>

          <div className="mb-1">
            <label htmlFor="pin" className="form-label">
              Pin Code
            </label>
            <input
              type="text"
              className="form-control"
              id="pin"
              name="pin"
              value={formData.pin}
              onChange={handleChange}
            />
          </div>

          <div className="mb-1">
            <label htmlFor="country" className="form-label">
              Country
            </label>
            <select
              className="form-control"
              id="country"
              name="country"
              value={formData.country}
              onChange={handleChange}
            >
              <option value="">Select Country</option>
              <option value="USA">USA</option>
              <option value="Canada">Canada</option>
              <option value="India">India</option>
            </select>
          </div>

          <div className="mb-1">
            <label htmlFor="range" className="form-label">
              Range (1-100)
            </label>
            <input
              type="range"
              className="form-range"
              id="range"
              name="range"
              min="1"
              max="100"
              value={formData.range}
              onChange={handleChange}
            />
            <div>Range Value: {formData.range}</div>
          </div>

          <div className="mb-1">
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="radio"
                value="option1"
                checked={formData.radio === "option1"}
                onChange={handleChange}
              />
              <label className="form-check-label" htmlFor="radio1">
                Option 1
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="radio"
                value="option2"
                checked={formData.radio === "option2"}
                onChange={handleChange}
              />
              <label className="form-check-label" htmlFor="radio2">
                Option 2
              </label>
            </div>
          </div>

          <div className="mb-1">
            <button type="submit" className="btn btn-primary ml-3">
              Submit
            </button>
            <button
              type="button"
              className="btn btn-secondary ml-2"
              onClick={handleReset}
            >
              Reset
            </button>
          </div>
        </form>
      </div>
      {/* <div className="card">
        {formData.map((ele, ind) => {
          return (
            <div key={ind}>
              <span>{ele.name}</span>
              <span>{ele.email}</span>
            </div>
          );
        })}
      </div> */}
    </>
  );
};

export default Form;
