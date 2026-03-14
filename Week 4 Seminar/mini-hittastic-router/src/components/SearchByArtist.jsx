import { Link, useLoaderData } from "react-router-dom";

export async function loader({ params }) {
  const response = await fetch(`http://localhost:3000/songs/artist/${params.artist}`);
  const json = await response.json();
  return {
    artist: params.artist,
    results: json
  };
}

export default function SearchByArtist() {
  const data = useLoaderData();

  return (
    <div>
      <h1>Songs by {data.artist}</h1>

      {data.results.length === 0 ? (
        <p>No songs found.</p>
      ) : (
        <ul>
          {data.results.map(song => (
            <li key={song.id}>
              {song.title} - {song.year}
            </li>
          ))}
        </ul>
      )}

      <p>
        <Link to="/">Back to Home</Link>
      </p>

      <p>
        <Link to="/addsong">Go to Add Song</Link>
      </p>
    </div>
  );
}