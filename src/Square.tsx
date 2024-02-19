import * as React from "react";
import { rounderDefaults } from "./constants";
import { RounderProps } from "./types";
import { styled as gstyled, keyframes as gkeyframes } from "goober";

const animation = gkeyframes`
  25% { 
    transform: translateX(var(--size)) rotate(-90deg) scale(0.5);
    -webkit-transform: translateX(var(--size)) rotate(-90deg) scale(0.5);
  } 50% { 
    transform: translateX(var(--size)) translateY(var(--size)) rotate(-179deg);
    -webkit-transform: translateX(var(--size)) translateY(var(--size)) rotate(-179deg);
  } 50.1% { 
    transform: translateX(var(--size)) translateY(var(--size)) rotate(-180deg);
    -webkit-transform: translateX(var(--size)) translateY(var(--size)) rotate(-180deg);
  } 75% { 
    transform: translateX(0px) translateY(var(--size)) rotate(-270deg) scale(0.5);
    -webkit-transform: translateX(0px) translateY(var(--size)) rotate(-270deg) scale(0.5);
  } 100% { 
    transform: rotate(-360deg);
    -webkit-transform: rotate(-360deg);
  }
`;

const Container = gstyled("div")<RounderProps>`
  --size: ${(props) => (props.size ? props.size - 10 : 42)}px;
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
  position: relative;
  & div {
    background-color: ${(props) => props.color};
    width: 30%;
    height: 30%;
    position: absolute;
    top: 0;
    left: 0;
    animation: ${animation} 1.8s infinite ease-in-out;
  }

  & div:nth-child(2) {
    animation-delay: -0.9s;
  }
`;

const Square = ({ show = true, size = 48, color = rounderDefaults.color }: RounderProps): JSX.Element | null => {
  return show ? (
    <Container size={size} color={color}>
      <div></div>
      <div></div>
    </Container>
  ) : null;
};

export { Square };
