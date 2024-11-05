// import PropTypes from 'prop-types';
import { Helmet, HelmetProvider } from "react-helmet-async";

const Statistics = () => {
    return (
        <div>
            <HelmetProvider>
                <Helmet>
                    <title>Gradget Heaven | Statistics</title>
                </Helmet>
                <p>stat</p>
            </HelmetProvider>
        </div>
    );
};


Statistics.propTypes = {

};


export default Statistics;
