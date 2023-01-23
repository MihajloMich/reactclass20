import { useEffect, useState } from "react";
import CreateTodo from "./CreateTodo";
import ListTodo from "./ListTodo";

const Todo = () => {
  const url = "https://jsonplaceholder.typicode.com/todos?_limit=10";

  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((respond) => respond.json())
      .then((data) => setTodos(data));
  }, []);

  return (
    <div>
      <CreateTodo />
      <ListTodo todos={todos} />
    </div>
  );
};

export default Todo;
