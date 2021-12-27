import React,{useState} from 'react'
import {useDispatch} from 'react-redux'
import "./Login.css"
import logo from "./Images/Linkedin_logo.png"
import {auth} from "./firebase"
import { login } from './features/userSlice'
function Login() {
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [name,setName]=useState("");
    const [profilePicture,setProfilePicture]=useState("")
   const dispatch = useDispatch();

    const register=()=>{
        if(!name){
            return alert('A full name is required')
        }
        auth.createUserWithEmailAndPassword(email,password).then((userAuth)=>{
            userAuth.user.updateProfile({
                displayName:name,
                photoURL:profilePicture,
            })
            .then(()=>{
                dispatch(login({
                    email:userAuth.user.email,
                    uid:userAuth.user.uid,
                    displayName:name,
                    photoURL:profilePicture,
                }) 
                )
            });
        }).catch(error=>alert(error));
    };
    const loginUser=(event)=>{
        event.preventDefault(); //avoid refreshing when clicked3
        auth.signInWithEmailAndPassword(email,password).then((userAuth)=>{
            dispatch(login({
                email:userAuth.user.email,
                uid:userAuth.user.uid,
                displayName:userAuth.user.displayName,
                photoURL:userAuth.user.photoURL,
            }))
        }).catch(error=>alert(error))
    };

    return (
        <div className='login'>
          <img src={logo} alt='logo'/>
          <form>
              <input value={name} onChange={e=>setName(e.target.value)} placeholder='full name' type="text"/>

              <input value={email} onChange={event=>setEmail(event.target.value)} placeholder='Email' type="email"/>

              <input value={profilePicture}
              
              onChange={event=>setProfilePicture(event.target.value)}
              placeholder='Profile picture url' type="text"/>

              <input value={password} onChange={e=>setPassword(e.target.value)} placeholder='Password' type="password"/>

              <button type='submit' onClick={loginUser}>Sign In</button>
          </form>
          <p>Not registered? 
              <span className='login_registerNow' onClick={register}>Register Now!</span>
          </p>
        </div>
    )
}
export default Login
