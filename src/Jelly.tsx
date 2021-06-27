import * as React from "react";
import styled, { keyframes } from "styled-components";
import { rounderDefaults } from "./constants";
import { RounderProps } from "./types";

const animationJelly = keyframes`
  17% {
    border-bottom-right-radius: 10%;
  }
  25% {
    transform: translateY(25%) rotate(22.5deg);
  }
  50% {
    border-bottom-right-radius: 100%;
    transform: translateY(50%) scale(1, 0.9) rotate(45deg);
  }
  75% {
    transform: translateY(25%) rotate(67.5deg);
  }
  100% {
    transform: translateY(0) rotate(90deg);
  }
`;
const animationShadow = keyframes`
  50% {
    transform: scale(1.25, 1);
  }
`;

const Container = styled.div<RounderProps>`
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
  color: ${(props) => props.color};
  position: relative;
  & > div {
    display: inline-block;
    float: none;
    background-color: currentColor;
    border: 0 solid currentColor;
    box-sizing: border-box;
  }
  & > div:nth-child(1) {
    top: -25%;
    height: 100%;
    border-radius: 10%;
    animation: ${animationJelly} 0.6s -0.1s linear infinite;
    z-index: 1;
    position: absolute;
    left: 0;
    width: 100%;
  }
  & > div:nth-child(2) {
    width: 100%;
    height: 10%;
    bottom: -9%;
    background: #000;
    border-radius: 50%;
    opacity: 0.2;
    position: absolute;
    left: 0;
    width: 100%;
    animation: ${animationShadow} 0.6s -0.1s linear infinite;
  }
`;

const Jelly = ({ size = 48, color = rounderDefaults.color }: RounderProps): React.ReactNode => {
  return (
    <Container size={size} color={color}>
      <div></div>
      <div></div>
    </Container>
  );
};

export { Jelly };
