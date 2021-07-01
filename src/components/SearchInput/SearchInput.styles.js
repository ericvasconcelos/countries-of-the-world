import styled from 'styled-components'
import { FiSearch } from "react-icons/fi";
import { breakpoint, colors, font, spacing } from '../../tokens';

export const WrapSearchInput = styled.div`
  position: relative;
  width: 100%;
  max-width: 15rem;
  height: ${spacing.xl3};
  border: 1px solid ${colors.gray};
  border-radius: 4px;
  background-color: ${colors.white};

  @media (min-width: ${breakpoint.lg}) {
    max-width: 25rem;
  }
`;

export const SearchInput = styled.input`
  width: 100%;
  height: ${spacing.xl3};
  border: none;
  background-color: ${colors.white};
  padding: 0 ${spacing.xl3} 0 ${spacing.md};
  font-size: ${font.size.small};
  font-family: 'Roboto';
`;

export const SearchIcon = styled(FiSearch)`
  position: absolute;
  right: ${spacing.sm};
  top: ${spacing.sm};
  width: ${spacing.lg};
  height: ${spacing.lg};
  color: ${colors.black};
`;
