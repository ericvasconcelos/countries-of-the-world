import React, { memo, useEffect } from 'react';
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
    </div>
  );
}

export default memo(App);
