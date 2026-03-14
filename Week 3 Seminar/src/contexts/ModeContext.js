import { createContext } from "react";

const ModeContext = createContext({
    darkMode: false,
    setDarkMode: () => {}
});

export default ModeContext