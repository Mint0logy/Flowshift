import { useDrop } from "react-dnd";

const useDropRefs = () => {
  const [, dropOnTodoCard] = useDrop({
    accept: "task",
    drop: (item) => {},
  });

  const [, dropOnInProgressCard] = useDrop({
    accept: "task",
    drop: (item) => {},
  });

  const [, dropOnCompleteCard] = useDrop({
    accept: "task",
    drop: (item) => {},
  });

  return { dropOnTodoCard, dropOnInProgressCard, dropOnCompleteCard };
};

export default useDropRefs;
