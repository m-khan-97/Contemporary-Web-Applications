import React, { useState, useEffect, useContext }  from 'react';
import Search from './search.jsx';
import Login from './login.jsx';
import AddSong from './addsong.jsx';
import ModeChooser from './modechooser.jsx';
import ModeContext from '../contexts/ModeContext.js';
import useUserStatus from '../hooks/useUserStatus.js';
import { Link } from 'react-router-dom';

export default function App() {
   const [darkMode, setDarkMode] = useState(false);
   const [user,setUser] = useState(null);
   const [admin,setAdmin] = useState(false);
   const [userInfo, setUserInfo] = useUserStatus();

   const {username, isadmin} = userInfo;


    const background = darkMode ? 'black' : 'white',
            foreground = darkMode ? 'white': 'black';
    return (
        <ModeContext.Provider value={{darkMode, setDarkMode}}>
    
            <div style={{
                backgroundColor: background, 
                color: foreground, 
                padding: '10px',
                border: admin ? '5px solid red': ''
            }}>
            <Link to="/search">Go to Search Page</Link> <br/>
            <Link to="/addsong">Add a Song</Link>
            <Login onLoginStatusChange={handleLoginStatusChange} user={username} admin={isadmin} />
            <Search user={user} />
            <br />
            <ModeChooser />
            { isadmin ? <AddSong /> : "" }
            </div>
        </ModeContext.Provider>
    )

    function handleLoginStatusChange(user, admin) {
        setUserInfo({username:user, isadmin: admin})
    }
}
