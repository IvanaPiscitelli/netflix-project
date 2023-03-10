import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { StrictMode } from "react";
import ErrorPage from "./routes/ErrorPage";
import TvShow from "./routes/TvShow";
import Movies from "./routes/Movies";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/tv-show",
    element: <TvShow />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/movies",
    element: <Movies />,
    errorElement: <ErrorPage />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
