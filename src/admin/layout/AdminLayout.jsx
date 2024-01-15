// withAdminLayout.js
import React from 'react';
import AdminSidebar from '../components/AdminSidebar';
import AdminFooter from '../components/AdminFooter';
import AdminHeader from '../components/AdminHeader';


const withAdminLayout = (WrappedComponent) => {
    return (props) => (
        <div id="admin-container">
            <div className='admin-sidebar'>
            <AdminSidebar />

            </div>
            <div id="admin-content">
                <AdminHeader />
                <WrappedComponent {...props} />
                <AdminFooter />
            </div>
        </div>
    );
};

export default withAdminLayout;
