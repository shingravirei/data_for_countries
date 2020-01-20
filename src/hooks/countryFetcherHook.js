import axios from 'axios';

const countryFetcherHook = (url, setCountries) => {
    return () => {
        axios
            .get(url)
            .then(response => {
                console.log('promisse fullfiled');
                setCountries(response.data);
            })
            .catch(err => {
                console.log(err);
            });
    };
};

export default countryFetcherHook;
