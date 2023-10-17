import { createBrowserRouter } from "react-router-dom";
import Root from "../components/Root";
import Error from "../pages/Error/Error";
import Home from "../pages/Home/Home";

const routes = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        errorElement: <Error></Error>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/cart',
                element: <h1>Cart</h1>
            }
        ]
    }
])

export default routes;