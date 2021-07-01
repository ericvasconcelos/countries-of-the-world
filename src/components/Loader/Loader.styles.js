import styled, { keyframes } from 'styled-components'
import { colors, spacing } from '../../tokens';

const hourglass = keyframes`
  0% {
    transform: rotate(0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  50% {
    transform: rotate(900deg);
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  100% {
    transform: rotate(1800deg);
  }
`;

export const WrapperLoader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 13rem;
`;

export const Loader = styled.div`
  display: block;
  position: relative;
  width: 5rem;
  height: 5rem;

  &:after {
    content: " ";
    display: block;
    border-radius: 50%;
    width: 0;
    height: 0;
    margin: ${spacing.sm};
    box-sizing: border-box;
    border: ${spacing.xl} solid ${colors.primary};
    border-color: ${colors.primary} transparent ${colors.primary} transparent;
    animation: ${hourglass} 1.2s infinite;
  }
`;

