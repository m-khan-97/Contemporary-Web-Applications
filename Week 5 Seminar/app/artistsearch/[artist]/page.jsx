export default async function Page({params}) {
    const {artist} = await params;

    const songs = {
        Adele: ["Hello", "Rolling in the Deep", "Skyfall"],
        Drake: ["Hotline Bling"]
    };

    const artistName = decodeURIComponent(artist);
    const results = songs[artistName] || [];

    return (
        <main>
            <h1>Search Results</h1>
            <p>
                Searching for: <strong>{artistName}</strong>
            </p>
            {results.length > 0 ? (
                <ul>
                    {results.map((song, index) => (
                        <li key={index}>{song}</li>
                    ))}
                </ul>
            ) : (
                <p>No Song Found</p>
            )}
        </main>
    );
}