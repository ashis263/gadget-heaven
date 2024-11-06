import PropTypes from 'prop-types';
import { AiOutlineCloseCircle } from "react-icons/ai";
import { useContext, useState } from 'react';
import CartContext from "../../contexts/CartContext";
import WishContext from '../../contexts/WishContext';
import { useLocation } from 'react-router-dom';
import { ToastContainer, toast, Flip } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const AddedGadget = ({ gadget }) => {
    const location = useLocation().pathname;
    const { cart, setCart } = useContext(CartContext);
    const { wishlist, setWishlist } = useContext(WishContext);
    const [isAdded, setIsAdded] = useState(cart.includes(gadget.product_id));
    const handleRemoveCart = () => {
        const gadgetIndex = cart.indexOf(gadget.product_id);
        cart.splice(gadgetIndex, 1);
        setCart([...cart]);
    }
    const handleRemoveWishlist = () => {
        const gadgetIndex = wishlist.indexOf(gadget.product_id);
        wishlist.splice(gadgetIndex, 1);
        console.log(gadgetIndex, wishlist);
        setWishlist([...wishlist]);
    }
    const handleAddToCart = () => {
        if (!cart.includes(gadget.product_id)) {
            setCart([...cart, gadget.product_id]);
        }
        setIsAdded(true);
        toast.success(`"${gadget.product_title}" is added to cart`, {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Flip,
            });
    }
    return (
        <div className='py-3 sm:py-5'>
            <div className='w-4/5 sm:w-auto mx-auto bg-white rounded-xl p-5 shadow-md space-y-2 flex flex-col sm:flex-row  items-center justify-between sm:items-start'>
                <div className='flex text-center sm:text-start flex-col sm:flex-row  items-center gap-5'>
                    <img className='w-3/5 sm:w-1/5 border rounded-xl aspect-square' src={gadget.product_image} alt={gadget.product_title} />
                    <div className='space-y-2 w-4/5 sm:w-auto'>
                        <h4 className='text-lg sm:text-xl font-bold'>{gadget.product_title}</h4>
                        <p className='text-xs'>{gadget.description}</p>
                        <p className='text-xs sm:text-sm font-semibold'>Price: {gadget.price}$</p>
                        <div className='flex gap-1 '>
                            {
                                gadget.Specification.map((item, index) => <p className='text-xs text-gray-500 p-1 border rounded-xl' key={index}>{item}</p>)
                            }
                        </div>
                        {
                            (location === '/dashboard/cart' || location === '/dashboard') ? '' :
                            <button disabled={isAdded} onClick={handleAddToCart}  className="text-white bg-[rgb(149,56,226)] font-bold btn btn-sm rounded-3xl w-36">Add to cart</button>
                        }
                    </div>
                </div>
                <button onClick={(location === '/dashboard/cart' || location === '/dashboard') ? (handleRemoveCart) : (handleRemoveWishlist)} className='w-24 sm:w-auto btn btn-sm rounded-2xl sm:border-none border-2 sm:bg-white border-red-200 bg-red-50  text-red-400 text-2xl'><AiOutlineCloseCircle />
                </button>
            </div>
            <ToastContainer/>
        </div>
    );
};


AddedGadget.propTypes = {
    gadget: PropTypes.object.isRequired
};


export default AddedGadget;
