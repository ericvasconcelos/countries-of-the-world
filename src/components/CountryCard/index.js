import React, { memo, useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import './styles.css';

const CountryCard = ({ data }) => {
  const [ isCardOpen, setIsCardOpen ] = useState(true);
  const { name, region, capital, population, languages } = data;

  const handleOpenCard = useCallback(() => setIsCardOpen(prevState => !prevState), []);
  
  return (
    <button className="country-card" onClick={handleOpenCard}>
      <h2 className="country-card-title">{name}</h2>

      {isCardOpen && (
        <div className="country-card-infos">
          <p className="country-card-info">
            <span>Region: </span>
            {region}
          </p>
          
          <p className="country-card-info">
            <span>Capital: </span>
            {capital}
          </p>

          <p className="country-card-info">
            <span>Population: </span>
            {population}
          </p>

          <p className="country-card-info">
            <span>Language: </span>
            {languages.reduce((acc, curr, index) => {
              if (index === 0) {
                return `${curr.name}`;
              }

              return `${acc}, ${curr.name}`;
            }, '')}
          </p>
        </div>
      )}
    </button>
  );
};

CountryCard.propTypes = {
  data: PropTypes.shape({
    alpha2Code: PropTypes.string.isRequired,
    alpha3Code: PropTypes.string.isRequired,
    altSpellings: PropTypes.arrayOf(PropTypes.string).isRequired,
    area: PropTypes.number,
    borders: PropTypes.arrayOf(PropTypes.string).isRequired,
    callingCodes: PropTypes.arrayOf(PropTypes.string).isRequired,
    capital: PropTypes.string.isRequired,
    cioc: PropTypes.string,
    currencies: PropTypes.arrayOf(PropTypes.shape({
      code: PropTypes.string,
      name: PropTypes.string,
      symbol: PropTypes.string,
    })).isRequired,
    demonym: PropTypes.string.isRequired,
    flag: PropTypes.string.isRequired,
    gini: PropTypes.number,
    languages: PropTypes.arrayOf(PropTypes.shape({
      iso639_1: PropTypes.string,
      iso639_2: PropTypes.string,
      name: PropTypes.string,
      nativeName: PropTypes.string,
    })).isRequired,
    latlng: PropTypes.arrayOf(PropTypes.number).isRequired,
    name: PropTypes.string.isRequired,
    nativeName: PropTypes.string.isRequired,
    numericCode: PropTypes.string,
    population: PropTypes.number.isRequired,
    region: PropTypes.string.isRequired,
    regionalBlocs: PropTypes.arrayOf(PropTypes.shape({
      acronym: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      otherAcronyms: PropTypes.array.isRequired,
      otherNames: PropTypes.array.isRequired,
    })).isRequired,
    subregion: PropTypes.string.isRequired,
    timezones: PropTypes.arrayOf(PropTypes.string).isRequired,
    topLevelDomain: PropTypes.arrayOf(PropTypes.string).isRequired,
    translations: PropTypes.shape({
      br: PropTypes.string,
      de: PropTypes.string,
      es: PropTypes.string,
      fa: PropTypes.string,
      fr: PropTypes.string,
      hr: PropTypes.string,
      it: PropTypes.string,
      ja: PropTypes.string,
      nl: PropTypes.string,
      pt: PropTypes.string,
    }).isRequired,
  }).isRequired,
};

export default memo(CountryCard);
