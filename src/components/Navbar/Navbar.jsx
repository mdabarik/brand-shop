import { Link, NavLink } from "react-router-dom";
import Logo from "././../../assets/logo.png";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { LuSunMoon } from "react-icons/lu";
import { AiOutlineShoppingCart } from "react-icons/ai";
import "./Navbar.css";
import { AiOutlineMenuUnfold } from "react-icons/ai";
import { useContext } from "react";
import { GlobalContext } from "../../providers/Provider";
import { AiOutlineLogout } from 'react-icons/ai';
import { CiLogin } from "react-icons/ci";

const Navbar = () => {
    const { user, loading, logOut } = useContext(GlobalContext)

    const context = useContext(GlobalContext);
    const { theme, handleTheme } = context;

    const handleThemeChange = () => {
        handleTheme()
    }

    const handleLogout = () => {
        logOut();
    }

    const links = <>
        <li>
            <NavLink to="/">Home</NavLink>
        </li>
        <li>
            <NavLink to="/add-product">Add Product</NavLink>
        </li>
    </>

    return (
        <div className="navbar container mx-auto">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <AiOutlineMenuUnfold className="text-3xl"></AiOutlineMenuUnfold>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm navbar-li dropdown-content mt-3 z-[1] p-2 shadow rounded-box w-52 text-black drop-shadow-2xl border-[1px] dark:border-[#484444] dark:text-white dark:bg-[#222]">
                        {
                            links
                        }
                    </ul>
                </div>
                <Link className="flex items-center justify-center" to="/">
                    <img className="h-[48px]" src={Logo} alt="Logo" />
                    <span className="font-semibold text-2xl ml-3">Brand Shop</span>
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal navbar-li px-1">
                    {
                        links
                    }
                </ul>
            </div>
            <div className="navbar-end space-x-2">
                <button className="flex" onClick={handleThemeChange}>
                    {
                        theme == "dark"
                            ? <BsFillMoonStarsFill className="text-2xl"></BsFillMoonStarsFill>
                            : <LuSunMoon className="text-2xl ml-2"></LuSunMoon>
                    }

                </button>

                {/* <Link to="/login" className="bg-[orange] px-6 py-2 text-black font-medium hover:bg-[#cf8f18] rounded-full">
                   Login
                </Link> */}
                {
                    loading ?
                        <span className="loading loading-spinner loading-md"></span>
                        :
                        user
                            ?

                            <div className="flex gap-3 items-center justify-center">
                                <div className="flex items-center flex-col-reverse md:flex-row gap-2">
                                    <div>
                                        <p className="text-[10px] md:text-sm">{user.displayName}</p>
                                    </div>
                                    <div className="rounded-full">
                                        <img className="w-[40px] h-[40px] border-[#f0ebeb8d] border-[1px] object-cover rounded-full" src={user.photoURL} alt="Profile" />
                                    </div>
                                </div>
                                <div onClick={handleLogout} className="">
                                    <button className="bg-[#db332a] py-2 px-3 flex items-center justify-center rounded-full normal-case text-white border-none hover:bg-[#b5100b] active:bg-[#b5100b]">
                                        <AiOutlineLogout className="text-xl"></AiOutlineLogout>
                                        <span className="text-[12px]">Logout</span>
                                    </button>
                                </div>
                            </div>


                            :
                            <Link to="/login" className="px-4 py-2 bg-[#db332a] rounded-full normal-case flex gap-1 text-white border-none hover:bg-[#b5100b]">
                                <CiLogin className="text-xl"></CiLogin>
                                <span>Login</span>
                            </Link>
                }

                <NavLink to="/cart">
                    <AiOutlineShoppingCart className="text-4xl"></AiOutlineShoppingCart>
                </NavLink>
            </div>
        </div>
    );
};

export default Navbar;