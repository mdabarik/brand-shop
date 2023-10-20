import { createBrowserRouter } from "react-router-dom";
import Root from "../components/Root";
import Error from "../pages/Error/Error";
import Home from "../pages/Home/Home";
import AddProduct from "../components/AddProduct/AddProduct";
import Brand from "../components/Brand/Brand";
import ProductDetails from "../components/ProductDetails/ProductDetails";
import EditProduct from "../components/EditProduct.jsx/EditProduct";
import Cart from "../components/Cart/Cart";
import Login from "../components/Login/Login";
import Registration from "../components/Registration/Registration";
import PrivateRoute from "./PrivateRoute";

const routes = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        errorElement: <Error></Error>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch("https://brand-shop-server-dhnz4w4vc-mdabarik.vercel.app/brands")
            },
            {
                path: '/cart',
                element: <PrivateRoute><Cart></Cart></PrivateRoute>
            },
            {
                path: '/add-product',
                element: <PrivateRoute><AddProduct></AddProduct></PrivateRoute>,
                loader: () => fetch("https://brand-shop-server-dhnz4w4vc-mdabarik.vercel.app/brands")
            },
            {
                path: '/brand/:brand',
                element: <Brand></Brand>,
                loader: () => fetch("https://brand-shop-server-dhnz4w4vc-mdabarik.vercel.app/products")
            },
            {
                path: '/product/:id',
                element: <PrivateRoute><ProductDetails></ProductDetails></PrivateRoute>
            },
            {
                path: '/edit/:id',
                element: <PrivateRoute><EditProduct></EditProduct></PrivateRoute>,
                loader: () => fetch("https://brand-shop-server-dhnz4w4vc-mdabarik.vercel.app/brands")
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/registration',
                element: <Registration></Registration>
            }
        ]
    }
])

export default routes;