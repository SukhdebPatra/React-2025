import React, { useState } from "react";
import "./CssExample.css";

const CssExample = () => {
  const [userInput, setUserInput] = useState({
    userName: "",
    userEmail: "",
    sex: "",
  });
  const [userData, setUserData] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserInput({ ...userInput, [name]: value });
  };
  //   const handleSubmit = (e) => {
  //     e.preventDefault();
  //     if (
  //       userInput.userEmail === "" ||
  //       userInput.userName === "" ||
  //       userInput.sex === ""
  //     ) {
  //       alert("data is required");
  //     } else {
  //       if (editIndex === null) {
  //         setUserData((pre) => {
  //           const updatedData = [...pre, userInput];
  //           return updatedData;
  //         });

  //         console.log(userInput);
  //       } else {
  //         const updatedData = [...userData];
  //         updatedData[editIndex] = userInput;
  //         setUserData(updatedData);
  //         setEditIndex(null);
  //       }
  //       setUserInput({
  //         userName: "",
  //         userEmail: "",
  //         sex: "",
  //       });
  //     }
  //   };

  const handleSubmit = (e) => {
    e.preventDefault();
    setUserData((prev) => {
      if (editIndex === null) {
        return [...prev, userInput];
      }
      return prev.map((item, index) => (index === editIndex ? userInput : item));
    });
    if (editIndex !== null) {
        setEditIndex(null);
      }
    setUserInput({
      userName: "",
      userEmail: "",
      sex: "",
    });
  };
  const handleDelete = (id) => {
    const updatedData = userData.filter((_, t) => id !== t);
    setUserData(updatedData);
  };
  const handleEdit = (ind) => {
    console.log(ind);
    setUserInput(userData[ind]);
    setEditIndex(ind);
  };
  return (
    <>
      {" "}
      <div className="bg-Color">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores,
        pariatur harum ea accusantium suscipit deleniti tempore, quia
        consequatur culpa quos repudiandae. A fugit, sunt quasi debitis
        quibusdam commodi dicta dignissimos?
      </div>
      <div
        style={{
          backgroundImage:
            "url('https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg')",
          marginTop: "3%",
          padding: "2%",
          margin: "2%",
          borderRadius: "5%",
        }}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi iste autem
        corporis accusamus, eius vitae eligendi rerum quisquam cum voluptatem
        eum dignissimos voluptas quasi eaque, blanditiis animi ut omnis
        recusandae!
      </div>
      <form action="" onSubmit={handleSubmit}>
        <div className="container">
          <div className="row">
            <div className="col-3">
              <label htmlFor="">UserName</label>
              <input
                type="text"
                className="form-control"
                name="userName"
                value={userInput.userName}
                onChange={handleChange}
                id=""
              />
            </div>
            <div className="col-3">
              <label htmlFor="">UserEmail</label>
              <input
                type="text"
                name="userEmail"
                className="form-control"
                value={userInput.userEmail}
                onChange={handleChange}
                id=""
              />
            </div>
            <div className="col-4">
              <label htmlFor="">Sex</label>
              <select
                name="sex"
                value={userInput.sex}
                onChange={handleChange}
                id=""
                className="form-control"
              >
                <option value="">select</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>
          </div>
          <div className="row">
            <div className="col-3">
              <button className="btn btn-sm btn-info mt-3 mb-4" type="submit">
                Submit
              </button>
            </div>
          </div>
        </div>
      </form>
      <div className="container mb-2">
        <div className="row">
          <div className="col-3">
            <label htmlFor="">Name</label>
          </div>
          <div className="col-3">
            <label htmlFor="">Email</label>
          </div>
          <div className="col-3">
            <label htmlFor="">SEX</label>
          </div>
          <div className="col-3">
            <label htmlFor="">Opration</label>
          </div>
        </div>
      </div>
      <div
        style={{
          backgroundImage:
            "url('https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg')",
          //   marginTop: "3%",
          padding: "2%",
          margin: "2%",
          borderRadius: "25px",
        }}
      >
        {userData.map((ele, ind) => {
          return (
            <div className="container" key={ind}>
              <div className="row">
                <div className="col-3">{ele.userName}</div>
                <div className="col-3">{ele.userEmail}</div>
                <div className="col-3">{ele.sex}</div>
                <div className="col-3">
                  <button
                    className="btn btn-sm btn-danger"
                    onClick={() => handleDelete(ind)}
                  >
                    delete
                  </button>
                  <button
                    className="btn btn-sm  btn-primary"
                    onClick={() => handleEdit(ind)}
                  >
                    Edit
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default CssExample;
