import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { GlobalContext } from "../providers/Provider";

const PrivateRoute = ({children}) => {

    const { user } = useContext(GlobalContext)

    if (user == null) {
        return <Navigate to="/login"></Navigate>
    }

    return children;
};

export default PrivateRoute;