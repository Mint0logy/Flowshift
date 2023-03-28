import React from "react";

const Status = ({ status, setStatus }) => {
  return (
    <select
      defaultValue={status}
      onChange={(event) => setStatus(event.target.value)}
    >
      <option value="todo">To do</option>
      <option value="inprogress">In Progress</option>
      <option value="complete">Completed</option>
    </select>
  );
};

export default Status;
