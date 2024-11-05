import { useContext } from "react";
import GadgetContext from "../../Gadgetcontext";
// import Gadget from "../Gadget/Gadget";

const Smartphones = () => {
    const allGadgets = useContext(GadgetContext);
    const gadgets = allGadgets.filter(gadget => gadget.category === 'Smartphones');
    console.log(gadgets);
    return (
        <div>
            
        </div>
    );
}

export default Smartphones;
