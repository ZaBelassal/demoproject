import React , {useContext} from 'react';
import { ThemeContext} from '../Theme/ThemeContext'

export default function ToggleTheme(){
    const themeContext = useContext(ThemeContext)


return (
    <div onClick={themeContext.toggleTheme}>
        {themeContext.toggleTheme === 'dark'? 
        <i className="fa-solid fa-moon"></i> : 
        <i className="fa-solid fa-sun"></i>}
        
            ToggleTheme
    </div>
)

}