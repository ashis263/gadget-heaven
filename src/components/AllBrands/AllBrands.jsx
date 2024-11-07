import { useContext } from "react";
import GadgetContext from "../../contexts/Gadgetcontext";
import PropTypes from 'prop-types';
import { Tabs, TabList } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const AllBrands = ({active, handleActive}) => {
    const brands = [];
    const gadgets = useContext(GadgetContext);
    gadgets.map(gadget => {
        if(!brands.includes(gadget.brand)){
            brands.push(gadget.brand);
        }
    });
    return (
        <Tabs>
            <TabList className="flex flex-wrap justify-center gap-x-5 gap-y-2 relative -top-20 sm:-top-16 p-5 rounded-xl border shadow-md bg-gray-300">
            {
                brands.map((brand, index) => <button key={index} className={(active === brand ? 'bg-[rgb(149,56,226)] text-white py-1 px-2 rounded' : 'py-1 px-2 border border-white rounded')} onClick={()=>handleActive(brand)}>{brand}</button>)
            }
        </TabList>
        </Tabs>
    );
}

AllBrands.propTypes = {
    active: PropTypes.string.isRequired,
    handleActive: PropTypes.func.isRequired
}

export default AllBrands;