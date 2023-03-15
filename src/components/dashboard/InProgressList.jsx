import React from "react";

const InProgressList = (props) => {
  return (
    <div ref={props.innerRef} style={{ backgroundColor: "red" }}>
      <div>In Progress</div>
      <div>{props.children}</div>
    </div>
  );
};

export default InProgressList;
