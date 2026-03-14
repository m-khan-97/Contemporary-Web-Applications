import { Form, Link, redirect } from "react-router-dom";

export default function AddSong() {
  return (
    <div>
      <h1>Add Song</h1>

      <Form method="post">
        <p>
          <label htmlFor="title">Title:</label><br />
          <input id="title" name="title" />
        </p>

        <p>
          <label htmlFor="artist">Artist:</label><br />
          <input id="artist" name="artist" />
        </p>

        <p>
          <label htmlFor="year">Year:</label><br />
          <input id="year" name="year" type="number" />
        </p>

        <button type="submit">Add Song</button>
      </Form>

      <p>
        <Link to="/">Back to Home</Link>
      </p>
    </div>
  );
}

export async function action({ request }) {
  const formData = await request.formData();

  const title = formData.get("title");
  const artist = formData.get("artist");
  const year = formData.get("year");

  await fetch("http://localhost:3000/song/new", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      title,
      artist,
      year: Number(year)
    })
  });

  return redirect(`/searchByArtist/${artist}`);
}