// Search results component - display the search results

import React, { useContext } from 'react';
import ModeContext from '../contexts/ModeContext';

export default function SearchResults({songsArray, user}) {
    const {darkMode} = useContext(ModeContext);
    
    const songsJSX = songsArray.map ( song => 
        <li>{song.title} by {song.artist}, year {song.year} 
        {user ? <input type='button' defaultValue='Buy!' /> : ""} </li>
    );
    
    return <div id='results' style={{
                margin: '5px',
                width: '100%',
                height: '400px',
                overflow: 'auto',
                border: '1px solid ' + (darkMode ? 'white' : 'black')
            }}>
            <ul>{songsJSX}</ul>
            </div>
    
}
