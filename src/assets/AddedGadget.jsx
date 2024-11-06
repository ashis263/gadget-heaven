import PropTypes from 'prop-types';
import { AiOutlineCloseCircle } from "react-icons/ai";
import { useContext } from 'react';
import CartContext from "../contexts/CartContext";


const AddedGadget = ({ gadget }) => {
    const {cart, setCart} = useContext(CartContext);
    const handleRemove = () => {
        const gadgetIndex = cart.indexOf(gadget.product_id);
        cart.splice(gadgetIndex, 1);
        setCart([...cart]);
    }
    return (
        <div className='py-5 sm:py-8'>
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
                    </div>
                </div>
                <button onClick={handleRemove} className='w-24 sm:w-auto btn btn-sm rounded-2xl sm:border-none border-2 sm:bg-white border-red-200 bg-red-50  text-red-400 text-2xl'><AiOutlineCloseCircle />
                </button>
            </div>
        </div>
    );
};


AddedGadget.propTypes = {
    gadget: PropTypes.object.isRequired
};


export default AddedGadget;
