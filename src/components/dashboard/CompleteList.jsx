import React from "react";

const CompleteList = (props) => {
  return (
    <div ref={props.innerRef}>
      <div>Complete</div>
      <div>{props.children}</div>
    </div>
  );
};

export default CompleteList;
