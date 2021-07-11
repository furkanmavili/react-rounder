import * as React from "react";
import styled, { keyframes } from "styled-components";
import { rounderDefaults } from "./constants";
import { RounderProps } from "./types";

const animation = keyframes`
  0% {
    border-radius: 0%;
    transform: rotate(0deg);
  }
  50% {
    border-radius: 50%;
    transform: rotate(-90deg);
  }
`;

const Container = styled.div<RounderProps>`
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
  background: transparent;
  border: 4px solid ${(props) => props.color};
  border-radius: 0%;
  transform: rotate(0deg);
  animation: ${animation} 800ms infinite cubic-bezier(0.445, 0.05, 0.55, 0.95);
`;

const Gooey = ({ show = true, size = 50, color = rounderDefaults.color }: RounderProps): React.ReactNode => {
  return show && <Container size={size} color={color} />;
};

export { Gooey };
