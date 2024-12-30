import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const UserForm = () => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    dob: "",
    age: "",
    radio: "",
    file: "",
    state: "",
  });
  const [addData, setAddData] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setUserData({ ...userData, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (editIndex === null) {
      setAddData([...addData, userData]);
      console.log(userData, "from user Data");
    } else {
      // const updatedData = [...addData];
      // updatedData[editData] = input;
      // setAddDta(updatedData);
      // setEditData(null);
      const updatedData = [...addData];
      updatedData[editIndex] = userData;
      setAddData(updatedData);
      setEditIndex(null);
    }

    setUserData({
      name: "",
      email: "",
      dob: "",
      age: "",
      radio: "",
      file: "",
      state: "",
    });
  };

  const handleDelete = (ind) => {
    const updatedData = addData.filter((_, i) => i !== ind);
    setAddData(updatedData);
  };

  const handleEdit = (ind) => {
    console.log(ind);
    setUserData(addData[ind]);
    setEditIndex(ind);
  };
  return (
    <>
      <form action="" onSubmit={handleSubmit}>
        <div
          className="container mt-3"
          //   style={{ backgroundColor: "lightblack" }}
        >
          <div
            className="card"
            style={{ padding: "5%", backgroundColor: "lightblue" }}
          >
            <h1 className="text-success">User Details</h1>
            <div className="row">
              <div className="col-6">
                <input
                  className="form-control"
                  type="text"
                  placeholder="Enter Name"
                  name="name"
                  value={userData.name}
                  onChange={handleChange}
                  id=""
                />
              </div>
              <div className="col-6">
                <input
                  className="form-control"
                  type="text"
                  placeholder="Enter Email"
                  name="email"
                  value={userData.email}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="row mt-2">
              <div className="col-6">
                <input
                  type="date"
                  placeholder="Enter Date of birth"
                  name="dob"
                  value={userData.dob}
                  onChange={handleChange}
                  className="form-control"
                />
              </div>
              <div className="col-6">
                <label htmlFor="">
                  Select age <span>{userData.age}</span>
                </label>
                <input
                  type="range"
                  min="1"
                  max="100"
                  placeholder="Enter age"
                  name="age"
                  class="form-range"
                  value={userData.age}
                  onChange={handleChange}
                />{" "}
              </div>
            </div>
            <div className="row mt-2">
              <div className="col-6 t-1">
                <input
                  type="radio"
                  //   className="form-control"
                  style={{ marginRight: "10px", position: "relative" }}
                  class="form-check-input"
                  placeholder="Enter radio"
                  name="radio"
                  value="active"
                  checked={userData.radio === "active"}
                  onChange={handleChange}
                />
                <label htmlFor="">Active</label>
                <br />

                <input
                  type="radio"
                  //   className="form-control"
                  style={{ marginRight: "10px", position: "relative" }}
                  class="form-check-input"
                  placeholder="Enter radio"
                  name="radio"
                  value="no"
                  checked={userData.radio === "no"}
                  onChange={handleChange}
                />
                <label htmlFor="">No</label>
              </div>
              <div className="col-6">
                <label htmlFor="" className="form-label">
                  State
                </label>
                <select
                  className="form-control"
                  name="state"
                  onChange={handleChange}
                  value={userData.state}
                  id=""
                >
                  <option selected>Choose...</option>
                  <option value="jharkhand">Jharkhand</option>
                  <option value="orisa">orisa</option>
                  <option value="bihar">Bihar</option>
                  <option value="up">Up</option>
                </select>
              </div>
              {/* <div className="col-6">
                <input
                  type="file"
                  className="form-control"
                  placeholder="Select An image "
                  name="file"
                  value={userData.file}
                  onChange={handleChange}
                />
              </div> */}
            </div>{" "}
            <div className="row mt-2">
              <div className="col-12">
                <button type="submit" className="btn btn-primary text-center">
                  {editIndex === null ? "Add User" : "Edit User"}
                </button>
              </div>
            </div>{" "}
          </div>
        </div>
      </form>
      <div className="container">
        <table className="table table-light mt-5">
          <thead>
            <tr>
              {/* <th>ID</th> */}
              <th>Name</th>
              <th>Email</th>
              <th>DOB</th>
              <th>Age</th>
              <th>Status</th>
              <th>State</th>
              <th>Opration</th>
              {/* <th>File/Image</th> */}
            </tr>
          </thead>
          <tbody>
            {addData.map((ele, ind) => {
              return (
                <tr key={ind}>
                  {/* <td>{ind}</td> */}
                  <td>{ele.name}</td>
                  <td>{ele.email}</td>
                  <td>{ele.dob}</td>
                  <td>{ele.age}</td>
                  <td>{ele.radio}</td>
                  <td>{ele.state}</td>
                  <td
                    style={{ display: "flex", justifyContent: "space-evenly" }}
                  >
                    <i
                      onClick={() => handleEdit(ind)}
                      class="bi bi-pencil-square"
                    ></i>{" "}
                    <i
                      onClick={() => handleDelete(ind)}
                      class="bi bi-x-circle-fill"
                    ></i>
                  </td>
                  {/* <td>
                  <img src={ele.file} width="200" alt="img" />
                </td> */}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default UserForm;
