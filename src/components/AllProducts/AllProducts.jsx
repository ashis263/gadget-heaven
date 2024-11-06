import { useContext } from "react";
import GadgetContext from "../../contexts/Gadgetcontext";
import Gadget from "../Gadget/Gadget";

const AllProducts = () => {
    const gadgets = useContext(GadgetContext);
    return (
        <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {
                    gadgets.map(gadget => <Gadget key={gadget.product_id} gadget={gadget}></Gadget>)
                }
            </div>
        </div>
    );
}

export default AllProducts;
