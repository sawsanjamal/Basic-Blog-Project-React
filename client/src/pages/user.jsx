import { useLoaderData, Link } from "react-router-dom";
import { getPosts } from "../api/posts";
import { getTodos } from "../api/todos";
import { getUser } from "../api/users";

export function User() {
  const { user, posts, todos } = useLoaderData();

  return (
    <>
      <h1 className="page-title">{user.name}</h1>
      <div className="page-subtitle">{user.email}</div>
      <div>
        <b>Company:</b> {user.company.name}
      </div>
      <div>
        <b>Website:</b> {user.website}
      </div>
      <div>
        <b>Address:</b> {user.address.street} {user.address.suite}{" "}
        {user.address.city} {user.address.zipcode}
      </div>
      <h3 className="mt-4 mb-2">Posts</h3>
      <div className="card-grid">
        {posts.map((post) => {
          return (
            <div key={post.id} className="card">
              <div className="card-header">{post.title}</div>
              <div className="card-body">
                <div className="card-preview-text">{post.body}</div>
              </div>
              <div className="card-footer">
                <Link to={`/posts/${post.id}`} className="btn">
                  View
                </Link>
              </div>
            </div>
          );
        })}
      </div>
      <h3 className="mt-4 mb-2">Todos</h3>
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
    </>
  );
}

async function loader({ request: { signal }, params: { userId } }) {
  const posts = getPosts({ signal, params: { userId } });
  const user = getUser(userId, { signal });
  const todos = getTodos({ signal, params: { userId } });
  return { posts: await posts, user: await user, todos: await todos };
}

export const userRoute = {
  loader,
  element: <User />,
};
