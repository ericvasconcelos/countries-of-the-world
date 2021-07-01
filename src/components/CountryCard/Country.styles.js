import styled from 'styled-components'
import { FiChevronDown } from "react-icons/fi";
import { breakpoint, colors, font, spacing } from '../../tokens';

export const WrapperCard = styled.div`
  display: inline-flex;
  vertical-align: top;
  padding: 0 ${spacing.md};
  width: 100%;
  
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

export const CountryCard = styled.button`
  width: 100%;
  margin: 0 0 ${spacing.lg};
  border: 1px solid ${colors.gray};
  border-radius: 4px;
  background-color: ${colors.white};
  cursor: pointer;
  text-align: left;
  transition: box-shadow .4s ease;

  &:hover {
    box-shadow: 0px 4px 9px 0px rgba(191,191,191,0.55);
  }
`;

export const CardTitle = styled.h2`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: ${spacing.xl4};
  margin: 0;
  padding: 0 ${spacing.md};
  font-size: ${font.size.lg};
`;

export const ArrowDown = styled(FiChevronDown)`
  transition: transform .4s ease-in-out; 
  transform: ${p => p.open ? 'rotate(-180deg)' :  'rotate(0deg)'};
`;

export const CardInfos = styled.div`
  padding: ${spacing.md};
  border-top: 1px solid ${colors.gray};
`;

export const CardInfo = styled.p`
  font-size: ${font.size.small};
  margin: 0 0 12px;

  span {
    font-weight: ${font.weight.bold};
  }
`;