import { useState } from "react";

const Todo = () => {
  const [value, setValue] = useState("");
  const [todo, setTodo] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setTodo([...todo, value]);
    console.log(todo);
    setValue("");
  };
  const handleDelete = (id) => {
    const updatedData = todo.filter((_, t) => t !== id);
    setTodo(updatedData);
  };
  return (
    <>
      <div className="container">
        <div className="row mt-5">
          <div className="col-4 ">
            <input
              type="text"
              name="value"
              className="form-control"
              value={value}
              onChange={(e) => setValue(e.target.value)}
              id=""
            />
          </div>
          <div className="col-4">
            <button
              type="submit"
              className="btn btn-primary btn-sm"
              onClick={handleSubmit}
            >
              Save
            </button>
          </div>
        </div>
      </div>

      {/* <div className="card"> */}
      <ul className="ul">
        {todo.map((ele, ind) => {
          return (
            <li key={ind}>
              {ele}
              <button
                className="btn btn-secondary btn-sm"
                onClick={() => handleDelete(ind)}
              >
                btn
              </button>
            </li>
          );
        })}
      </ul>
      {/* </div> */}
    </>
  );
};

export default Todo;
