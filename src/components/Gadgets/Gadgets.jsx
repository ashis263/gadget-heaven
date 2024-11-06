import { useContext, useState } from "react";
import Categories from "../Categories/Categories";
import Gadget from "../Gadget/Gadget";
import GadgetContext from "../../contexts/Gadgetcontext";

const Gadgets = () => {
    const allGadgets = useContext(GadgetContext);
    const [gadgets, setGatgets] = useState([]);
    const [active, setActive] = useState('all');
    const handleActive = (category) => {
        setActive(category);
        if(category === 'all'){
            setGatgets(allGadgets);
        }else{
            setGatgets(allGadgets.filter(gadget => gadget.category === category));
        }
    }
    return (
        <div className="w-4/5 mx-auto mb-10 sm:mb-20">
            <h2 className="text-2xl sm:text-[40px] font-bold text-center relative -top-10 sm:-top-16 lg:-top-18">Explore Cutting-Edge Gadgets</h2>
            <div className="flex flex-col sm:flex-row gap-10">
                <Categories handleActive={handleActive} active={active}></Categories>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 w-4/5 mx-auto sm:w-3/4">
                    {(gadgets.length) ? gadgets.map(gadget => <Gadget key={gadget.product_id} gadget={gadget}></Gadget>) : allGadgets.map(gadget => <Gadget key={gadget.product_id} gadget={gadget}></Gadget>)}
                </div>
            </div>
        </div>
    );
}

export default Gadgets;
