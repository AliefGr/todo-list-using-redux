import React, { useEffect } from "react";
import TodoItem from "../containers/TodoItems";

const TodoList = ({ todos, getTodo }) => {

  useEffect(() => {
    getTodo();
  }, []);

  return (
    <>
      <ul>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
          />
        ))}
      </ul>
    </>
  );
};

export default TodoList;
