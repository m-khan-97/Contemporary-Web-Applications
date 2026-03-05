export default function AddSong() {
    return <div>
        <h2>Add Song</h2>
        <label htmlFor="title">Title:</label><br /> 
        <input id="title" /><br />
        <label htmlFor="artist">Artist:</label><br /> 
        <input id="artist" /><br />
        <label htmlFor="year">Year:</label><br /> 
        <input id="year" /><br />
        <input type="button" onClick={songEntered} value="Add Song" />
        </div>;

    function songEntered() {
    }
}
