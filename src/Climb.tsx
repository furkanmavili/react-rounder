import { styled as gstyled, keyframes as gkeyframes } from "goober";
import * as React from "react";
import { rounderDefaults } from "./constants";
import { RounderProps } from "./types";
const animationBall = gkeyframes`
  0% {
    transform: scale(1, 0.7);
  }
  20% {
    transform: scale(0.7, 1.2);
  }
  40% {
    transform: scale(1, 1);
  }
  46% {
    transform: scale(1, 1);
  }
  50% {
    bottom: 125%;
  }
  80% {
    transform: scale(0.7, 1.2);
  }
  90% {
    transform: scale(0.7, 1.2);
  }
  100% {
    transform: scale(1, 0.7);
  }

`;

const animationSteps = gkeyframes`
  0% {
    top: 0;
    right: 0;
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    top: 100%;
    right: 100%;
    opacity: 0;
  }
`;

const Container = gstyled("div")<RounderProps>`
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
  color: ${(props) => props.color};
  position: relative;
  & div {
    display: inline-block;
    float: none;
    background-color: currentColor;
    border: 0 solid currentColor;
  }
  & div:nth-child(1) {
    width: ${(props) => (props.size ? props.size / 2 : props.size)}px;
    height: ${(props) => (props.size ? props.size / 2 : props.size)}px;
    position: absolute;
    bottom: 32%;
    left: 18%;

    border-radius: 100%;
    transform-origin: center bottom;
    animation: ${animationBall} 0.6s ease-in-out infinite;
  }
  & div:not(:nth-child(1)) {
    position: absolute;
    top: 0;
    right: 0;
    width: ${(props) => (props.size ? props.size / 2 : props.size)}px;
    height: 4px;
    border-radius: 0;
    transform: translate(60%, 0);
    animation: ${animationSteps} 1.8s linear infinite;
  }
  & div:nth-child(2) {
    animation-delay: 0ms;
  }

  & div:nth-child(3) {
    animation-delay: -600ms;
  }

  & div:nth-child(4) {
    animation-delay: -1200ms;
  }
`;

const Climb = ({ show = true, size = 40, color = rounderDefaults.color }: RounderProps): JSX.Element | null => {
  return show ? (
    <Container size={size} color={color}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </Container>
  ) : null;
};

export { Climb };
