import * as React from "react";
import styled, { keyframes } from "styled-components";
import { rounderDefaults } from "../constants";
import { RounderProps } from "../types";

const animation = keyframes`
  0%, 70%, 100% {
    transform: scale3D(1, 1, 1);
  } 35% {
    transform: scale3D(0, 0, 1);
  } 
`;

const Container = styled.div<RounderProps>`
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
  & div {
    width: 33%;
    height: 33%;
    background-color: ${(props) => props.color};
    float: left;
    animation: ${animation} 1.3s infinite ease-in-out;
  }
  & div:nth-child(1) {
    -webkit-animation-delay: 0.2s;
    animation-delay: 0.2s;
  }
  & div:nth-child(2) {
    -webkit-animation-delay: 0.3s;
    animation-delay: 0.3s;
  }
  & div:nth-child(3) {
    -webkit-animation-delay: 0.4s;
    animation-delay: 0.4s;
  }
  & div:nth-child(4) {
    -webkit-animation-delay: 0.1s;
    animation-delay: 0.1s;
  }
  & div:nth-child(5) {
    -webkit-animation-delay: 0.2s;
    animation-delay: 0.2s;
  }
  & div:nth-child(6) {
    -webkit-animation-delay: 0.3s;
    animation-delay: 0.3s;
  }
  & div:nth-child(7) {
    -webkit-animation-delay: 0s;
    animation-delay: 0s;
  }
  & div:nth-child(8) {
    -webkit-animation-delay: 0.1s;
    animation-delay: 0.1s;
  }
  & div::nth-child(9) {
    -webkit-animation-delay: 0.2s;
    animation-delay: 0.2s;
  }
`;

const Cube = ({ size = 48, color = rounderDefaults.color }: RounderProps): React.ReactNode => {
  return (
    <Container size={size} color={color}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </Container>
  );
};

export { Cube };
