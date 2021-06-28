import * as React from "react";
import styled, { keyframes } from "styled-components";
import { rounderDefaults } from "./constants";
import { RounderProps } from "./types";

const animation = keyframes`
  0% {
    transform: scale(0.95);
  }
  5% {
    transform: scale(1.1);
  }
  39% {
    transform: scale(0.85);
  }
  45% {
    transform: scale(1);
  }
  60% {
    transform: scale(0.95);
  }
  100% {
    transform: scale(0.9);
  }
`;

const Container = styled.div<RounderProps>`
  display: inline-block;
  position: relative;
  width: ${(props) => (props.size ? props.size * 2 : 80)}px;
  height: ${(props) => (props.size ? props.size * 2 : 80)}px;
  transform: rotate(45deg);
  transform-origin: ${(props) => (props.size ? props.size : 40)}px ${(props) => (props.size ? props.size : 40)}px;

  & div {
    position: absolute;
    top: ${(props) => (props.size ? (props.size / 3) * 2 : props.size)}px;
    left: ${(props) => (props.size ? (props.size / 3) * 2 : props.size)}px;
    width: ${(props) => props.size}px;
    height: ${(props) => props.size}px;
    background: ${(props) => props.color};
    animation: ${animation} 1.2s infinite cubic-bezier(0.215, 0.61, 0.355, 1);
  }
  & div:after,
  & div:before {
    content: " ";
    position: absolute;
    display: block;
    width: ${(props) => props.size}px;
    height: ${(props) => props.size}px;
    background: ${(props) => props.color};
  }
  & div:before {
    left: ${(props) => (props.size ? -(props.size * 3) / 4 : -24)}px;
    border-radius: 50% 0 0 50%;
  }
  & div:after {
    top: ${(props) => (props.size ? -(props.size * 3) / 4 : -24)}px;
    border-radius: 50% 50% 0 0;
  }
`;

const Heart = ({ show = true, size = 24, color = rounderDefaults.color }: RounderProps): React.ReactNode => {
  return (
    show && (
      <Container size={size} color={color}>
        <div></div>
      </Container>
    )
  );
};

export { Heart };
