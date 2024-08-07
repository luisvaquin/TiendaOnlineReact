import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "../pages/HomePage";
import Products from "../pages/Products";
import Menu from "../pages/Menu";

const routes = createBrowserRouter([
    {
        path: "/", //Ruta establecida 
        element: <HomePage /> //Page and component establecido
    }, {
        path: "/menu",
        element: <Menu />
    }, {
        path: "/products",
        element: <Products />
    }
])

function Routes() {
    return (
        //Establece routerPr para routes
        <RouterProvider router={routes} />
    )
}

export default Routes