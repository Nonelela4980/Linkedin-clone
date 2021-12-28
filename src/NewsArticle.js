import React from 'react'
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import "./NewsArticle.css"
function NewsArticle({heading,subtitle}) {
    return (
        <div className='widgets_article'>
        <div className="widgets_articleLeft">
        <FiberManualRecordIcon className='mu_icon'/>
        </div>
        <div className="widgets_articleRight">
        <h4>{heading}</h4>  
        <p>{subtitle}</p>  
        </div>
    </div>
    )
}

export default NewsArticle
