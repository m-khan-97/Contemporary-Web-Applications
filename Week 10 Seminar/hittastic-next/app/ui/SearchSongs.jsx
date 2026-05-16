// app/ui/SearchSongs.jsx
"use client";

import { useState } from "react";
import { db } from "../../lib/firebase";
import { collection, doc, getDocs, query, where } from "firebase/firestore";


export default function SearchSongs() {
  const [artist, setArtist] = useState("");
  const [songs, setSongs] = useState([]);
  const [status, setStatus] = useState("");

  async function handleSearch() {
    if(!artist) {
      setStatus("Please enter an artist name");
      setSongs([]);
      return;
    }

    setStatus("Searching...");
    setSongs([])

    try {
      const q = query(
        collection(db, "songs"),
        where("artist", "==", artist)
      );

      const snapshot = await getDocs(q);

      if(snapshot.empty) {
        setStatus("No songs found.");
        setSongs([]);
      } else {
        const results = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data()
        }));
        setSongs(results);
        setStatus(`Found ${results.length} song(s)`);
      }
    } catch(err) {
      console.error(err);
      setStatus("Error searching:" + err.message);
    }
  }

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