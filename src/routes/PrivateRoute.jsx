import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { GlobalContext } from "../providers/Provider";

const PrivateRoute = ({ children }) => {

    const { user, loading } = useContext(GlobalContext)

    if (loading) {
        return <div className="h-[100vh] w-[100vw] flex justify-center items-center">
            <span className="loading loading-spinner text-error"></span>
        </div>;
    }

    if (user) {
        return children;
    }

    return <Navigate to="/login"></Navigate>
};

export default PrivateRoute;