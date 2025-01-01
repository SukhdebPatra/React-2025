import { useState } from "react";

const CurdOprationTwo = () => {
  const [input, setInput] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const [addData, setAddDta] = useState([]);
  const [editData, setEditData] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (editData === null) {
      setAddDta([...addData, input]);
    } else {
      debugger;
      const updatedData = [...addData];
      updatedData[editData] = input;
      setAddDta(updatedData);
      setEditData(null);
    }
    setInput({
      name: "",
      email: "",
      phone: "",
    });
  };

  const handleDelete = (ind) => {
    console.log(ind);
    const updatedData = addData.filter((_, i) => i !== ind);
    setAddDta(updatedData);
  };
  const handleEdit = (ind) => {
    console.log(ind);
    setInput(addData[ind]);
    setEditData(ind);
  };
  return (
    <>
      <form action="" onSubmit={handleSubmit}>
        <div className="container mt-4 p-2">
          <h3 className="text-center">User Details</h3>
          <div className="row">
            <div className="col-4">
              <input
                type="text"
                placeholder="Name"
                className="form-control mb-2"
                name="name"
                id=""
                value={input.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="col-4">
              <input
                type="text"
                placeholder="Email"
                className="form-control mb-2"
                name="email"
                id=""
                value={input.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="col-4">
              <input
                type="number"
                placeholder="Phone"
                className="form-control mb-2"
                name="phone"
                value={input.phone}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <button
                type="submit"
                className="btn btn-sm btn-outline-info mb-5  mt-2"
                style={{ marginLeft: "50%" }}
              >
                {editData === null ? "Add User" : "Update User"}
              </button>
            </div>
          </div>
        </div>
      </form>
      <table className="table table-light">
        <thead>
          <tr>
            <th className="table-primary text-center">Name</th>
            <th className="table-secondary text-center"> Email</th>
            <th className="table-warning text-center">Phone</th>
            <th className="table-danger text-center">Edit/Delete</th>
          </tr>
        </thead>
        <tbody>
          {addData &&
            addData.map((ele, ind) => {
              return (
                <tr key={ind}>
                  <td className="text-center">{ele.name}</td>
                  <td className="text-center">{ele.email}</td>
                  <td className="text-center">{ele.phone}</td>
                  <td className="text-center">
                    <i
                      className="ml-3 mr-3 bi bi-trash3 text-danger text-center"
                      onClick={() => handleDelete(ind)}
                      style={{ cursor: "pointer" }}
                    ></i>{" "}
                    <i
                      className="ml-3 mr-3 bi bi-pencil text-success text-center"
                      onClick={() => handleEdit(ind)}
                      style={{ cursor: "pointer", marginLeft: "4%" }}
                    ></i>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </>
  );
};

export default CurdOprationTwo;
