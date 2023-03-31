import React from "react";

const Title = ({ title, setTitle }) => {
  return (
    <input
      defaultValue={title}
      onChange={(event) => setTitle(event.target.value)}
    />
  );
};

export default Title;
