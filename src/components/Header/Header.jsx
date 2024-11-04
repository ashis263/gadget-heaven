// import PropTypes from 'prop-types';
import Navbar from '../Navbar/Navbar'

const Header = () => {
    return (
        <div className='text-white m-5 border rounded-xl'>
            <div className='bg-[rgb(149,56,226)] m-2 rounded-xl'>
                <Navbar></Navbar>
                <div className='mx-auto w-4/5 lg:w-3/5 flex flex-col items-center text-center gap-3 sm:gap-5 pb-40'>
                    <h1 className='pt-5 text-3xl md:text-5xl font-bold'>Upgrade Your Tech Accessorize with Gadget Heaven Accessories</h1>
                    <p className='text-xs md:text-sm'>Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
                    <button className="text-[rgb(149,56,226)] font-bold btn btn-sm sm:btn-md rounded-3xl px-8">Shop Now</button>
                </div>
            </div>
        </div>
    );
};


Header.propTypes = {

};


export default Header;
