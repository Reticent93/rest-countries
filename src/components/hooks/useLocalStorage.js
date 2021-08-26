import { useState } from 'react';

const UseLocalStorage = (key, initialValue) => {
    const [value, setValue] = useState(() => {
        const item = window.localStorage.getItem(key)
        return item ? JSON.parse(item) : initialValue
    })

    const setNewValue = (newValue) => {
        console.log(newValue)
        setValue(newValue)

        window.localStorage.setItem(key, JSON.stringify(newValue))
    }

    return [value, setNewValue]
}


export default UseLocalStorage;