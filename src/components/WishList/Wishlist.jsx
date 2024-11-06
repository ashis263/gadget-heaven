import { useContext } from "react";
import WishContext from '../../contexts/WishContext'
import GadgetContext from '../../contexts/Gadgetcontext'
import AddedGadget from "../AddedGadget/AddedGadget";


const Wishlist = () => {
    const { wishlist} = useContext(WishContext);
    const gadgets = useContext(GadgetContext);
    const addedGadgets = [];
    for (let gadget of gadgets) {
        for (let id of wishlist) {
            if (id === gadget.product_id) {
                addedGadgets.push(gadget);
            }
        }
    }
    return (
        <div className="bg-[rgba(190,190,190,0.15)] py-10 sm:py-20">
            <div className="w-[90%] mx-auto">
                <div className="flex flex-col sm:flex-row items-center gap-3 justify-between">
                    <h3 className="text-2xl font-bold">Wishlist</h3>
                </div>
            </div>
            <div className="grid grid-cols-1 w-[90%] mx-auto">
                {
                    addedGadgets.map((gadget, index) => <AddedGadget key={index} gadget={gadget}></AddedGadget>)
                }
            </div>
        </div>
    );
}

export default Wishlist;
