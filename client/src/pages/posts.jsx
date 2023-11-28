import { useLoaderData, Link } from "react-router-dom";

import { getPosts } from "../api/posts";

function Posts() {
  const posts = useLoaderData();
  return (
    <>
      <div className="container">
        <h1 className="page-title">
          Posts
          <div className="title-btns">
            <Link className="btn btn-outline" to="/posts/new">
              New
            </Link>
          </div>
        </h1>
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
          ;
        </div>
      </div>
    </>
  );
}

function loader({ request: { signal } }) {
  return getPosts({ signal });
}

export const postsRoutes = {
  loader,
  element: <Posts />,
};
