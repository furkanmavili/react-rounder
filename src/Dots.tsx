import * as React from "react";
import styled, { keyframes } from "styled-components";
import { rounderDefaults } from "./constants";
import { RounderProps } from "./types";

const animation = keyframes`
  0%, 80%, 100% { 
    -webkit-transform: scale(0);
    transform: scale(0);
  } 40% { 
    -webkit-transform: scale(1.0);
    transform: scale(1.0);
  }
`;

const Container = styled.div<RounderProps>`
  width: ${(props) => props.size}px;
  display: flex;
  justify-content: space-between;
  & div {
    width: ${(props) => (props.size ? props.size / 4 : 18)}px;
    height: ${(props) => (props.size ? props.size / 4 : 18)}px;
    background-color: ${(props) => props.color};
    border-radius: 100%;
    display: inline-block;
    animation: ${animation} 1.4s infinite ease-in-out both;
  }

  & div:nth-child(1) {
    animation-delay: -0.32s;
  }
  & div:nth-child(2) {
    animation-delay: -0.16s;
  }
`;

const Dots = ({ show = true, size = 64, color = rounderDefaults.color }: RounderProps): JSX.Element | null => {
  return show ? (
    <Container size={size} color={color}>
      <div></div>
      <div></div>
      <div></div>
    </Container>
  ) : null;
};

export { Dots };
