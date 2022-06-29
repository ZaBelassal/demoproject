import React , {useContext} from 'react';
import { ThemeContext} from '../Theme/ThemeContext'

export default function ToggleTheme(){
    const themeContext = useContext(ThemeContext)

    console.log(themeContext.theme)

return (
    <div onClick={themeContext.toggleTheme}>
        {themeContext.theme === 'black'? 
        <i className="fa-solid fa-sun fs-4"></i>:
        <i className="fa-solid fa-moon fs-4"></i> }

    </div>
)

}