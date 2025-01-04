import { useState } from "react";
import { useDispatch } from "react-redux";
import { createUser, updateUser } from "../Redux/UserSlice";
import UserList from "./UserList";

const UserForm = () => {
  const [userInput, setUserInput] = useState({
    name: "",
    email: "",
    password: "",
    address: "",
    pin: "",
  });
  const [EditData, setEditData] = useState(null);
  //   const [data, setData] = useState([]);

  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserInput({ ...userInput, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (EditData !== null) {
      dispatch(updateUser(userInput));
    } else {
      dispatch(createUser(userInput)); // dispatch create user action
      setEditData(null);
    }
    // setData([...data, userInput]);
    // console.log(data);

    setUserInput({
      name: "",
      email: "",
      password: "",
      address: "",
      pin: "",
    }); // Reset form fields
  };
  return (
    <>
      <form action="" onSubmit={handleSubmit}>
        <div className="container">
          <div className="card" style={{ padding: "10px" }}>
            <div className="row mb-3">
              <div className="col-3 ">
                <input
                  type="text"
                  className="form-control"
                  value={userInput.name}
                  name="name"
                  onChange={handleChange}
                  placeholder="Enter Your Name"
                  id=""
                />
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-3">
                <input
                  type="text"
                  name="email"
                  className="form-control"
                  value={userInput.email}
                  onChange={handleChange}
                  placeholder="Enter Your Email"
                  id=""
                />
              </div>
              <div className="col-3">
                <input
                  type="text"
                  name="password"
                  className="form-control"
                  value={userInput.password}
                  onChange={handleChange}
                  placeholder="Enter Your password"
                  id=""
                />
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-3">
                <input
                  type="text"
                  name="address"
                  className="form-control"
                  value={userInput.address}
                  onChange={handleChange}
                  placeholder="Enter Your Address"
                  id=""
                />
              </div>
              <div className="col-3">
                <input
                  type="text"
                  name="pin"
                  className="form-control"
                  value={userInput.pin}
                  onChange={handleChange}
                  placeholder="Enter Your Pin"
                  id=""
                />
              </div>
            </div>
            <div className="row ">
              <div className="col-4">
                <button
                  type="submit"
                  className="btn btn-sm btn-outline-success"
                >
                  {EditData !== null ? "Update User" : "Submit"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>{" "}
      <UserList />
    </>
  );
};

export default UserForm;
