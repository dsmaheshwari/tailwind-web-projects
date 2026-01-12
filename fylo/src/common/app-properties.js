import { useState, useCallback } from "react";

// Custom hook to manage and expose app properties like dark mode
export function useAppProperties() {
    const [darkMode, setDarkMode] = useState("light");

    const getTheme = useCallback(() => darkMode, [darkMode]);
    const toggleTheme = useCallback(() => {
        if(darkMode === "light") {
            document.documentElement.classList.add('dark')
        } else {
            document.documentElement.classList.remove('dark')
        }
        setDarkMode(darkMode === "light" ? "dark" : "light");
    }, [darkMode]);

    // Return an object with references to the functions/state (not spread of functions)
    return { getTheme, toggleTheme };
}
