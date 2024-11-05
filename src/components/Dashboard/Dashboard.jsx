// import PropTypes from 'prop-types';

import { Helmet, HelmetProvider } from "react-helmet-async";


const Dashboard = () => {
    return (
        <div>
            <HelmetProvider>
                <Helmet>
                    <title>Gradget Heaven | Dashboard</title>
                </Helmet>
                <p>Dashboard</p>
            </HelmetProvider>
        </div>
    );
};


Dashboard.propTypes = {

};


export default Dashboard;
