import { MdReportGmailerrorred } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";


const Errorpage = () => {
    const navigate = useNavigate();
    return (
        <div className="bg-gray-400 h-svh pb-5 text-center flex flex-col items-center justify-center">
            <HelmetProvider>
                <Helmet>
                    <title>Oops!</title>
                </Helmet>
                <MdReportGmailerrorred className="pt-0 text-[200px] sm:text-[300px] lg:text-[400px] text-red-600" />
                <div className="w-4/5 space-y-2 sm:space-y-4 flex flex-col items-center">
                    <h2 className="text-xl sm:text-6xl lg:text-[100px] font-bold">Oops!</h2>
                    <p className="sm:text-3xl">The page you are looking for does not exist!</p>
                    <button onClick={() => navigate('/')} className="btn max-sm:btn-sm rounded-xl w-40">Go Back</button>
                </div>
            </HelmetProvider>
        </div>
    );
}

export default Errorpage;
