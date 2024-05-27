/* eslint-disable react/prop-types */
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";

function Todocard({
  todo,
  isEdit,
  setIsEdit,
  setInput,
  idx,
  handleStatus,
  setEditId,
  handleDelete,
}) {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <div className="card-body">
        <h6 className="card-title mb-2">Name:{todo.name} </h6>
        <h6 className="card-title">Description:{todo.description}</h6>

        <div className="row mb-4">
          {" "}
          <div className="col-4">
            {" "}
            <h6 className="card-title">status: </h6>
          </div>
          <div className="col-8">
            <select
              value={todo.status}
              className={`form-select ${
                todo.status === "completed" ? "bg-success" : "bg-danger"
              } col-2`}
              aria-label="select example"
              onChange={(e) => handleStatus(e, idx)}
            >
              <option className="bg-danger" value={"incomplete"}>
                Incomplete
              </option>
              <option className="bg-success" value={"completed"}>
                completed
              </option>
            </select>
          </div>
        </div>

        <div className="row gap-2">
          <button
            className="btn btn-success col-4"
            onClick={() => {
              setIsEdit(true);
              console.log(isEdit);
              setInput(todo);
              setEditId(idx);
            }}
          >
            Edit
          </button>
          <button
            className="btn btn-danger col-4"
            onClick={() => handleDelete(todo.id)}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default Todocard;
