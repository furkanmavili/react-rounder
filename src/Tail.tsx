import { styled as gstyled, keyframes as gkeyframes } from "goober";
import * as React from "react";
import { rounderDefaults } from "./constants";
import { RounderProps } from "./types";

const animation = gkeyframes`
    0% {
        opacity: 0;
    }
    10% {
        opacity: 1;
    }
    70% {
        opacity: 0;
    }
    100% {
        opacity: 0;
    }
`;

const ItemWrapper = gstyled("div")<RounderProps>`
  position: relative;
  left: 0;
  height: ${(props) => props.size}px;
  width: ${(props) => props.size}px;
  top: 50%;
  transform: translateY(-50%);
  margin: 0 auto;
  > div {
    position: absolute;
    height: ${(props) => props.size}px;
    width: ${(props) => props.size}px;
    background: ${(props) => props.color};
    animation: ${animation} 0.5s linear infinite;

    &:nth-of-type(1) {
      top: -${(props) => props.size}px;
      left: -${(props) => props.size}px;
      animation-delay: 0s;
    }

    &:nth-of-type(2) {
      top: -${(props) => props.size}px;
      left: 0;
      animation-delay: ${-0.5 / 8}s;
    }

    &:nth-of-type(3) {
      top: -${(props) => props.size}px;
      left: ${(props) => props.size}px;
      animation-delay: ${(-2 * 0.5) / 8}s;
    }

    &:nth-of-type(4) {
      top: 0;
      left: ${(props) => props.size}px;
      animation-delay: ${(-3 * 0.5) / 8}s;
    }

    &:nth-of-type(5) {
      top: ${(props) => props.size}px;
      left: ${(props) => props.size}px;
      animation-delay: ${(-4 * 0.5) / 8}s;
    }

    &:nth-of-type(6) {
      top: ${(props) => props.size}px;
      left: 0;
      animation-delay: ${(-5 * 0.5) / 8}s;
    }

    &:nth-of-type(7) {
      top: ${(props) => props.size}px;
      left: -${(props) => props.size}px;
      animation-delay: ${(-6 * 0.5) / 8}s;
    }

    &:nth-of-type(8) {
      top: 0;
      left: -${(props) => props.size}px;
      animation-delay: ${(-7 * 0.5) / 8}s;
    }
  }
`;
const Container = gstyled("div")<RounderProps>`
  width: ${(props) => (props.size ? props.size * 3 : 48)}px;
  height: ${(props) => (props.size ? props.size * 3 : 48)}px;
`;

const Tail = ({ show = true, size = 14, color = rounderDefaults.color }: RounderProps): JSX.Element | null => {
  return show ? (
    <Container size={size}>
      <ItemWrapper size={size} color={color}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </ItemWrapper>
    </Container>
  ) : null;
};

export { Tail };
