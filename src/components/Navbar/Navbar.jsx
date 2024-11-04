// import PropTypes from 'prop-types';

import { NavLink } from "react-router-dom";
import { IoCartOutline } from "react-icons/io5";
import { IoMdHeartEmpty } from "react-icons/io";


const Navbar = () => {
    const links = <>
        <li className=""><NavLink className={({ isActive }) => (isActive) ? "text-white font-semibold" : ""
        } to='/'>Home</NavLink></li>
        <li className=""><NavLink className={({ isActive }) => (isActive) ? "text-white font-semibold" : ""
        } to='/statistics'>Statistics</NavLink></li>
        <li className=""><NavLink className={({ isActive }) => (isActive) ? "text-white font-semibold" : ""
        } to='/dashboard'>Dashboard</NavLink></li>
        <li className=""><NavLink className={({ isActive }) => (isActive) ? "text-white font-semibold" : ""
        } to='/brands'>Brands</NavLink></li>
    </>
    return (
        <div className="mx-auto lg:w-[90%]">
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
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-[#535050]  rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            {links}
                        </ul>
                    </div>
                    <h2 className="md:text-xl font-bold">Gadget Heaven</h2>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end">
                    <div className="m-2 bg-white p-2 rounded-full border">
                        <IoCartOutline className="text-black"/>
                    </div>
                    <div className="m-2 bg-white p-2 rounded-full border">
                        <IoMdHeartEmpty className="text-black"/>
                    </div>

                </div>
            </div>
        </div>
    );
};


Navbar.propTypes = {

};


export default Navbar;
