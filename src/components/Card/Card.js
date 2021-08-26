const Card = ({countryList = []}) => {

    return (
        <>
             {countryList.map((data) => {
                if (data) {
                    return (
                        <div key={data.name} className='card'>
                            <img src={data.flag} />
                            <h1>{data.name}</h1>
                            <h3>Population: {data.population}</h3>
                            <h3>Region: {data.region}</h3>
                            <h3>Capital: {data.capital}</h3>
                        </div>
                    )
                }
                return null
            })}

        </>
    );
}


export default Card;