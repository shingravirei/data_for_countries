import React, { useState, useEffect } from 'react';

import countryFetcherHook from './hooks/countryFetcherHook';
import Input from './components/Input';

function App() {
    const [countries, setCountries] = useState([]);
    const [filter, setfilter] = useState('');

    useEffect(
        countryFetcherHook(
            'https://restcountries.eu/rest/v2/all',
            setCountries
        ),
        []
    );

    const handleInputChange = event => {
        setfilter(event.target.value);
    };

    const countryRender = countries => {
        const filteredCountries = countries.filter(country => {
            return country.name.toLowerCase().includes(filter.toLowerCase());
        });

        if (filteredCountries.length > 10) {
            return <p>Too many matches, especify another letter!</p>;
        } else if (filteredCountries.length === 1) {
            return (
                <>
                    <h1>{filteredCountries[0].name}</h1>
                    <p>Capital: {filteredCountries[0].capital}</p>
                    <p>Population : {filteredCountries[0].population}</p>
                    <h3>Languages</h3>
                    {filteredCountries[0].languages.map(language => (
                        <p key={language.nativeName}>{language.name}</p>
                    ))}
                    <img
                        src={filteredCountries[0].flag}
                        alt={'flag'}
                        width={'15%'}
                        height={'15%'}
                    />
                </>
            );
        }

        return filteredCountries.map(country => (
            <p key={country.alpha3Code}>{country.name}</p>
        ));
    };

    return (
        <div className="App">
            <h1>Country Finder v0.0.1</h1>
            <Input handleInputChange={handleInputChange} />
            {countryRender(countries)}
        </div>
    );
}

export default App;
