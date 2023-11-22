import { getByTitle } from "@testing-library/react";
import { useLoaderData, Link } from "react-router-dom";

import { getTodos } from "../api/todos";

function Todos() {
  const todos = useLoaderData();
  return (
    <>
      <div className="container">
        <h1 className="page-title">Todos</h1>
        <ul>
          {todos.map((todo) => {
            return (
              <li
                key={todo.id}
                className={todo.completed ? "strike-through" : undefined}
              >
                {todo.title}
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}

function loader({ request: { signal } }) {
  return getTodos({ signal });
}

export const todosRoutes = {
  loader,
  element: <Todos />,
};
