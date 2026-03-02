import React, { useState } from 'react';

export default function App() {

    const [darkMode, setDarkMode] = useState(false);
    const [currentSongs, setCurrentSongs] = useState([])

    // TODO create another state variable containing the current songs.

    const hardCodedSongs = [{
        "title": "Woop",
        "artist": "Woop",
        "year": 1959
    }, { 
        "title": "I Am The Walrus",
        "artist": "The Beatles",
        "year": 1967
    }, { 
        "title": "All You Need Is Love",
        "artist": "The Beatles",
        "year": 1967
    }, {
        "title" : "Life on Mars",
        "artist" : "David Bowie",
        "year": 1971
    }, { 
        "title": "Fashion",
        "artist": "David Bowie",
        "year": 1980
    }];

    // TODO map the current songs to JSX and show them in the 'results' div.

    const background = darkMode ? 'black' : 'white',
            foreground = darkMode ? 'white': 'black';
    return <div style={{
                backgroundColor: background, 
                color: foreground, 
                padding: '10px'
            }}>
            
            <label htmlFor='artist'>Enter an artist:</label>
            <br />
            <input id='artist' /><br />
            <input type='button' onClick={search} value='Search!' />
            <br />
            <label htmlFor='mode'>Choose mode:</label>
            <br />
            <select id='mode' onChange={updateMode}>
            <option value='light'>Light mode</option>
            <option value='dark'>Dark mode</option>
            </select>

            <div id='results' style={{
                margin: '5px',
                width: '100%',
                height: '400px',
                overflow: 'auto',
                border: '1px solid ' + foreground 
            }}>
                {currentSongs.length === 0 ? (
                    <p>No results yet. Try searching above</p>
                ): (
                    <ul>
                        {currentSongs.map((song, index) => (
                            <li key={index}>
                                <strong>{song.title}</strong> - {song.artist} ({song.year})
                            </li>
                        ))}
                    </ul>
            )}
            </div>
            </div>;

    function search() {
        const artist = document.getElementById('artist').value;
        

        const filteredSongs = hardCodedSongs.filter ( 
            song => song.artist == artist
        );

        console.log(`Filtered songs: ${JSON.stringify(filteredSongs)}`);
        setCurrentSongs(filteredSongs);
        // TODO store the filtered songs in state.
    }

    function updateMode() {
        setDarkMode(document.getElementById('mode').value=='dark');
    }
};
