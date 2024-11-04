const Footer = () => {
    return (
        <div className="bg-white py-14 sm:py-24 sm:text-center">
            <div className="space-y-2 sm:space-y-10">
                <div className="sm:space-y-2 w-2/3 mx-auto">
                    <h3 className="text-2xl sm:text-3xl font-bold">Gadget Heaven</h3>
                    <p className="text-xs sm:text-sm text-gray-500">Leading the way in cutting-edge technology and innovation.</p>
                </div>
                <hr />
                <div className="flex flex-col gap-5 sm:gap-0 sm:flex-row justify-between w-2/3 mx-auto">
                    <div className="space-y-1 sm:space-y-2">
                        <h4 className="font-semibold">Services</h4>
                        <ul className="text-xs sm:text-sm text-gray-500 sm:space-y-1">
                            <p>Product Support</p>
                            <p>Order Tracking</p>
                            <p>Shipping & Delivery</p>
                            <p>Returns</p>
                        </ul>
                    </div>
                    <div className="space-y-1 sm:space-y-2">
                        <h4 className="font-semibold">Company</h4>
                        <ul className="text-xs sm:text-sm text-gray-500 sm:space-y-1">
                            <p>About Us</p>
                            <p>Careers</p>
                            <p>Contact</p>
                        </ul>
                    </div>
                    <div className="space-y-1 sm:space-y-2">
                        <h4 className="font-semibold">Legal</h4>
                        <ul className="text-xs sm:text-sm text-gray-500 sm:space-y-1">
                            <p>Terms of Service</p>
                            <p>Privacy Policy</p>
                            <p>Cookie Policy</p>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
