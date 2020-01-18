import axios from 'axios';

const countryFetcherHook = (uri, setCountries) => {
    return () => {
        axios
            .get(uri)
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
