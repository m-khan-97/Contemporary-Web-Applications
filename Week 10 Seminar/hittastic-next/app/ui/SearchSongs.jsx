// app/ui/SearchSongs.jsx
"use client";

import { useState } from "react";


export default function SearchSongs() {
  const [artist, setArtist] = useState("");
  const [songs, setSongs] = useState([]);
  const [status, setStatus] = useState("");

  

    // To do

  return (
    <>
      <p>
        <label>
          Artist:
          <br />
          <input
            value={artist}
            onChange={(e) => setArtist(e.target.value)}
            placeholder="Oasis"
          />
        </label>
        <button onClick={handleSearch} style={{ marginLeft: "0.5rem" }}>
          Search
        </button>
      </p>

      {status && <p><strong>{status}</strong></p>}

      <ul>
        {songs.map((song) => (
          <li key={song.id}>
            <strong>{song.title}</strong> by {song.artist} ({song.year})
          </li>
        ))}
      </ul>
    </>
  );
}