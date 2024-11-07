import { useLoaderData, useParams } from "react-router-dom";
import ReactStars from "react-rating-stars-component";
import { IoCartOutline } from "react-icons/io5";
import { IoMdHeartEmpty } from "react-icons/io";
import { useContext, useState } from "react";
import CartContext from "../../contexts/CartContext";
import WishContext from "../../contexts/WishContext";
import { ToastContainer, toast, Flip } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const ProductDetails = () => {
    const { id } = useParams();
    const { cart, setCart } = useContext(CartContext);
    const { wishlist, setWishlist } = useContext(WishContext);
    const products = useLoaderData();
    const product = products.find(item => item.product_id === id);
    const [isAdded, setIsAdded] = useState(cart.includes(product.product_id));
    const [isWished, setIsWished] = useState(cart.includes(product.product_id));
    const rating = {
        size: 30,
        value: product.rating,
        edit: false,
        isHalf: true,
    };
    const addedGadgets = [];
    for (let gadget of products) {
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
    const handleCart = () => {
        if (!cart.includes(product.product_id) && totalPrice + product.price <= 5000) {
            toast.success(`"${product.product_title}" is added to cart`, {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Flip,
            });
            setCart([...cart, product.product_id]);
            setIsAdded(true);
        } else {
            toast.error(`Total price exceeded 5000, cannot add`, {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Flip,
            });
        }
    };
    const handleHeart = () => {
        if (!wishlist.includes(product.product_id)) {
            setWishlist([...wishlist, product.product_id]);
            setIsWished(true);
        }
        toast.success(`"${product.product_title}" is added to wishlist`, {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Flip,
        });
    };
    return (
        <div>
            <div className="bg-[rgb(149,56,226)] text-center text-white">
                <div className="w-3/5 mx-auto pt-5 sm:pt-10 pb-32 sm:pb-40">
                    <h3 className="text-xl sm:text-3xl font-bold">Product Details</h3>
                    <p className="text-xs sm:text-sm">{product.description}</p>
                </div>
            </div>
            <div className="bg-[rgba(190,190,190,0.15)]">
                <div className="w-4/5 sm:w-2/3 mx-auto flex flex-col sm:flex-row gap-5 bg-white p-7 relative -top-24 sm:-top-32 border rounded-xl items-center text-center sm:text-start">
                    <div className="sm:w-1/2">
                        <img className="border rounded-xl self-start" src={product.product_image} alt={product.product_title} />
                    </div>
                    <div className="space-y-1 sm:w-1/2">
                        <h3 className="text-lg sm:text-2xl font-bold">{product.product_title}</h3>
                        <p className="text-lg font-semibold">Price: {product.price}$</p>
                        <div className={product.availability ? 'bg-green-205 border border-green-300 w-32 rounded-full' : 'bg-red-50 border border-red-300 w-32 rounded-full'}>
                            <p className={product.availability ? 'text-green-500 font-semibold text-center' : 'text-red-500 font-semibold text-center'}>{product.availability ? 'In Stock' : 'Stocked Out'}</p>
                        </div>
                        <p className="text-xs">{product.description}</p>
                        <p className="font-semibold">{product.brand} {product.category}</p>
                        <p className="font-semibold text-lg">Specifications: </p>
                        <div>
                            {
                                product.Specification.map((item, index) => <p key={index}>{index + 1}. {item}</p>)
                            }
                        </div>
                        <p className="font-bold text-lg">Rating: </p>
                        <div className="flex sm:block justify-center">
                            <ReactStars {...rating} />
                        </div>
                        <div className="flex gap-2 items-center justify-center sm:justify-normal">
                            <button onClick={handleCart} className={`bg-[rgb(149,56,226)] font-bold btn btn-sm rounded-3xl w-36 ${(isAdded || !product.availability) ? 'text-black' : 'text-white'}`} disabled={isAdded || !product.availability}>Add to cart <IoCartOutline className={isAdded || !product.availability ? '' : 'text-white'} /></button>
                            <button onClick={handleHeart} className={`m-2 bg-white p-[6px] rounded-full border ${isWished ? "text-gray-300" : "text-black"}`} disabled={isWished}>
                                <IoMdHeartEmpty />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
}

export default ProductDetails;
