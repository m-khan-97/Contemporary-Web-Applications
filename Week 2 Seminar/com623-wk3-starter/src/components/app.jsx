import React, { useState, useEffect }  from 'react';
import Search from './search.jsx';
import SearchResults from './searchresults.jsx';
import Login from './login.jsx';
import AddSong from './addsong.jsx';

export default function App() {
   const [darkMode, setDarkMode] = useState(false);
   const [currentSongs, setCurrentSongs] = useState([]);
   const [currentArtist, setCurrentArtist] = useState('')
   const [username, setUsername] = useState('');

    useEffect(() => {
        checkLogin();
    }, []);

    const background = darkMode ? 'black' : 'white',
            foreground = darkMode ? 'white': 'black';
    return <div style={{
                backgroundColor: background, 
                color: foreground, 
                padding: '10px'
            }}>
            <Login
                username={username}
                onLoginSuccess={handleLoginSuccess}
                onLogout={handleLogout}
            />
			<Search onSearchEntered={searchCallback}/>
            <br />
            <label htmlFor='mode'>Choose mode:</label>
            <br />
            <select id='mode' onChange={updateMode}>
            <option value='light'>Light mode</option>
            <option value='dark'>Dark mode</option>
            </select>
            <AddSong username={username} onSongAdded={handleSongAdded} />
            <SearchResults songsArray={currentSongs} foreground={foreground} />
			</div>;

    async function checkLogin() {
        const response = await fetch('/login');
        const data = await response.json();
        setUsername(data?.username || '') 
    }

    function handleLoginSuccess(newUsername) {
        setUsername(newUsername)
    }

    function handleLogout() {
        setUsername('')
    }

    function handleSongAdded(){
        if(currentArtist) {
            searchCallback(currentArtist)
        }
    }

    async function searchCallback() {
        const artist = document.getElementById('artist').value;

        const response = await fetch(`/artist/${artist}`);
		
		const songs = await response.json();
		
        //  store the  songs in state.
		setCurrentSongs(songs);
    }

    function updateMode() {
        setDarkMode(document.getElementById('mode').value=='dark');
    }
}
