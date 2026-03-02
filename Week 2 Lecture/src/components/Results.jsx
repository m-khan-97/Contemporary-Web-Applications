import React from "react";

export default function Results({songs, foreground}) {
    return (
        <div id='results' style={{
                margin: '5px',
                width: '100%',
                height: '400px',
                overflow: 'auto',
                border: '1px solid ' + foreground 
            }}>
                {songs.length === 0 ? (
                    <p>No results yet. Try searching above</p>
                ): (
                    <ul>
                        {songs.map((song, index) => (
                            <li key={index}>
                                <strong>{song.title}</strong> - {song.artist} ({song.year})
                            </li>
                        ))}
                    </ul>
            )}

        </div>
    )
}