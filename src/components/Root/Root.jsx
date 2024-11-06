import { Outlet, useLocation } from "react-router-dom";
import Header from "../Header/Header";
import Navbar from "../Navbar/Navbar";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Footer from "../Footer/Footer";
import { useEffect, useState } from "react";
import GadgetContext from "../../contexts/Gadgetcontext";
import Cartcontext from "../../contexts/CartContext";


const Root = () => {
    const path = useLocation().pathname;
    const [gadgets, setGadgets] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect(() => {
        fetch('gadgets.json')
            .then(res => res.json())
            .then(data => setGadgets(data))
    }, []);
    return (
        <div style={(path !== "/") ? { backgroundColor: "white" } : { backgroundColor: "rgba(190,190,190,0.15)" }} className="max-w-screen-xl mx-auto">
            <HelmetProvider>
                <Helmet>
                    <title>Gradget Heaven | Home</title>
                </Helmet>
                <GadgetContext.Provider value={gadgets}>
                    <Cartcontext.Provider value={{cart, setCart}}>
                        {
                            (path === '/') ? <Header></Header> : <Navbar></Navbar>
                        }
                        <Outlet></Outlet>
                    </Cartcontext.Provider>
                </GadgetContext.Provider>
                <Footer></Footer>
            </HelmetProvider>
        </div>
    );
}

export default Root;
