import React, { memo, useEffect, useCallback, useState } from 'react';
import SearchInput from '../components/SearchInput';
import CountryCard from '../components/CountryCard';
import Loader from '../components/Loader';
import useDebounce from '../hooks/useDebounce';
import * as S from './App.styles.js';

import useFetchCountries from './useFetchCountries';

const App = () => {
  const [searchValue, setSearchValue] = useState('');
  const debouncedValue = useDebounce(searchValue, 800);

  const {
    fetchCountries,
    fetchCountry,
    countries,
    countriesLoading,
    countriesError,
  } = useFetchCountries();

  useEffect(() => {
    if (debouncedValue) {
      fetchCountry(debouncedValue);
    } else {
      fetchCountries();
    }
  }, [debouncedValue, fetchCountry, fetchCountries]);

  const handleChangeSearch = useCallback(({ currentTarget }) => {
    setSearchValue(() => currentTarget.value);
  }, []);

  return (
    <S.App>
      <S.Header>
        <S.Title>Countries Of The World</S.Title>
        <SearchInput
          id="input-search"
          type="search"
          name="search"
          placeholder="Search for a country..."
          value={searchValue}
          onChange={handleChangeSearch}
          autoComplete="off"
        />
      </S.Header>

      <S.Main>
        {countriesLoading && (
          <Loader />
        )}

        {!countriesLoading && countriesError && (
          <S.Error>{countriesError}</S.Error>
        )}

        {!countriesLoading && countries && countries.length === 0 && (
          <S.Error>We don't have any country registered.</S.Error>
        )}

        {!countriesLoading && countries && countries.length > 0 && (
          <S.CountryList>
            {countries.map(country => (
              <CountryCard key={country.name} data={country} />
            ))}
          </S.CountryList>
        )}
      </S.Main>
    </S.App>
  );
}

export default memo(App);
