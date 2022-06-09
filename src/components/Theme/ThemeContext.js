import React, { useContext,useState  } from 'react'

export const ThemeContext = React.createContext() ;

export function ThemeProvider(Props){
    const [theme, setTheme] = useState('black');

    function toggleTheme(){
        setTheme(theme === 'black' ? 'white' : 'black');
    }

    return (
        <ThemeContext.Provider value={{theme,setTheme, toggleTheme}}>
            {Props.children}
        </ThemeContext.Provider>
    )
}