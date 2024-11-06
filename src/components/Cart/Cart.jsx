import { useContext } from "react";
import CartContext from '../../contexts/CartContext'
import GadgetContext from '../../contexts/Gadgetcontext'
import { TbSortDescendingNumbers } from "react-icons/tb";
import AddedGadget from "../AddedGadget/AddedGadget";
import { useNavigate } from "react-router-dom";
import img from '../../assets/Group.png'


const Cart = () => {
    const { cart, setCart } = useContext(CartContext);
    const gadgets = useContext(GadgetContext);
    const navigate = useNavigate();
    const addedGadgets = [];
    for (let gadget of gadgets) {
        for (let id of cart) {
            if (id === gadget.product_id) {
                addedGadgets.push(gadget);
            }
        }
    }
    let totalPrice = 0;
    for (let gadget of addedGadgets) {
        totalPrice += gadget.price;
    }
    const handlePurchase = () => {
        navigate('/')
        setCart([]);
    }
    return (
        <div className="bg-[rgba(190,190,190,0.15)] py-10 sm:py-20">
            <div className="w-[90%] mx-auto">
                <div className="flex flex-col sm:flex-row items-center gap-3 justify-between">
                    <h3 className="text-2xl font-bold">Cart</h3>
                    <div className="flex flex-col sm:flex-row items-center gap-1 sm:gap-3">
                        <h3 className="text-lg sm:text-2xl font-bold">Total Price: {totalPrice}</h3>
                        <button onClick='' className="text-[rgb(149,56,226)] border border-[rgb(149,56,226)] font-bold btn btn-sm rounded-3xl w-36 flex gap-2 items-center">Sort by price <TbSortDescendingNumbers />
                        </button>
                        <a href='#my_modal_8'>
                            <button disabled={!cart.length} className="text-white bg-[rgb(149,56,226)] font-bold btn btn-sm rounded-3xl w-36 flex gap-2 items-center">Purchase
                            </button>
                        </a>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-1 w-[90%] mx-auto">
                {
                    addedGadgets.map((gadget, index) => <AddedGadget key={index} gadget={gadget}></AddedGadget>)
                }
            </div>
            <div className="modal" role="dialog" id="my_modal_8">
                <div className="max-sm:w-3/4  modal-box flex flex-col items-center gap-2">
                    <img className="py-5" src={img} alt="" />
                    <div className="space-y-2 py-1 text-center">
                        <h3 className="text-2xl font-bold">Payment Succesfull!</h3>
                        <p className="">Thanks for purchasing.</p>
                        <p>Total: {totalPrice}</p>
                    </div>
                    <div className="modal-action">
                        <button onClick={handlePurchase} className="btn btn-sm btn-wide">Close</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cart;
