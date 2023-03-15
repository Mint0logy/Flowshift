import { useDrop } from "react-dnd";
import { useDispatch } from "react-redux";
import { addTaskToTodoList } from "../../features/TodoItems";
import { addTaskToInProgressList } from "../../features/InProgressItems";
import { addTaskToCompleteList } from "../../features/CompleteItems";

const useDropRefs = () => {
  const dispatch = useDispatch();

  const [{ isOverTodo }, dropOnTodoList] = useDrop({
    accept: "task",
    drop: (item) => {
      dispatch(addTaskToTodoList(item));
    },
    collect: (monitor) => ({ isOverTodo: !!monitor.isOver() }),
  });

  const [{ isOverInProgress }, dropOnInProgressList] = useDrop({
    accept: "task",
    drop: (item) => {
      dispatch(addTaskToInProgressList(item));
    },
    collect: (monitor) => ({ isOverInProgress: !!monitor.isOver() }),
  });

  const [{ isOverComplete }, dropOnCompleteList] = useDrop({
    accept: "task",
    drop: (item) => {
      dispatch(addTaskToCompleteList(item));
    },
    collect: (monitor) => ({ isOverComplete: !!monitor.isOver() }),
  });

  return { dropOnTodoList, dropOnInProgressList, dropOnCompleteList };
};

export default useDropRefs;
