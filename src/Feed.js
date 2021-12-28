import React, { useEffect, useState } from "react";
import "./Feed.css"
import CreateIcon from '@mui/icons-material/Create';
import ImageIcon from '@mui/icons-material/Image';
import InputOption from './InputOption';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import EventNoteIcon from '@mui/icons-material/EventNote';
import CalendarViewDayIcon from '@mui/icons-material/CalendarViewDay';
import Post from './Post';
import {db} from "./firebase";
import {firebase} from "./firebase"
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";
import FlipMove from "react-flip-move"

function Feed() {

    const[input,setInput]=useState('')
    const [posts,setPosts]=useState([]) /*posts keeps the posts and setPosts is used everytime we want to change a post
                                        -There can be many posts in the feed */
    const user=useSelector(selectUser)

    //listens to changes in posts collection
    useEffect(() =>{
        db.collection("posts").orderBy('timestamp','desc').onSnapshot(snapshot=>{
            setPosts(snapshot.docs.map((doc)=>(
                {
                    
                    id:doc.id,
                    data:doc.data(),
                }))
            )
        })
    },[])

    const sendPost=(event)=>{
        event.preventDefault();/**prevents the refresh when the enter key is pressed */
        db.collection("posts").add({
            name:user.displayName,
            description:user.email,
            message:input,
            photoUrl:user.photoUrl || '',
            timestamp:firebase.firestore.FieldValue.serverTimestamp()
        })
        setInput('') //clears the text field after the user posted a post
    }

    return (
        <div className="feed">
            <div className="feed_inputContainer">
                <div className="feed_input">
                    <CreateIcon/>
                    <form>
                        <input value={input} onChange={e=>setInput(e.target.value)} type="text"/>
                        <button onClick={sendPost} type="submit">Send</button>
                    </form>
                </div>
                <div className="feed_inputOptions">
                    <InputOption Icon={ImageIcon} title="Photo" color="#70B5F9"/>
                    <InputOption Icon={SubscriptionsIcon} title="Video" 
                    color="#E7A33E"/>
                    <InputOption Icon={EventNoteIcon} title="Event" 
                    color="#C0CBCD"/>
                    <InputOption Icon={CalendarViewDayIcon} title="Write article"
                     color="#7FC15E"/>
                </div>
            </div> 
            {/**Post Section */}
            <FlipMove>
            {posts.map(({id,data:{name,description,message,photoUrl}})=>
                <Post
                key={id}
                name={name}
                description={description}
                message={message}
                photoUrl={photoUrl}/>
                /**Renders every single post*/
            )}
         
            <Post name='Nonelela Cele' 
            description='Just testing'
            message='Hello react'/>
            </FlipMove>

        </div>
    )
}
export default Feed
