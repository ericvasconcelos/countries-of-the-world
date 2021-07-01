import styled from 'styled-components'
import { FiChevronDown } from "react-icons/fi";

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


export const CountryCard = styled.button`
  width: 100%;
  height: 90px;
  height: auto;
  margin: 0 0 24px;
  border: 1px solid #cfcfcf;
  border-radius: 4px;
  background-color: white;
  cursor: pointer;
  text-align: left;
  transition: box-shadow .4s ease;

  &:hover {
    box-shadow: 0px 4px 9px 0px rgba(191,191,191,0.55);
  }

  @media (min-width: ${breakpoint.md}) {
    width: 50%;
  }

  @media (min-width: ${breakpoint.lg}) {
    width: 33.33%;
  }

  @media (min-width: ${breakpoint.xl}) {
    width: 25%;
  }

  @media (min-width: ${breakpoint.hd}) {
    width: 20%;
  }
`;

export const CardTitle = styled.h2`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 48px;
  margin: 0;
  padding: 0 16px;
  font-size: 20px;
`;

export const ArrowDown = styled(FiChevronDown)`
  transition: transform .4s ease-in-out; 
  transform: ${p => p.isOpen ? 'rotate(-180deg)' :  'rotate(0deg)'};
`;

export const CardInfos = styled.div`
  padding: 16px;
  border-top: 1px solid #cfcfcf;
`;

export const CardInfo = styled.p`
  font-size: 14px;

  span {
    font-weight: bold;
  }
`;