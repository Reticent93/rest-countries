import { useEffect, useState } from "react";
import axios from "axios";
import SearchBar from "../SearchBar/SearchBar";
import Card from "./Card";


const CardList = ({keyword, setKeyword}) => {
    const [input, setInput] = useState('')
    const [countryList, setCountryList] = useState([])
    const [countryListDefault, setCountryListDefault] = useState();

    useEffect(() => {
        axios
            .get('https://restcountries.eu/rest/v2/all')
            .then(response => {
                    setCountryList(response.data)
                // console.log(response.data)
                }
            )
    },[])

    const updateInput = () => {
        const filtered = countryListDefault.filter(country => {
            return country.name.toLowerCase().includes(input.toLowerCase())
        })
        setInput(input)
        setCountryList(filtered)
    }

    return (
        <div className='card-list'>
            <Card countryList={countryList} />
        </div>
    );
}


export default CardList;