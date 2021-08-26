import SearchBar from "../SearchBar/SearchBar";
import { useEffect, useState } from "react";
import Card from "../Card/Card";
import axios from "axios";
import CardList from "../Card/CardList";


const Display = ({keyword, setKeyword}) => {
    const [input, setInput] = useState('')
    const [countryList, setCountryList] = useState()
    const [countryListDefault, setCountryListDefault] = useState();

    useEffect(() => {
        axios
            .get('https://restcountries.eu/rest/v2/all')
            .then(response => {
                    setCountryList(response.data)
                }
            )
    })

    const updateInput = () => {
        const filtered = countryListDefault.filter(country => {
            return country.name.toLowerCase().includes(input.toLowerCase())
        })
        setInput(input)
        setCountryList(filtered)
    }

    return (
        <div className='display'>
            <SearchBar input={input} keyword={keyword} setKeyword={setKeyword} />
            <CardList countryList={countryList} />
        </div>
    );
}


export default Display;