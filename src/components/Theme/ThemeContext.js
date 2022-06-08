import React, { useContext,useState  } from 'react'

export const ThemeContext = React.createContext() ;

export function ThemeProvider(Props){
    const [theme, setTheme] = useState('dark');

    function toggleTheme(){
        setTheme(theme === 'dark' ? 'light' : 'dark');
    }

    return (
        <ThemeContext.Provider value={{theme,setTheme, toggleTheme}}>
            {Props.children}
        </ThemeContext.Provider>
    )
}