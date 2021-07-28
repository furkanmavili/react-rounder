import * as React from "react";
import styled, { keyframes } from "styled-components";
import { rounderDefaults } from "./constants";
import { RounderProps } from "./types";

const animation = keyframes`
    0% {
        transform: translateX(0) scale(1);
    }
    25% {
        transform: translateX(-100%) scale(0.3);
    }
    50% {
        transform: translateX(0) scale(1);
    }
    75% {
        transform: translateX(100%) scale(0.3);
    }
    100% {
        transform: translateX(0) scale(1);
    }
`;

const Container = styled.div<RounderProps>`
  width: ${(props) => props.size}px;
  height: ${(props) => (props.size ? props.size / 2 : 25)}px;
  position: relative;
  align-items: center;
  justify-content: center;
  display: flex;
  & > div {
    width: 50%;
    height: 100%;
    background-color: ${(props) => props.color};
    border-radius: 50%;
    display: inline-block;
    animation: ${animation} 3s cubic-bezier(0.77, 0, 0.175, 1) infinite;
    margin: auto;
  }
`;

const Ball = ({ show = true, size = 50, color = rounderDefaults.color }: RounderProps): JSX.Element | null => {
  return show ? (
    <Container size={size} color={color} show={show}>
      <div></div>
    </Container>
  ) : null;
};

export { Ball };
