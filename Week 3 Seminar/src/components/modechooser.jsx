
import { useContext, useState } from 'react';
import ModeContext from '../contexts/ModeContext';

export default function ModeChooser() {
    const {darkMode, setDarkMode} = useContext(ModeContext);

    function updateMode(e) {
        setDarkMode(e.target.value === 'dark')
    }

    return <div>
    <label htmlFor='mode'>Choose mode:</label>
    <select id='mode' defaultValue={darkMode} onChange={updateMode}>
    <option value='light'>Light mode</option>
    <option value='dark'>Dark mode</option>
    </select>
    </div>;
    
}
