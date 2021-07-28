import * as React from "react";
import styled, { keyframes } from "styled-components";
import { rounderDefaults } from "./constants";
import { RounderProps } from "./types";

const animation = (size = 42) => keyframes`
  25% { 
    transform: translateX(${size}px) rotate(-90deg) scale(0.5);
    -webkit-transform: translateX(${size}px) rotate(-90deg) scale(0.5);
  } 50% { 
    transform: translateX(${size}px) translateY(${size}px) rotate(-179deg);
    -webkit-transform: translateX(${size}px) translateY(${size}px) rotate(-179deg);
  } 50.1% { 
    transform: translateX(${size}px) translateY(${size}px) rotate(-180deg);
    -webkit-transform: translateX(${size}px) translateY(${size}px) rotate(-180deg);
  } 75% { 
    transform: translateX(0px) translateY(${size}px) rotate(-270deg) scale(0.5);
    -webkit-transform: translateX(0px) translateY(${size}px) rotate(-270deg) scale(0.5);
  } 100% { 
    transform: rotate(-360deg);
    -webkit-transform: rotate(-360deg);
  }
`;

const Container = styled.div<RounderProps>`
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
  position: relative;
  & div {
    background-color: ${(props) => props.color};
    width: 30%;
    height: 30%;
    position: absolute;
    top: 0;
    left: 0;
    animation: ${(props) => animation(props.size ? props.size - 10 : 42)} 1.8s infinite ease-in-out;
  }

  & div:nth-child(2) {
    animation-delay: -0.9s;
  }
`;

const Square = ({ show = true, size = 48, color = rounderDefaults.color }: RounderProps): JSX.Element | null => {
  return show ? (
    <Container size={size} color={color}>
      <div></div>
      <div></div>
    </Container>
  ) : null;
};

export { Square };
