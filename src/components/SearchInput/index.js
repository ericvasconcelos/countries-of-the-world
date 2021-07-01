import React, { memo } from 'react';
import PropTypes from 'prop-types';
import * as S from './SearchInput.styles';

const SearchInput = (props) => {
  return (
    <S.WrapSearchInput>
      <S.SearchInput  {...props} />
      <S.SearchIcon />
    </S.WrapSearchInput>
  );
};

SearchInput.propTypes = {
  id: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

export default memo(SearchInput);
