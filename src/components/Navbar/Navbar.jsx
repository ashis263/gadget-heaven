// import PropTypes from 'prop-types';

import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { IoCartOutline } from "react-icons/io5";
import { IoMdHeartEmpty } from "react-icons/io";
import logo from '../../assets/favicon-16x16.png'
import { useContext } from "react";
import CartContext from "../../contexts/CartContext";


const Navbar = () => {
    const path = useLocation().pathname;
    const { cart } = useContext(CartContext);
    const navigate = useNavigate();
    const links = <>
        <li className=""><NavLink className={({ isActive }) => (isActive) ? "underline font-semibold" : ""
        } to='/'>Home</NavLink></li>
        <li className=""><NavLink className={({ isActive }) => (isActive) ? "text-[rgb(149,56,226)] font-semibold" : ""
        } to='/dashboard'>Dashboard</NavLink></li>
        <li className=""><NavLink className={({ isActive }) => (isActive) ? "text-[rgb(149,56,226)] font-semibold" : ""
        } to='/statistics'>Statistics</NavLink></li>
        <li className=""><NavLink className={({ isActive }) => (isActive) ? "text-[rgb(149,56,226)] font-semibold" : ""
        } to='/brands'>Brands</NavLink></li>
    </>
    return (
        <div style={((path === "/") || (path === "/smartphones") || (path === "/wearables") || (path === "/laptops") || (path === "/audio") || (path === "/gaming")) ? {} : { backgroundColor: "white", border: "" }} className="mx-auto lg:w-[90%]">
            <div className="navbar">
                <div className="navbar-start px-0">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0} style={(path !== "/") ? { backgroundColor: "white", border: "1px solid gray" } : {}}
                            className="menu menu-sm dropdown-content bg-[#535050]  rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            {links}
                        </ul>
                    </div>
                    <div className="flex items-center gap-1 sm:gap-2">
                        <img className="w-5" src={logo} alt="" />
                        <h2 className="md:text-xl font-bold">Gadget Heaven</h2>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end">
                    <button onClick={() => navigate('/dashboard/cart')} className="btn relative m-2 bg-white px-4 rounded-full border">
                        <IoCartOutline className="text-black" />
                        {
                            (cart.length) ? <span className="absolute -top-2 left-7 border-2 rounded-full badge badge-sm indicator-item p-2">{cart.length}</span> : ""
                        }
                    </button>
                    <button onClick={() => navigate('/dashboard/wishlist')} className="btn m-2 bg-white px-4 rounded-full border">
                        <IoMdHeartEmpty className="text-black" />
                    </button>

                </div>
            </div>
        </div>
    );
};


Navbar.propTypes = {

};


export default Navbar;
