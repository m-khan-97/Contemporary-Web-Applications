import React from "react";

export default function Search({onSearch, onModeChange}) {
    return (
        <div>
            <label htmlFor="artist">Enter an artist:</label>
            <input id="artist" /><br />
            <input type="button" onClick={onSearch} value='Search' /><br />
            <label htmlFor="mode">Choose mode:</label><br />
            <select id="mode" onChange={onModeChange}>
                <option value='light'> Light Mode</option>
                <option value='dark'>Dark Mode</option>
            </select>
        </div>
    );
}