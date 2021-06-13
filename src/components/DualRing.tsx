import * as React from 'react';
import styled, { keyframes } from 'styled-components';
import { rounderDefaults } from '../constants';
import { RounderProps } from '../types';

const animation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const Container = styled.div<RounderProps>`
  display: flex;
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;

  &::after {
    content: ' ';
    display: block;
    width: 100%;
    border-radius: 50%;
    border: ${(props) => (props.size ? props.size / 7 : 8)}px solid ${(props) => props.color || rounderDefaults.color};
    border-color: ${(props) => props.color} transparent ${(props) => props.color} transparent;
    animation: ${animation} 1.2s linear infinite;
  }
`;

const DualRing = ({ size = 64, color = rounderDefaults.color }: RounderProps): React.ReactNode => {
  return <Container size={size} color={color} />;
};

export { DualRing };
