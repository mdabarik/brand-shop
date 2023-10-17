import { Link, NavLink } from "react-router-dom";
import Logo from "././../../assets/logo.png";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { LuSunMoon } from "react-icons/lu";
import { AiOutlineShoppingCart } from "react-icons/ai";
import "./Navbar.css";
import { AiOutlineMenuUnfold } from "react-icons/ai";
import { useContext } from "react";
import { GlobalContext } from "../../providers/Provider";

const Navbar = () => {

    const context = useContext(GlobalContext);
    const { theme, handleTheme } = context;

    const handleThemeChange = () => {
        handleTheme()
    }

    const links = <>
        <li>
            <NavLink to="/">Home</NavLink>
        </li>
        <li>
            <NavLink to="/cart">My Cart</NavLink>
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
            <div className="navbar-end">
                <button className="flex" onClick={handleThemeChange}>
                    {
                        theme == "dark"
                            ? <BsFillMoonStarsFill className="text-2xl"></BsFillMoonStarsFill>
                            : <LuSunMoon className="text-2xl ml-2"></LuSunMoon>
                    }

                </button>
                <a className="btn">Login</a>
                <NavLink to="/cart">
                    <AiOutlineShoppingCart className="text-4xl"></AiOutlineShoppingCart>
                </NavLink>
            </div>
        </div>
    );
};

export default Navbar;