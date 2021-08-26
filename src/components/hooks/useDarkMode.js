import {useEffect} from "react";
import useLocalStorage from './useLocalStorage'
const UseDarkMode = () => {
    const [darkMode, setDarkMode] = useLocalStorage({'dark': false});

    useEffect(() => {
        const bodyClass = document.querySelector('body')

        darkMode ? bodyClass.classList.add('dark-mode') : bodyClass.classList.remove('dark-mode')

    }, [darkMode]);

    return [darkMode, setDarkMode]
}


export default UseDarkMode;



