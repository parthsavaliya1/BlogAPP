import React, { useContext } from 'react'
import Logo from '../../assets/blogfooter.png'
import { headerTab } from '../utils'
import { IoMdLogOut } from "react-icons/io";
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';

const AdminSidebar = () => {
  const {setUser} = useContext(AuthContext)
  const navigate = useNavigate();

  const handleLogout = () => {
    setUser(null)
    localStorage.removeItem('user')
    navigate('/login');
  }

  const handleNavTabClick = (link) => {
    navigate(link)
  }
  return (
    <div className='admin-sidebar-main'>
      <div className="admin-siderbar-logo">
        <img src={Logo} />
      </div>
      <div className='admin-tab-list'>
        <ul className='list-type'>
          {headerTab?.map((item,index) => (
            <li key={index} onClick={() => handleNavTabClick(item?.link)}>
              <span>{item?.icon}</span>
              <span className='tab-name'>
                {item?.name}
              </span>
            </li>
          ))}
        </ul>
      </div>
      <div className='logout-admin'>
        <div className='logout-icon'>
          <IoMdLogOut color='white' />
        </div>
        <div onClick={() => handleLogout()}>
          Logout
        </div>
      </div>
    </div>
  )
}

export default AdminSidebar