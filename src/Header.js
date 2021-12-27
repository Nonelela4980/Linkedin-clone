import React from 'react'
import { logout, selectUser } from './features/userSlice';
import {useSelector,useDispatch} from 'react-redux'
import { auth } from './firebase';
import "./Header.css"
import SearchIcon from '@mui/icons-material/Search';
import logoImage from './Images/logo2.png'
import HeaderOption from './HeaderOption';
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';
import LogoutIcon from '@mui/icons-material/Logout';
function header() {

    //const dispatch = useDispatch();

   const logoutFromApp=()=>{
       // dispatch(logout());
        auth.signOut();
    }

   // const user=useSelector(selectUser)

    return (
        <div className="header">
             <div className="header_left">         
                <img src={logoImage} alt="logo"/>
                <div className="header_search">       
                <SearchIcon/>
                    <input placeholder='search' src="text"/>
                </div>
             </div>
             <div className="header_right">
                <HeaderOption Icon={HomeIcon} title="Home"/>
                <HeaderOption Icon={SupervisorAccountIcon} title="My Network"/>
                <HeaderOption Icon={BusinessCenterIcon} title="Jobs"/>
                <HeaderOption Icon={ChatIcon} title="Messaging"/>
                <HeaderOption Icon={NotificationsIcon} title="Notifications"/>
                <HeaderOption 
               
                 title="me"/>
                 <HeaderOption Icon={LogoutIcon} title={"logout"} onClick={logoutFromApp}/>
             </div>
        </div>
    )
}
export default header