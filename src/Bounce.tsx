import * as React from "react";
import styled, { keyframes } from "styled-components";
import { rounderDefaults } from "./constants";
import { RounderProps } from "./types";

const animation = keyframes`
  0%, 100% { 
    transform: scale(0.0);
    -webkit-transform: scale(0.0);
  } 50% { 
    transform: scale(1.0);
    -webkit-transform: scale(1.0);
  }
`;

const Container = styled.div<RounderProps>`
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
  position: relative;
  & div {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: ${(props) => props.color};
    opacity: 0.6;
    position: absolute;
    top: 0;
    left: 0;
    animation: ${animation} 2s infinite ease-in-out;
  }

  & div:nth-child(2) {
    animation-delay: -1s;
  }
`;

const Bounce = ({ size = 64, color = rounderDefaults.color }: RounderProps): React.ReactNode => {
  return (
    <Container size={size} color={color}>
      <div></div>
      <div></div>
    </Container>
  );
};

export { Bounce };
