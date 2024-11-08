import { MdReportGmailerrorred } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";


const Errorpage = () => {
    const navigate = useNavigate();
    return (
        <div className="bg-[rgba(190,190,190,.5)] h-svh pb-5 max-sm:text-center flex flex-col justify-center items-center">
            <HelmetProvider>
                <Helmet>
                    <title>Oops!</title>
                </Helmet>
                <div className="w-4/5 gap-5 flex flex-col sm:flex-row sm:justify-center items-center">
                    <MdReportGmailerrorred className="pt-0 text-[200px] sm:text-[300px] lg:text-[400px] text-red-600" />
                    <div className="w-4/5 sm:w-1/2 space-y-2 sm:space-y-4 flex flex-col">
                        <h2 className=" text-xl sm:text-6xl lg:text-[100px] font-bold">Oops!</h2>
                        <p className="text-gray-500 sm:text-3xl">Error 404! The page you are looking for does not exist.</p>
                    </div>
                </div>
                <button onClick={() => navigate('/')} className="btn btn-outline text-[rgb(149,56,226)] font-bold  max-sm:btn-sm rounded-xl w-40">Go Back</button>
            </HelmetProvider>
        </div>
    );
}

export default Errorpage;
