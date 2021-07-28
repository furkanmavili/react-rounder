import * as React from "react";
import styled, { keyframes } from "styled-components";
import { rounderDefaults } from "./constants";
import { RounderProps } from "./types";

const animationChase = keyframes`
   100% { transform: rotate(360deg); } 
`;
const animationDot = keyframes`
  80%, 100% { transform: rotate(360deg); } 
`;
const animationDotBefore = keyframes`
  50% {
    transform: scale(0.4); 
  } 100%, 0% {
    transform: scale(1.0); 
  } 
`;

const Container = styled.div<RounderProps>`
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
  position: relative;
  animation: ${animationChase} 2.5s infinite linear both;

  & div {
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    animation: ${animationDot} 2s infinite ease-in-out both;
  }
  & div:before {
    content: "";
    display: block;
    width: 25%;
    height: 25%;
    background-color: ${(props) => props.color};
    border-radius: 100%;
    animation: ${animationDotBefore} 2s infinite ease-in-out both;
  }
  & div:nth-child(1) {
    animation-delay: -1.1s;
  }
  & div:nth-child(2) {
    animation-delay: -1s;
  }
  & div:nth-child(3) {
    animation-delay: -0.9s;
  }
  & div:nth-child(4) {
    animation-delay: -0.8s;
  }
  & div:nth-child(5) {
    animation-delay: -0.7s;
  }
  & div:nth-child(6) {
    animation-delay: -0.6s;
  }
  & div:nth-child(1):before {
    animation-delay: -1.1s;
  }
  & div:nth-child(2):before {
    animation-delay: -1s;
  }
  & div:nth-child(3):before {
    animation-delay: -0.9s;
  }
  & div:nth-child(4):before {
    animation-delay: -0.8s;
  }
  & div:nth-child(5):before {
    animation-delay: -0.7s;
  }
  & div:nth-child(6):before {
    animation-delay: -0.6s;
  }
`;

const Chase = ({ show = true, size = 40, color = rounderDefaults.color }: RounderProps): JSX.Element | null => {
  return show ? (
    <Container size={size} color={color}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </Container>
  ) : null;
};

export { Chase };
