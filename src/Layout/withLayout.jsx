import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';


const withLayout = (WrappedComponent) => {
    return (props) => (
        <>
            <Header />
            <WrappedComponent {...props} />
            <Footer />
        </>
    );
};

export default withLayout;
