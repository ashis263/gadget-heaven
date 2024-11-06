import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';


const Gadget = ({ gadget }) => {
    const {product_image, product_title, product_id, price} = gadget;
    const navigate = useNavigate();
    return (
        <div className='bg-white rounded-xl p-5 shadow-md space-y-2 flex flex-col items-center sm:items-start'>
            <img className='border rounded-xl aspect-square' src={product_image} alt={product_title} />
            <h4 className='text-lg sm:text-xl font-bold'>{product_title}</h4>
            <p className='text-xs sm:text-sm text-gray-500'>Price: {price}$</p>
            <button onClick={() => navigate(`/details/${product_id}`)} className='btn btn-sm w-32 rounded-2xl border bg-white border-purple-400 text-purple-700'>View Details</button>  
        </div>
    );
};


Gadget.propTypes = {
    gadget: PropTypes.object.isRequired
};


export default Gadget;
