import img from '../../assets/banner.jpg'

const Banner = () => {
    return (
        <div className='w-4/5 sm:w-3/5 mx-auto border rounded-xl relative -top-24 sm:-top-32 lg:-top-48 bg-[rgba(255,255,255,0.19)]'>
            <img className='aspect-video p-3 rounded-3xl' src={img} alt="" />
        </div>
    );
}

export default Banner;
