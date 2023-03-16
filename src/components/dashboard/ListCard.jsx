import React from "react";
import "./style.css";

const ListCard = ({ title, children, dropRef }) => {
  return (
    <div ref={dropRef} className="wrapping-card">
      <h1>{title}</h1>
      {children}
    </div>
  );
};

export default ListCard;
