import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import { useLocation } from 'react-router-dom';
import Navbar from "../Navbar/Navbar";

const Root = () => {
    const path = useLocation().pathname;
    return (
        <div style={(path !== "/") ? {backgroundColor: "white"} : { backgroundColor: "rgba(239,239,239,0.38)"}} className="max-w-screen-xl mx-auto">
            {
                (path === '/') ? <Header></Header> : <Navbar></Navbar>
            }
            <Outlet></Outlet>
        </div>
    );
}

export default Root;
