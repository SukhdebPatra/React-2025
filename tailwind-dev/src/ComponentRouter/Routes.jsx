import React from "react";
import { createBrowserRouter, Route, RouterProvider } from "react-router-dom";
import Layout from "./Layout"; // Make sure you import your components

import Form from "../pages/Form";
import Home from "../pages/Home";

const ReactRouter = () => {
  const router = createBrowserRouter([
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route path="" element={<Home />} />
        <Route path="" element={<Form />} />
      </Route>
    ),
  ]);

  return <RouterProvider router={router} />;
};

export default ReactRouter;
