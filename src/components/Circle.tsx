import * as React from "react";
import styled, { keyframes } from "styled-components";
import { rounderDefaults } from "../constants";
import { RounderProps } from "../types";

const animation = keyframes`
  0%, 100% {
    animation-timing-function: cubic-bezier(0.5, 0, 1, 0.5);
  }
  0% {
    transform: rotateY(0deg);
  }
  50% {
    transform: rotateY(1800deg);
    animation-timing-function: cubic-bezier(0, 0.5, 0.5, 1);
  }
  100% {
    transform: rotateY(3600deg);
  }
`;

const Container = styled.div<RounderProps>`
  display: inline-block;
  transform: translateZ(1px);

  & > div {
    display: inline-block;
    width: ${(props) => props.size}px;
    height: ${(props) => props.size}px;
    border-radius: 50%;
    background: ${(props) => props.color};
    animation: ${animation} 2.4s cubic-bezier(0, 0.2, 0.8, 1) infinite;
  }
`;

const Circle = ({ size = 64, color = rounderDefaults.color }: RounderProps): React.ReactNode => {
  return (
    <Container size={size} color={color}>
      <div></div>
    </Container>
  );
};

export { Circle };
