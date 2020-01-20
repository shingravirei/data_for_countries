import React, { useState, useEffect } from 'react';

import Weather from './Weather';
import axios from 'axios';

const Country = ({ country }) => {
    const [weather, setWeather] = useState({});
    const [weatherLoaded, setWeatherLoaded] = useState(false);
    const [apiKey] = useState(process.env.REACT_APP_WEATHER_API_KEY);

    useEffect(() => {
        const url = `http://api.weatherstack.com/current?access_key=${apiKey}&query=${country[0].name}`;

        axios
            .get(url)
            .then(response => {
                setWeather(response.data);
                setWeatherLoaded(true);
            })
            .catch(err => {
                console.log(err);
            });
    }, [country, apiKey]);

    return (
        <>
            <h1>{country[0].name}</h1>
            <p>Capital: {country[0].capital}</p>
            <p>Population : {country[0].population}</p>
            <h3>Languages</h3>
            {country[0].languages.map(language => (
                <p key={language.nativeName}>{language.name}</p>
            ))}
            <img
                src={country[0].flag}
                alt={'flag'}
                width={'15%'}
                height={'15%'}
            />
            {weatherLoaded && <Weather weather={weather} />}
        </>
    );
};

export default Country;
