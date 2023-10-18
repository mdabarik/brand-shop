import { createBrowserRouter } from "react-router-dom";
import Root from "../components/Root";
import Error from "../pages/Error/Error";
import Home from "../pages/Home/Home";
import AddProduct from "../components/AddProduct/AddProduct";

const routes = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        errorElement: <Error></Error>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch("http://localhost:5901/brands")
            },
            {
                path: '/cart',
                element: <h1>Cart</h1>
            },
            {
                path: '/add-product',
                element: <AddProduct></AddProduct>,
                loader: () => fetch("http://localhost:5901/brands")
            }
        ]
    }
])

export default routes;