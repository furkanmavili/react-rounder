import * as React from "react";
import { styled as gstyled, keyframes as gkeyframes } from "goober";
import { rounderDefaults } from "./constants";
import { RounderProps } from "./types";

const animation = gkeyframes`
  0% {
    top: 8px;
    height: var(--size);

  }
  50%, 100% {
    top: 24px;
    height: calc(var(--size) - 16px);
  }
`;

const Container = gstyled("div")<RounderProps>`
  display: inline-block;
  position: relative;
  --size: ${(props) => props.size}px;
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;

  & div {
    display: inline-block;
    position: absolute;
    left: 8px;
    width: ${(props) => (props.size ? props.size / 4 : 16)}px;
    background: ${(props) => props.color};
    animation: ${animation} 1.2s cubic-bezier(0, 0.5, 0.5, 1) infinite;
  }
  & div:nth-child(1) {
    left: 0;
    animation-delay: -0.24s;
  }
  & div:nth-child(2) {
    left: ${(props) => (props.size ? props.size / 4 + 8 : 32)}px;
    animation-delay: -0.12s;
  }
  & div:nth-child(3) {
    left: ${(props) => (props.size ? props.size / 2 + 16 : 56)}px;
    animation-delay: 0;
  }
`;

const Bars = ({ show = true, size = 64, color = rounderDefaults.color }: RounderProps): JSX.Element | null => {
  return show ? (
    <Container size={size} color={color}>
      <div></div>
      <div></div>
      <div></div>
    </Container>
  ) : null;
};

export { Bars };
