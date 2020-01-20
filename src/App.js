import React, { useState, useEffect } from 'react';

import countryFetcherHook from './hooks/countryFetcherHook';
import Input from './components/Input';
import Country from './components/Country';
import CountriesList from './components/CountriesList';

function App() {
    const [countries, setCountries] = useState([]);
    const [filter, setFilter] = useState('');

    useEffect(
        countryFetcherHook(
            'https://restcountries.eu/rest/v2/all',
            setCountries
        ),
        []
    );

    const handleInputChange = event => {
        setFilter(event.target.value);
    };

    const handleOnClick = (countryName, setFilter) => () => {
        setFilter(countryName);
    };

    const countryRender = countries => {
        const filteredCountries = countries.filter(country => {
            return country.name.toLowerCase().includes(filter.toLowerCase());
        });

        if (filteredCountries.length > 10) {
            return <p>Too many matches, especify another letter!</p>;
        } else if (filteredCountries.length === 1) {
            return <Country country={filteredCountries} />;
        }

        return (
            <CountriesList
                countriesList={filteredCountries}
                handleOnClick={handleOnClick}
                setFilter={setFilter}
            />
        );
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
