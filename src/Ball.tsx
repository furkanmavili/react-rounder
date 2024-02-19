import * as React from "react";
import { styled as gstyled, keyframes as gkeyframes } from "goober";
import { rounderDefaults } from "./constants";
import { RounderProps } from "./types";

const animation = gkeyframes`
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

const Container = gstyled("div")<RounderProps>`
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
    margin: auto;
    animation: ${animation} 3s cubic-bezier(0.77, 0, 0.175, 1) infinite;
  }
`;

const Ball = ({ show = true, size = 50, color = rounderDefaults.color }: RounderProps): JSX.Element | null => {
  return show ? (
    <Container size={size} color={color}>
      <div></div>
    </Container>
  ) : null;
};

export { Ball };
