import { createBrowserRouter } from "react-router-dom";

import RootLayout from "@/components/RootLayout";
import NotFound from "@/pages/404";
import Home from "@/pages/home";
import AdminChild from "@/pages/admin/AdminChild";
import AdminIndex from "@/pages/admin/AdminIndex";

export const routes = [
  {
    name: "RootLayout",
    path: "/",
    element: <RootLayout />,
    children: [
      {
        name: "Home",
        index: true,
        element: <Home />,
      },
      {
        path: "admin",
        children: [
          {
            path: "index",
            element: <AdminIndex />,
          },
          {
            name: "AdminChild",
            path: "child",
            element: <AdminChild />,
          },
        ],
      },
      {
        name: "404",
        path: "*",
        element: <NotFound />,
      },
    ],
  },
];

export const browserRoute = createBrowserRouter(routes);
