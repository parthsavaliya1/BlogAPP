import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthContext';

const AdminHeader = () => {
    const { user } = useContext(AuthContext);
    const showUserName = () => {
        return `${user?.user?.firstName} ${user?.user?.lastName}`
    }
    const showProfileImage = () => {
        if (user?.user?.profilePicture) {
            return (
                <div>
                    <img src={user?.user?.profilePicture} />
                </div>
            )

        } else {
            return (
                <div className='admin-profile-container'>
                    <div className='admin-profile-avatar'>
                        <span>{user?.user?.firstName?.[0]}</span>
                        <span>{user?.user?.lastName?.[0]}</span>
                    </div>
                </div>

            )

        }
    }

    const handleViewSite = () => {
        const siteUrl = '/';  
        window.open(siteUrl, '_blank', 'noopener noreferrer');
    }
    return (
        <div className='admin-header'>
            <div className='header-inner'>
                <div onClick={() => handleViewSite()} className='view-site'>
                    View Site
                </div>
                <div className='admin-profile-nav'>

                    <div className='header-link admin-name'>
                        {showUserName()}
                    </div>
                    <div >
                        {showProfileImage()}
                    </div>

                </div>
            </div>




        </div >
    )
}

export default AdminHeader



