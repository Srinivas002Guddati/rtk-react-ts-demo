import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, deleteTodo } from "./todoSlice";

export const TodoComponent = () => {
  const tasks = useSelector((state: any) => state.todo.tasks);
  const [task, setTask] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
  }, [tasks]);

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTask(e.target.value);
  };

  const handlAddTask = () => {
    if (task.trim()) {
      dispatch(addTodo(task));
      setTask("");
    }
  };

  return (
    <div>
      <h2>Add todo</h2>
      <p>{task}</p>
      <input type="text" value={task} onChange={handleOnChange} />
      <button onClick={handlAddTask}>Add task</button>
      <ul>
  {tasks.map((task: { id: number; text: string }) => (
    <li key={task.id}>
      {task.text}
      <button onClick={() => dispatch(deleteTodo(task.id))}>
        Delete
      </button>
    </li>
  ))}
</ul>
    </div>
  );
};