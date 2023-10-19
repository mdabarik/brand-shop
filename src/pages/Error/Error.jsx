import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";

const Error = () => {


    return (
        <div>
            <Navbar></Navbar>

            <div className="bg-[#565555] text-white py-14 space-y-5"> 
                <h2 className="font-bold text-3xl text-center">404! Page Not Found!!</h2>
                <div className="flex items-center justify-center">
                <Link className="btn btn-error" to="/">Go To Home</Link>
                </div>
            </div>
        </div>
    );
};

export default Error;