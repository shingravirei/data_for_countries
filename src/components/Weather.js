import React from 'react';

const Weather = ({ weather }) => (
    <>
        {' '}
        <h2>Weather in {weather.location.name}</h2>
        <p>
            <strong>temperature: </strong> {weather.current.temperature}
        </p>
        <img alt={'weather_icon'} src={weather.current.weather_icons[0]} />
        <p>
            <strong>wind: </strong>
            {weather.current.wind_speed} kph direction{' '}
            {weather.current.wind_dir}
        </p>
    </>
);

export default Weather;
