import React, { useState, useEffect } from 'react';
import Search from './search';
import Results from './Results';

export default function App() {

    const [darkMode, setDarkMode] = useState(false);
    const [currentSongs, setCurrentSongs] = useState([]);
    const [artist, setArtist] = useState("")

useEffect(() => {
    fetch('/songs/all')
    .then(res => res.json())
    .then(data => setCurrentSongs(data))
    .catch(err => console.error('Error fetching songs', err))
}, []);

    function search() {
        const artist = document.getElementById('artist').value;
        
        if (artist.trim() === '') {
            alert('Please enter an artist name');
            return;
        }

        fetch(`/songs/artist/${artist}`)
        .then((res) => res.json())
        .then((data) => setCurrentSongs(data))
        .catch((err) => console.error("Error fetching songs", err));
    }
    // TODO map the current songs to JSX and show them in the 'results' div.

    const background = darkMode ? 'black' : 'white',
            foreground = darkMode ? 'white': 'black';
    return <div style={{
                backgroundColor: background, 
                color: foreground, 
                padding: '10px'
            }}>
            
            <h1>WElcome to Hittastic</h1>
            <Search onSearch={search} onModeChange={updateMode} />

           <Results songs={currentSongs} foreground={foreground} />
            </div>;

    function updateMode() {
        setDarkMode(document.getElementById('mode').value=='dark');
    }
};
