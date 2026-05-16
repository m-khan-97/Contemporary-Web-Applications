// app/ui/AddSongForm.jsx
"use client";

import { useState } from "react";
import { db } from "../../lib/firebase";
import { collection, addDoc } from "firebase/firestore";


export default function AddSongForm() {
  const [title, setTitle] = useState("");
  const [artist, setArtist] = useState("");
  const [year, setYear] = useState("");
  const [status, setStatus] = useState("");

async function handleSubmit(e) {

  e.preventDefault();

  if(!title ||!artist ||!year) {
    setStatus("Please fill in all fields");
    return;
  }

  try {
    const docRef = await addDoc(collection(db, "songs"), {
      title,
      artist,
      year: Number(year),
    });

    setStatus(`Song added! ID = ${docRef.id}`);
    setTitle("");
    setArtist("");
    setYear("");
  } catch (err) {
    console.error(err);
    setStatus("Error adding song: " + err.message);
  }
}

  return (
    <form onSubmit={handleSubmit}>
      <p>
        <label>
          Title:
          <br />
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Wonderwall"
          />
        </label>
      </p>

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
      </p>

      <p>
        <label>
          Year:
          <br />
          <input
            value={year}
            onChange={(e) => setYear(e.target.value)}
            placeholder="1995"
            type="number"
          />
        </label>
      </p>

      <button type="submit">Add Song</button>

      {status && <p><strong>{status}</strong></p>}
    </form>
  );
}