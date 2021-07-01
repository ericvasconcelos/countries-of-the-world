import React, { memo, lazy, Suspense, useEffect, useCallback, useState } from 'react';
import useDebounce from '../hooks/useDebounce';
import * as S from './App.styles.js';
import useFetchCountries from './useFetchCountries';

const CountryCard = lazy(() => import('../components/CountryCard'));
const Loader = lazy(() => import('../components/Loader'));
const SearchInput = lazy(() => import('../components/SearchInput'));

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

        <Suspense fallback={null}>
          <SearchInput
            id="input-search"
            type="search"
            name="search"
            placeholder="Search for a country..."
            value={searchValue}
            onChange={handleChangeSearch}
            autoComplete="off"
          />
        </Suspense>
      </S.Header>

      <S.Main>
      
        {countriesLoading && (
          <Suspense fallback={null}>
            <Loader />
          </Suspense>
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
              <Suspense fallback={null}>
                <CountryCard key={country.name} data={country} />
              </Suspense>
            ))}
          </S.CountryList>
        )}
      </S.Main>
    </S.App>
  );
}

export default memo(App);
