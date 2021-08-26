

const SearchBar = ({keyword, setKeyword}) => {
    const BarStyling = {width: '20rem', background: '#2B3743', border: 'none', padding: '.5rem'}
    return (

            <input style={BarStyling} key='random1' value={keyword} placeholder={"search for a country"}
                   onChange={(e) => setKeyword(e.target.value)}/>

    );
}


export default SearchBar;