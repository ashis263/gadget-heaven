// import PropTypes from 'prop-types';

import { Helmet, HelmetProvider } from "react-helmet-async";
import { useContext } from "react";
import CartContext from "../../contexts/CartContext";
import WishContext from "../../contexts/WishContext";
import { Outlet, useNavigate } from "react-router-dom";


const Dashboard = () => {
    const { cart} = useContext(CartContext);
    const { wishlist} = useContext(WishContext);
    const navigate = useNavigate();
    return (
        <div>
            <HelmetProvider>
                <Helmet>
                    <title>Gradget Heaven | Dashboard</title>
                </Helmet>
                <div className="bg-[rgb(149,56,226)] text-center text-white">
                    <div className="w-3/5 mx-auto py-5 sm:py-10">
                        <h3 className="text-xl sm:text-3xl font-bold">Dashboard</h3>
                        <div className="flex flex-col sm:flex-row sm:gap-10 justify-center">
                            <p className="text-xs sm:text-sm">Products added to cart: {cart.length}</p>
                            <p className="text-xs sm:text-sm">Products added to wishlist: {wishlist.length}</p>
                        </div>
                        <div className="space-x-2 pt- sm:pt-8">
                            <button onClick={() => navigate('/dashboard/cart')} className="text-[rgb(149,56,226)] font-bold btn btn-sm rounded-3xl w-28">Cart</button>
                            <button onClick='' className="text-[rgb(149,56,226)] font-bold btn btn-sm rounded-3xl w-28">WishList</button>
                        </div>
                    </div>
                </div>
                <Outlet></Outlet>
            </HelmetProvider>
        </div>
    );
};


Dashboard.propTypes = {

};


export default Dashboard;
