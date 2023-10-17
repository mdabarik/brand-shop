import { Outlet } from 'react-router-dom';
import Navbar from './Navbar/Navbar';
import Footer from './Footer/Footer';

const Root = () => {
    return (
        <div>
            <div className="">
                <Navbar></Navbar>
            </div>
            <div className="">
                <Outlet></Outlet>
            </div>
            <Footer className=""></Footer>
        </div>
    );
};

export default Root;