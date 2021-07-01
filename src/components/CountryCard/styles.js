import styled from 'styled-components'

export const CountryCard = styled.button`
  width: 300px;
  height: 90px;
  height: auto;
  margin: 0 0 24px;
  padding: 16px;
  border: 1px solid #cfcfcf;
  border-radius: 4px;
  background-color: white;
  cursor: pointer;
  text-align: left;
  transition: box-shadow 0.4s ease;

  &:hover {
    box-shadow: 0px 4px 9px 0px rgba(191,191,191,0.55);
  }
`;

export const CardTitle = styled.h2`
  font-size: 22px;
  margin: 0;
`;

export const CardInfos = styled.div`
 
`;

export const CardInfo = styled.p`
  font-size: 14px;

  span {
    font-weight: bold;
  }
`;