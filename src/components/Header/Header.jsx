// import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import Banner from '../Banner/Banner';
import Navbar from '../Navbar/Navbar'

const Header = () => {
    const navigate = useNavigate();
    return (
        <div className='text-white p-5'>
            <div className='border rounded-xl'>
            <div className='bg-[rgb(149,56,226)] m-2 rounded-xl'>
                <Navbar></Navbar>
                <div className='mx-auto w-4/5 lg:w-3/5 flex flex-col items-center text-center gap-3 sm:gap-5 pb-28 sm:pb-36 lg:pb-52'>
                    <h1 className='pt-5 text-3xl md:text-5xl font-bold'>Upgrade Your Tech Accessorize with Gadget Heaven Accessories</h1>
                    <p className='text-xs md:text-sm'>Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
                    <button onClick={() => navigate('/dashboard')} className="text-[rgb(149,56,226)] font-bold btn btn-sm sm:btn-md rounded-3xl w-36">Shop Now</button>
                </div>
            </div>
            </div>
            <Banner></Banner>
        </div>
    );
};


Header.propTypes = {

};


export default Header;
