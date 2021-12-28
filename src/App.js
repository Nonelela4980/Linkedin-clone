import React, {useEffect} from "react";

import './App.css';
import Header from "./Header"
import Sidebar from './Sidebar';
import Feed from './Feed';
import { login, logout, selectUser } from './features/userSlice';
import Login from './Login';
import { auth } from "./firebase";
import { useDispatch, useSelector } from "react-redux";
import Widgets from "./Widgets"

function App() {

  const user=useSelector(selectUser)
  const dispatch=useDispatch()
  useEffect(() => {
    auth.onAuthStateChanged(userAuth=>{
      if(userAuth){
        //allows a user to stay logged in until the user
          dispatch(login({
            email:userAuth.email,
            uid:userAuth.uid,
            displayName:userAuth.displayName,
            photoURL:userAuth.photoURL,
          }))
      }
      else{
          dispatch(logout());
      }
    })
  }, [])


  return (
    <div className="app">
                <Header/>
     {!user? <Login/>:(
        //if there's no user render the login page otherwise render the whole application
             <div className="app_body">   
             <Sidebar/>
             <Feed/>
             <Widgets/>
           </div> 
          )}

    </div>
  );
}
export default App;
