import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "../pages/HomePage";
import Products from "../pages/Products";
import Menu from "../pages/Menu";
import Carousel from "../components/Carousel";
import DemoComp from "../components/DemoComp";

const routes = createBrowserRouter([
    {
        path: "/", //Ruta establecida 
        element: <HomePage /> //Page establecido
    }, {
        path: "/menu",
        element: <Menu />
    }, {
        path: "/products",
        element: <Products />
    },
    {
        path: "/element",
        element: <Carousel />
    }, {
        path: "/demo",
        element: <DemoComp />
    },
])

function Routes() {
    return (
        //Establece routerPr para routes
        <RouterProvider router={routes} />
    )
}

export default Routes