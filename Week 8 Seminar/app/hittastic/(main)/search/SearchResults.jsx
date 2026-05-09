import Database from "better-sqlite3";

export default function SearchResults({ artist }) {
  if (!artist || artist.trim() === "") {
    return <p>Please enter an artist to search.</p>;
  }

  const db = new Database("wadsongs.db");
  const stmt = db.prepare("SELECT * FROM wadsongs WHERE artist=?");
  const songs = stmt.all(artist);

  if (songs.length === 0) {
    return <p>No songs found for "{artist}".</p>;
  }

  return (
    <ul>
      {songs.map((song) => (
        <li key={song.id}>
          {song.title} ({song.year})
        </li>
      ))}
    </ul>
  );
}