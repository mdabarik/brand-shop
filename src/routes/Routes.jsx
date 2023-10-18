import { createBrowserRouter } from "react-router-dom";
import Root from "../components/Root";
import Error from "../pages/Error/Error";
import Home from "../pages/Home/Home";
import AddProduct from "../components/AddProduct/AddProduct";
import Brand from "../components/Brand/Brand";
import ProductDetails from "../components/ProductDetails/ProductDetails";
import EditProduct from "../components/EditProduct.jsx/EditProduct";
import Cart from "../components/Cart/Cart";

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
                element: <Cart></Cart>
            },
            {
                path: '/add-product',
                element: <AddProduct></AddProduct>,
                loader: () => fetch("http://localhost:5901/brands")
            },
            {
                path: '/brand/:brand',
                element: <Brand></Brand>,
                loader: () => fetch("http://localhost:5901/products")
            },
            {
                path: '/product/:id',
                element: <ProductDetails></ProductDetails>
            },
            {
                path: '/edit/:id',
                element: <EditProduct></EditProduct>,
                loader: () => fetch("http://localhost:5901/brands")
            }
        ]
    }
])

export default routes;