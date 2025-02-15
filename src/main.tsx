import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";
import { Theme, Button } from "react-daisyui";

import "./index.css";
import App from "./App.tsx";
import Layout from "./pages/Layout.tsx";
import Collections from "./pages/sidebar/Collections.tsx";
import Tasks from "./pages/sidebar/Task.tsx";
import Archived from "./pages/sidebar/Archived.tsx";
import Deleted from "./pages/sidebar/Deleted.tsx";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <h1>The was and error</h1>,
    children: [
      {
        path: "/tasks",
        element: <Tasks />,
      },
      {
        path: "/collections",
        element: <Collections />,
      },
      {
        path: "/archived",
        element: <Archived />,
      },
      {
        path: "/deleted",
        element: <Deleted />,
      },
    ],
  },
]);
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Theme dataTheme="pastel">
      <App />
    </Theme>
    <RouterProvider router={Router} />
  </StrictMode>
);
