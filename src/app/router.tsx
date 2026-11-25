import { lazy } from "react";
import { createBrowserRouter } from "react-router";

import Layout from "../components/layout/Layout";
const Home = lazy(() => import("../features/home/Home"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },
]);

export default router;