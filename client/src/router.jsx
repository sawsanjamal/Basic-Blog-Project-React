import { createBrowserRouter, Navigate, useRouteError } from "react-router-dom";
import { RootLayout } from "./layouts";
import { postRoute } from "./pages/post";
import { postsRoutes } from "./pages/posts";
import { todosRoutes } from "./pages/todos";
import { userRoute } from "./pages/user";
import { usersRoutes } from "./pages/users";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        errorElement: <ErrorPage />,
        children: [
          { index: true, element: <Navigate to="/posts" /> },
          {
            path: "posts",

            children: [
              {
                index: true,
                ...postsRoutes,
              },
              {
                path: ":postId",
                ...postRoute,
              },
            ],
          },

          {
            path: "users",
            children: [
              { index: true, ...usersRoutes },
              { path: ":userId", ...userRoute },
            ],
          },
          { path: "todos", ...todosRoutes },
          { path: "*", element: <div> 404 error </div> },
        ],
      },
    ],
  },
  ,
]);
function ErrorPage() {
  const error = useRouteError();

  return (
    <>
      <h1>Error - Something went wrong</h1>
      {import.meta.env.MODE !== "production" && (
        <>
          <pre>{error.message}</pre>
          <pre>{error.stack}</pre>
        </>
      )}
    </>
  );
}
