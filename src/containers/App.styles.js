import styled from 'styled-components'
import { colors, font, spacing } from '../tokens';

export const App = styled.div``;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${colors.black};
  height: ${spacing.xl5};
  margin-bottom: ${spacing.xl};
  padding: 0 ${spacing.lg};
`;

export const Title = styled.h1`
  margin: 0;
  font-family: 
  font-size: ${font.size.md};
  font-weight: ${font.weight.bold};
  color: ${colors.white};
`;

export const Main = styled.main`
  position: relative;
  min-height: 13rem;
`;

export const CountryList = styled.div`
  padding: 0 ${spacing.lg};
`;

export const Error = styled.p`
  margin: ${spacing.xl3} ${spacing.lg};
  font-size: ${font.size.lg};
  font-weight: bold;
  text-align: center;
  color: ${colors.danger}
`;