import React, {useState} from 'react';

export default function AddSong({username, onSongAdded}) {
    const [title, setTitle] = useState('');
    const [artist, setArtist] = useState('');
    const [year, setYear] = useState('');
    const [message, setMessage] = useState('');

    if(!username) {
        return (
            <div style={{marginTop: '12px', marginBottom: '12px'}}>
                <h3>Add Song</h3>
                <p style={{color:'red'}}>Please login to Add Song</p>
            </div>
        );
    }

    return (
         <div style={{marginTop: '12px', marginBottom: '12px'}}>
            <h3>Add Song</h3>
            <label htmlFor='song-title'>Title:</label>
            <br />
            <input
                id='song-title'
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <br />
            <label htmlFor='song-artist'>Artist</label>
            <br />
            <input
                id='song-artist'
                value={artist}
                onChange={(e) => setArtist(e.target.value)}
            />
            <br />
            <label htmlFor="song-year">Year: </label>
            <br />
            <input
                id='song-year'
                value={year}
                onChange={(e) => setYear(e.target.value)}
            />
            <br />
            <button type='button' onClick={handleAddSong}>
                Add Song
            </button>
            {message ? <p>{message}</p> : null}
        </div>
    );

    async function handleAddSong() {
        setMessage('');
        try {
            const response = await fetch('/song/new', {
                method: 'POST',
                headers: {'Content-Type' : 'application/json'},
                body: JSON.stringify({title, artist, year})
            });
            const data = await response.json();
            if(!response.ok) {
                setMessage(data?.error || 'Failed to add song');
                return;
            }
            setMessage(`Song added successfully with id ${data.id}`);
            setTitle('');
            setArtist('');
            setYear('');
            onSongAdded();
        } catch (e) {
            setMessage('Network error while addongsong');
        }
    }
}