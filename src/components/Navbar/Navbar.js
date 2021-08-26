import React from 'react';
import useDarkMode from '../hooks/useDarkMode'

const Navbar = () => {
    const [darkMode, setDarkMode] = useDarkMode()

    const toggleMode = (e) => {
        e.preventDefault()
        setDarkMode(!darkMode)
    }
    //add sun to formula
    //-----------------------------------------//
    return (
        <nav className="navbar">
            <div className="dark-mode_toggle">
                <h1>Where in the world?</h1>
            </div>

            <h3>
                <ion-icon name="moon-sharp" size='small'  onClick={toggleMode} className={darkMode ? 'toggle toggled' : 'toggle'}></ion-icon>
                &nbsp;&nbsp;Dark Mode
            </h3>
        </nav>
    );
}


export default Navbar;