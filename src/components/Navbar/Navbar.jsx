import { Link, NavLink } from "react-router-dom";
import Logo from "././../../assets/logo.png";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { LuSunMoon } from "react-icons/lu";
import { AiOutlineShoppingCart } from "react-icons/ai";

const Navbar = () => {

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
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
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
                <ul className="menu menu-horizontal px-1">
                    {
                        links
                    }
                </ul>
            </div>
            <div className="navbar-end">
                <button className="flex">
                    <BsFillMoonStarsFill className="text-2xl"></BsFillMoonStarsFill>
                    <LuSunMoon className="text-2xl ml-2"></LuSunMoon>
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