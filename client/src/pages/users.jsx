import { useLoaderData, Link } from "react-router-dom";

import { getUsers } from "../api/users";

function Users() {
  const users = useLoaderData();
  return (
    <>
      <div className="container">
        <h1 className="page-title">Users</h1>
        <div className="card-grid">
          {users.map((user) => {
            return (
              <div key={user.id} className="card">
                <div className="card-header">{user.name}</div>
                <div className="card-body">
                  <div>{user.company.name}</div>
                  <div>{user.website}</div>
                  <div>{user.mail}</div>
                </div>
                <div className="card-footer">
                  <Link to={`/users/${user.id}`} className="btn">
                    View
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

function loader({ request: { signal } }) {
  return getUsers({ signal });
}

export const usersRoutes = {
  loader,
  element: <Users />,
};
