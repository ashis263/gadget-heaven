import { useContext } from "react";
import GadgetContext from "../../Gadgetcontext";
import PropTypes from 'prop-types';

const Categories = ({active, handleActive}) => {
    const categories = [];
    const gadgets = useContext(GadgetContext);
    gadgets.map(gadget => {
        if(!categories.includes(gadget.category)){
            categories.push(gadget.category);
        }
    });
    return (
        <div className="mx-auto grid grid-cols-2 sm:block bg-white sm:w-1/4 p-5 rounded-xl gap-2 sm:space-y-5 self-start shadow-md">
            <button onClick={()=>handleActive('all')} style={(active === 'all' ? {backgroundColor: "rgb(149,56,226)", color: "white"} : {})} className="btn btn-sm sm:btn-md rounded-3xl sm:w-full bg-[rgba(190,190,190,0.15)]">All Products</button>
            {
                categories.map((category, index) => <button key={index} style={(active === category ? {backgroundColor: "rgb(149,56,226)", color: "white"} : {})} onClick={()=>handleActive(category)} className="sm:w-full btn btn-sm sm:btn-md rounded-3xl bg-[rgba(190,190,190,0.15)]">{category}</button>)
            }
        </div>
    );
}

Categories.propTypes = {
    active: PropTypes.string.isRequired,
    handleActive: PropTypes.func.isRequired
}

export default Categories;
