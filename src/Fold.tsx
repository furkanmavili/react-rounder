import * as React from "react";
import { rounderDefaults } from "./constants";
import { RounderProps } from "./types";
import { styled as gstyled, keyframes as gkeyframes } from "goober";

const animation = gkeyframes`
   0%, 10% {
    transform: perspective(140px) rotateX(-180deg);
    opacity: 0; 
  } 25%, 75% {
    transform: perspective(140px) rotateX(0deg);
    opacity: 1; 
  } 90%, 100% {
    transform: perspective(140px) rotateY(180deg);
    opacity: 0; 
  }
`;

const Container = gstyled("div")<RounderProps>`
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
  position: relative;
  transform: rotateZ(45deg);
  & div {
    float: left;
    width: 50%;
    height: 50%;
    position: relative;
    transform: scale(1.1);
  }
  & div:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: ${(props) => props.color};
    animation: ${animation} 2.4s infinite linear both;
    transform-origin: 100% 100%;
  }
  & div:nth-child(2) {
    transform: scale(1.1) rotateZ(90deg);
  }
  & div:nth-child(4) {
    transform: scale(1.1) rotateZ(180deg);
  }
  & div:nth-child(3) {
    transform: scale(1.1) rotateZ(270deg);
  }
  & div:nth-child(2):before {
    animation-delay: 0.3s;
  }
  & div:nth-child(4):before {
    animation-delay: 0.6s;
  }
  & div:nth-child(3):before {
    animation-delay: 0.9s;
  }
`;

const Fold = ({ show = true, size = 40, color = rounderDefaults.color }: RounderProps): JSX.Element | null => {
  return show ? (
    <Container size={size} color={color}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </Container>
  ) : null;
};

export { Fold };
