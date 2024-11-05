// import PropTypes from 'prop-types';
import { Helmet, HelmetProvider } from "react-helmet-async";

const Brands = () => {
    return (
        <div>
            <HelmetProvider>
                <Helmet>
                    <title>Gradget Heaven | Brands</title>
                </Helmet>
                <p>Brans</p>
            </HelmetProvider>
        </div>
    );
};


Brands.propTypes = {

};


export default Brands;
