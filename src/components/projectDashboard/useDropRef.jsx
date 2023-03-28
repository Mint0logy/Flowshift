import { useDrop } from "react-dnd";
import { useDispatch } from "react-redux";
import { changeTaskStatus } from "../../features/Tasks";

const useDropRefs = () => {
  const dispatch = useDispatch();

  const [, dropOnTodoCard] = useDrop({
    accept: "task",
    drop: (item) => {
      dispatch(changeTaskStatus({ item, newStatus: "todo" }));
    },
  });

  const [, dropOnInProgressCard] = useDrop({
    accept: "task",
    drop: (item) => {
      dispatch(changeTaskStatus({ item, newStatus: "inprogress" }));
    },
  });

  const [, dropOnCompleteCard] = useDrop({
    accept: "task",
    drop: (item) => {
      dispatch(changeTaskStatus({ item, newStatus: "complete" }));
    },
  });

  return { dropOnTodoCard, dropOnInProgressCard, dropOnCompleteCard };
};

export default useDropRefs;
