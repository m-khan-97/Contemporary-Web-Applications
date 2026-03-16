import { Link } from "react-router-dom";

export default function App() {
    return(
        <div>
            <h1>Welcome to Hittastic</h1>
            <p>This is a small React Router Demo</p>

            <p>
                <Link to="/searchByArtist/Oasis">Search Oasis</Link>
            </p>

            <p>
                <Link to="/searchByArtist/Ed Sheeran">Search Ed Sheeran</Link>
            </p>
            <p>
                <Link to="/addsong">Add Song</Link>
            </p>
        </div>
    );
}