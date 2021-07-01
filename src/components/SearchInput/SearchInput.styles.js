import styled from 'styled-components'
import { FiSearch } from "react-icons/fi";

// celphone vertical 450px(sm)
// celphone horizontal 600px(md)
// tablet vertical 768px(lg)
// tablet horizontal 992px(xl)
// desktop 1200px(hd)

const breakpoint = {
  xs: '0',
  sm: '28.125rem',
  md: '37.5rem',
  lg: '48rem',
  xl: '62rem',
  hd: '75rem',
};

// export default Object.freeze(breakpoint);

export const WrapSearchInput = styled.div`
  position: relative;
  width: 100%;
  max-width: 400px;
  height: 48px;
  border: 1px solid #cfcfcf;
  border-radius: 4px;
  background-color: white;

  &:focus {
    /* border */
  }
`;

export const SearchInput = styled.input`
  width: 100%;
  height: 48px;
  border: none;
  background-color: white;
  transition: box-shadow .4s ease;
  padding: 0 48px 0 16px;

  &:focus {
    /* border */
  }
`;

export const SearchIcon = styled(FiSearch)`
  position: absolute;
  right: 12px;
  top: 12px;
  width: 24px;
  height: 24px;
  color: #212121;
`;
