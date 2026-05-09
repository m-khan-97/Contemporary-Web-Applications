import Database from "better-sqlite3";

export default function SearchResults({artist}) {
    if(!artist) {
        return <p>Please enter an artist to search</p>
    }

    const db = new Database("wadsongs.db");
    const stmt = db.prepare("SELECT * FROM wadsongs WHERE artist = ?");
    const results = stmt.all(artist)
    
    if (results.length === 0) {
        return <p>No Songs found for "{artist}".</p>
    }

    const output = results.map((song) => (
        <li key={song.id}>
            {song.title} ({song.year})
        </li>
    ));

    return (
        <div>
            <h2>Results for "{artist}"</h2>
            <ul>{output}</ul>
        </div>
    );
}