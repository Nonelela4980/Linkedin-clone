import { Avatar } from '@mui/material'
import React from 'react'
import {useSelector} from "react-redux"
import "./Sidebar.css"
import RecentItem from './RecentItem'
import { selectUser } from './features/userSlice'

function Sidebar() {

    const user=useSelector(selectUser);

   /* const recentItem=(topic)=>{
        <div className="sidebar_recentItem">
            <span className="sidebar_hash">#</span>
            <p>{topic}</p>
        </div>     
    };*/
    return (
        <div className="sidebar">
            <div className="sidebar_top">
            <img src="https://libg.s3.us-east-2.amazonaws.com/download/Rainbow-Drip.jpg" alt=""/>
            <Avatar src={user.photoURL} className="sidebar_avatar">
                {user.email[0]}
            </Avatar>
            <h2>{user.displayName}</h2>
            <h4>{user.email}</h4>
            </div>
            <div className="sidebar_stats">
            <div className="sidebar_stat">
                <p>Who viewed you</p>
                <p className="sidebar_statNumber">256</p>
            </div>
            <div className="sidebar_stat">
                <p>Views on post</p>
                <p className="sidebar_statNumber">256</p>
            </div>
            
            </div>

            <div className="sidebar_bottom">
                <p>Recent</p>
                <RecentItem topic="developer"/>
                <RecentItem topic="engineer"/>
                <RecentItem topic="devsOps"/>
                <RecentItem topic="design"/>
                <RecentItem topic="linux"/>
            </div>
        </div>
    )
}

export default Sidebar
