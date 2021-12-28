import React,{useEffect,useState} from 'react'
import axios from "axios"
import "./Widgets.css"
import InfoIcon from '@mui/icons-material/Info';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import NewsArticle from './NewsArticle';
function Widgets() {

    const [articles,setArticles]=useState([])

    useEffect(() => {
        console.log("API CHECK")
       const getArticles=async()=>{
        const resources= await axios.get("https://newsapi.org/v2/top-headlines?country=us&apiKey=ad1a4fed72b440a2ad53ae82e248e2d7")
        //console.log(resources)
        setArticles(resources.data.articles) 
        //console.log(articles)
       }     
        getArticles()
    })

    return (
        <div className='widgets'>
            <div className="widgets_header">
                <h2>LinkedIn News</h2>
                <InfoIcon/>
            </div>
            {console.log("hello widges")
}
            <NewsArticle heading="Java making waves" subtitle="Top news"/>
            <NewsArticle heading="Unemployment South Africa" subtitle="Top news-South Africa"/>
            <NewsArticle heading="25% increase in Telsa shares" subtitle="Top news-Global"/>
            {
                articles.map(({description,title})=>(
                    <NewsArticle title={title} description={description}/>
                ))        
            }
            {
               // console.log("Articles checking")
                console.log(articles)
            }
        </div>
    )
}

export default Widgets
