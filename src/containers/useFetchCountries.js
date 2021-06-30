import { useState, useCallback } from 'react';
import api from '../services/api';

const useFetchCountries = () => {
  const [countries, setCountries] = useState(null);
  const [countriesLoading, setCountriesLoading] = useState(true);
  const [countriesError, setCountriesError] = useState('');

  const fetchCountries = useCallback(async () => {
    setCountriesLoading(true);

    await api.get('/v2/all')
      .then(({ data }) => {
        setCountries(data);
      })
      .catch(({ response }) => {
        setCountriesError(response.data || 'Oops I\'m so sorry. Countries did not load correctly');
      });

    setCountriesLoading(false);
  }, []);

  return {
    fetchCountries,
    countries,
    countriesLoading,
    countriesError,
  };
};

export default useFetchCountries;
