import React from 'react'
import "./RecentItem.css"
function RecentItem({topic}) {
    return (
        <div className="sidebar_recentItem">
            <span className="sidebar_hash">#</span>
            <p>{topic}</p>
        </div>   
    )
}

export default RecentItem
