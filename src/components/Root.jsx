import { Outlet } from 'react-router-dom';
import Navbar from './Navbar/Navbar';
import Footer from './Footer/Footer';
import { useContext } from 'react';
import { GlobalContext } from '../providers/Provider';

const Root = () => {

    const { theme } = useContext(GlobalContext);
    console.log("root, ", theme);

    return (
        <div>
            <div className={`text-black bg-base-300 ${theme=="dark"?"dark:text-white dark:bg-[#222]":""}`}>
                <Navbar></Navbar>
            </div>
            <div className="bg-[#f5f5f5] text-[#333333] dark:bg-[#373636] dark:text-[#fff]">
                <Outlet></Outlet>
            </div>
            <div className='bg-base-300 text-black dark:text-white dark:bg-[#222]'>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Root;