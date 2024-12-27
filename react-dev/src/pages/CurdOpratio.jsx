import { useEffect, useState } from "react";

export default function CurdOpration() {
  const [input, setInput] = useState({
    name: "",
    email: "",
    address: "",
    zip: "",
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
    localStorage.setItem("userData", JSON.stringify(addData));

    setInput({
      name: "",
      email: "",
      address: "",
      zip: "",
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

  useEffect(() => {
    const getUserData = localStorage.getItem("userData");
    // console.log(getUserData);
    // setAddData(getUserData);
  }, []);
  return (
    <>
      <form action="" onSubmit={handleSubmit}>
        <div className="card">
          <div className="card-body">
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
                <div className="col-3">
                  <label className="form-label" htmlFor="address">
                    Address
                  </label>
                  <input
                    type="text"
                    name="address"
                    placeholder="Please Enter your Address"
                    id=""
                    className="form-control"
                    onChange={handleOnChange}
                    value={input.address}
                  />
                </div>
                <div className="col-3">
                  <label className="form-label" htmlFor="zip">
                    Zip Code
                  </label>
                  <input
                    type="text"
                    name="zip"
                    placeholder="Please Enter your Zip"
                    id=""
                    className="form-control"
                    onChange={handleOnChange}
                    value={input.zip}
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
          </div>
        </div>
      </form>
      <div className="card">
        <div className="contaier">
          <table className="table table-dark">
            <thead className="thead">
              <tr className="tr">
                <th>Name</th>
                <th>email</th>
                <th>Address</th>
                <th>zip </th>
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
                      <td>{ele.address}</td>
                      <td>{ele.zip}</td>
                      <td>
                        <button
                          style={{ marginRight: "10px" }}
                          onClick={() => handleEditPreFilldata(ind)}
                          className="btn btn-info btn-sm"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => handleDelete(ind)}
                          className="ml-3 btn btn-danger btn-sm"
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
      </div>
    </>
  );
}
