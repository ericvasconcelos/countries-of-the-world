import React, { memo } from 'react';
import * as S from './Loader.styles';

const Loader = () => (
  <S.WrapperLoader>
    <S.Loader />
  </S.WrapperLoader>
);

export default memo(Loader);