import { useState } from "react";

export default function CurdOpration() {
  const [input, setInput] = useState({
    name: "",
    email: "",
  });
  const [addData, setAddData] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.name.trim() === "" || input.email.trim() === "") return;
    if (editIndex === null) {
      setAddData([...addData, input]);
    } else {
      const updatedItems = [...addData];
      updatedItems[editIndex] = input;
      setAddData(updatedItems);
      setEditIndex(null);
    }

    setInput({
      name: "",
      email: "",
    });
  };
  const handleDelete = (ind) => {
    console.log(ind);
    const updatedData = addData.filter((_, i) => i !== ind);
    setAddData(updatedData);
  };
  const handleEditPreFilldata = (ind) => {
    console.log(ind);
    setInput(addData[ind]);
    setEditIndex(ind);
  };
  return (
    <>
      <form action="" onSubmit={handleSubmit}>
        <div className="container">
          <h3>Curd Opration</h3>
          <div className="row">
            <div className="col-3">
              <label className="form-label" htmlFor="name">
                Name
              </label>
              <input
                type="text"
                name="name"
                placeholder="Please Enter your Name"
                id=""
                className="form-control"
                onChange={handleOnChange}
                value={input.name}
              />
            </div>
            <div className="col-3">
              <label className="form-label" htmlFor="email">
                Email
              </label>
              <input
                type="text"
                name="email"
                placeholder="Please Enter your Email"
                id=""
                className="form-control"
                onChange={handleOnChange}
                value={input.email}
              />
            </div>
          </div>
          <div className="row">
            <div className="col">
              <button className="btn btn-primary mt-3 mb-3" type="submit">
                {editIndex === null ? "Add Item" : "Update Item"}
              </button>
            </div>
          </div>
        </div>
      </form>
      <div className="contaier" style={{ width: "30%", marginLeft: "30%" }}>
        <table className="table table-dark">
          <thead className="thead">
            <tr className="tr">
              <th>Name</th>
              <th>email</th>
              <th>oprations</th>
            </tr>
          </thead>
          <tbody className="tbody">
            {addData &&
              addData.map((ele, ind) => {
                return (
                  <tr key={ind}>
                    <td>{ele.name}</td>
                    <td>{ele.email}</td>
                    <td>
                      <button
                        onClick={() => handleEditPreFilldata(ind)}
                        className="btn btn-info ml-3"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete(ind)}
                        className="ml-3 btn btn-danger"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </>
  );
}
