import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import { useLocation } from 'react-router-dom';
import Navbar from "../Navbar/Navbar";
import { Helmet } from "react-helmet";
import Footer from "../Footer/Footer";

const Root = () => {
    const path = useLocation().pathname;
    return (
        <div style={(path !== "/") ? {backgroundColor: "white"} : { backgroundColor: "rgba(190,190,190,0.15)"}} className="max-w-screen-xl mx-auto">
            <Helmet>
                <title>Gradget Heaven | Home</title>
            </Helmet>
            {
                (path === '/') ? <Header></Header> : <Navbar></Navbar>
            }
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
}

export default Root;
