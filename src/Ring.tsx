import * as React from "react";
import { rounderDefaults } from "./constants";
import { RounderProps } from "./types";

import { styled as gstyled, keyframes as gkeyframes } from "goober";

const animation = gkeyframes`
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
`;

const Container = gstyled("div")<RounderProps>`
  display: inline-block;
  position: relative;
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;

  & div {
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    border: ${(props) => (props.size ? props.size / 7 : 8)}px solid;
    border-radius: 50%;
    animation: ${animation} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    border-color: ${(props) => props.color} transparent transparent transparent;
  }
  & div:nth-child(1) {
    animation-delay: -0.45s;
  }
  & div:nth-child(2) {
    animation-delay: -0.3s;
  }
  & div:nth-child(3) {
    animation-delay: -0.15s;
  }
`;

const Ring = ({ show = true, size = 48, color = rounderDefaults.color }: RounderProps): JSX.Element | null => {
  return show ? (
    <Container size={size} color={color}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </Container>
  ) : null;
};

export { Ring };
