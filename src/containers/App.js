import React, { memo, useEffect } from 'react';
import SearchInput from '../components/SearchInput';
import CountryCard from '../components/CountryCard';
import Loader from '../components/Loader';
import * as S from './App.styles.js';

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
    <S.App>
      <S.Header>
        <S.Title>Countries Of The World</S.Title>
        <SearchInput />
      </S.Header>

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
          <S.CountryList>
            {countries.map(country => (
              <CountryCard key={country.name} data={country} />
            ))}
          </S.CountryList>
        )}
      </main>
    </S.App>
  );
}

export default memo(App);
