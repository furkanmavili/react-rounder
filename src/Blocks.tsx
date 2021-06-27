import * as React from "react";
import styled, { keyframes } from "styled-components";
import { rounderDefaults } from "./constants";
import { RounderProps } from "./types";

const animation = keyframes`
  0% {
      transform: rotate(0) scale(1);
      animation-timing-function: ease-in;
  }
  10% {
      transform: rotate(90deg) scale(0);
  }
  50% {
      transform: rotate(90deg) scale(0);
      animation-timing-function: ease-out;
  }
  60% {
      transform: rotate(180deg) scale(1);
  }
  100% {
      transform: rotate(180deg) scale(1);
  }
`;

const Container = styled.div<RounderProps>`
  width: ${(props) => (props.size ? props.size * 3 : props.size)}px;
  height: ${(props) => (props.size ? props.size * 3 : props.size)}px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Block = styled.div<RounderProps>`
  position: relative;
  top: 0;
  left: 0;
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;

  & > div {
    position: absolute;
    width: ${(props) => props.size}px;
    height: ${(props) => props.size}px;
    background: ${(props) => props.color};
    animation: ${animation} 2s linear infinite;
  }
  & div:nth-of-type(1) {
    top: -${(props) => props.size}px;
    left: -${(props) => props.size}px;
    animation-delay: ${(-7 * 2) / 8}s;
  }

  & div:nth-of-type(2) {
    top: -${(props) => props.size}px;
    left: 0;
    animation-delay: ${(-6 * 2) / 8}s;
  }

  & div:nth-of-type(3) {
    top: -${(props) => props.size}px;
    left: ${(props) => props.size}px;
    animation-delay: ${(-5 * 2) / 8}s;
  }

  & div:nth-of-type(4) {
    top: 0;
    left: ${(props) => props.size}px;
    animation-delay: ${(-4 * 2) / 8}s;
  }

  & div:nth-of-type(5) {
    top: ${(props) => props.size}px;
    left: ${(props) => props.size}px;
    animation-delay: ${(-3 * 2) / 8}s;
  }

  & div:nth-of-type(6) {
    top: ${(props) => props.size}px;
    left: 0;
    animation-delay: ${(-2 * 2) / 8}s;
  }

  & div:nth-of-type(7) {
    top: ${(props) => props.size}px;
    left: -${(props) => props.size}px;
    animation-delay: ${(-1 * 2) / 8}s;
  }

  & div:nth-of-type(8) {
    top: 0;
    left: -${(props) => props.size}px;
    animation-delay: ${(0 * 2) / 8}s;
  }
`;
const Blocks = ({ show = true, size = 64, color = rounderDefaults.color }: RounderProps): React.ReactNode => {
  return (
    show && (
      <Container size={size} color={color}>
        <Block size={size} color={color}>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </Block>
      </Container>
    )
  );
};

export { Blocks };
