import { useState, useCallback } from 'react';
import api from '../services/api';

const useFetchCountries = () => {
  const [countries, setCountries] = useState(null);
  const [countriesLoading, setCountriesLoading] = useState(true);
  const [countriesError, setCountriesError] = useState('');

  const fetchCountries = useCallback(async () => {
    setCountriesLoading(true);
    setCountries(null);

    await api.get('/v2/all')
      .then(({ data }) => {
        setCountries(data);
      })
      .catch(({ response }) => {
        setCountriesError(response.data.message || 'Oops I\'m so sorry. Countries did not load correctly');
      });

    setCountriesLoading(false);
  }, []);

  const fetchCountry = useCallback(async (name) => {
    setCountriesLoading(true);
    setCountries(null);

    await api.get(`/v2/name/${name}`)
      .then(({ data }) => {
        setCountries(data);
      })
      .catch(({ response }) => {
        setCountriesError(response.data.message || 'Oops I\'m so sorry. country did not load correctly');
      });

    setCountriesLoading(false);
  }, []);

  return {
    fetchCountries,
    fetchCountry,
    countries,
    countriesLoading,
    countriesError,
  };
};

export default useFetchCountries;
