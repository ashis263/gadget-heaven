import { Helmet, HelmetProvider } from "react-helmet-async";
import Gadget from "../Gadget/Gadget";
import { useContext, useState } from "react";
import GadgetContext from "../../contexts/Gadgetcontext";
import AllBrands from "../AllBrands/AllBrands";

const Brands = () => {
    const allGadgets = useContext(GadgetContext);
    const [gadgets, setGatgets] = useState([]);
    const [active, setActive] = useState('all');
    const handleActive = (brand) => {
        setActive(brand);
        setGatgets(allGadgets.filter(gadget => gadget.brand === brand))
    }
    return (
        <div>
            <HelmetProvider>
                <Helmet>
                    <title>Gradget Heaven | Brands</title>
                </Helmet>
                <div><div className="bg-[rgb(149,56,226)] text-center text-white pb-20 lg:pb-10">
                    <div className="w-3/5 mx-auto py-5 sm:py-10">
                        <h3 className="text-xl sm:text-3xl font-bold">Brands Available</h3>
                    </div>
                </div>
                    <div className="w-4/5 mx-auto mb-10 sm:mb-20">
                        <div className="gap-10">
                            <AllBrands handleActive={handleActive} active={active}></AllBrands>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 w-4/5 mx-auto sm:w-3/4">
                                {(gadgets.length) ? gadgets.map(gadget => <Gadget key={gadget.product_id} gadget={gadget}></Gadget>) : allGadgets.map(gadget => <Gadget key={gadget.product_id} gadget={gadget}></Gadget>)}
                            </div>
                        </div>
                    </div>
                </div>
            </HelmetProvider>
        </div>
    );
};


export default Brands;
