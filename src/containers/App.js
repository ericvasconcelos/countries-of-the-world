import React, { memo, useEffect } from 'react';
import CountryCard from '../components/CountryCard';
import Loader from '../components/Loader';
import './App.css';

import useFetchCountries from './useFetchCountries';

const App = () => {
  const {
    fetchCountries,
    countries,
    countriesLoading,
    countriesError,
  } = useFetchCountries();

  useEffect(() => {
    fetchCountries();
  }, [fetchCountries]);

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Countries Of The World</h1>
      </header>

      <main>
        {countriesLoading && (
          <Loader />
        )}

        {!countriesLoading && countriesError && (
          <p className="error">{countriesError}</p>
        )}

        {!countriesLoading && countries && countries.length === 0 && (
          <p className="error">We don't have any country registered.</p>
        )}

        {!countriesLoading && countries && countries.length > 0 && (
          <div className="countries-list">
            {countries.map(country => (
              <CountryCard key={country.name} data={country} />
            ))}
          </div>
        )}
      </main>
    </div>
  );
}

export default memo(App);
