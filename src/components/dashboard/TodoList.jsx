import React from "react";

const TodoList = (props) => {
  return (
    <div ref={props.innerRef}>
      <div>To do</div>
      <div>{props.children}</div>
    </div>
  );
};

export default TodoList;
