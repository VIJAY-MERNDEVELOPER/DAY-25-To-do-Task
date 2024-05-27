/* eslint-disable react/prop-types */

import { useState } from "react";

function Filter({ filter, setFilter }) {
  return (
    <select
      className={`form-select ${
        filter === "all"
          ? "bge-white"
          : filter === "incomplete"
          ? "bg-danger"
          : "bg-success"
      }
       col-2`}
      aria-label="select example"
      onChange={(e) => {
        setFilter(e.target.value);
      }}
    >
      <option className="bg-white" defaultChecked value={"all"}>
        All
      </option>{" "}
      <option className={`bg-danger`} value={"incomplete"}>
        Incomplete
      </option>{" "}
      <option className={`bg-success`} value={"completed"}>
        Completed
      </option>
    </select>
  );
}

export default Filter;
