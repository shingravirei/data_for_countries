import React from 'react';

const Country = ({ country }) => {
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
        </>
    );
};

export default Country;
