import React from 'react';

import Button from './Button';

const CountriesList = ({ countriesList, handleOnClick, setFilter }) => {
    return countriesList.map(country => (
        <p key={country.alpha3Code}>
            {country.name}{' '}
            <Button
                text={country.name}
                handleOnClick={handleOnClick(country.name, setFilter)}
            />
        </p>
    ));
};

export default CountriesList;
