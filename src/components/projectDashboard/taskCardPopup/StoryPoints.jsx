import React from "react";

const StoryPoints = (storyPoints, setStoryPoints) => {
  return (
    <select
      defaultValue={storyPoints}
      onChange={(event) => setStoryPoints(event.target.value)}
    >
      {[...Array(9)].map((x, i) => (
        <option key={i} value={i}>
          {i}
        </option>
      ))}
    </select>
  );
};

export default StoryPoints;
