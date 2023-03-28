import React from "react";

const Description = ({ setDescription, description }) => {
  return (
    <textarea
      defaultValue={description}
      onChange={(event) => setDescription(event.target.value)}
    />
  );
};

export default Description;
