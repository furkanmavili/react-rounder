import { styled as gstyled, keyframes as gkeyframes } from "goober";
import * as React from "react";
import { rounderDefaults } from "./constants";
import { RounderProps } from "./types";

const animation = gkeyframes`
  0% {
      transform: translateY(75%) translateX(-50%) rotate(45deg) scale(0);
  }
  50% {
    transform: translateY(-87.5%) translateX(-50%) rotate(45deg) scale(1);
  }
  100% {
    transform: translateY(-212.5%) translateX(-50%) rotate(45deg) scale(0);
  }
`;

const Container = gstyled("div")<RounderProps>`
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
  color: ${(props) => props.color};
  position: relative;

  & div {
    width: 50%;
    height: 50%;
    position: absolute;
    bottom: 0;
    left: 50%;
    border-radius: 2px;
    transform: translateY(0) translateX(-50%) rotate(45deg) scale(0);
    animation: ${animation} 1.5s infinite linear;
    display: inline-block;
    float: none;
    background-color: currentColor;
    border: 0 solid currentColor;
  }
  & div:nth-child(1) {
    animation-delay: -0.85s;
  }
  & div:nth-child(2) {
    animation-delay: -1.85s;
  }
  & div:nth-child(3) {
    animation-delay: -2.85s;
  }
`;

const Fire = ({ show = true, size = 48, color = rounderDefaults.color }: RounderProps): JSX.Element | null => {
  return show ? (
    <Container size={size} color={color}>
      <div></div>
      <div></div>
      <div></div>
    </Container>
  ) : null;
};

export { Fire };
