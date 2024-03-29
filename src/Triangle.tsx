import { styled as gstyled, keyframes as gkeyframes } from "goober";
import * as React from "react";
import { rounderDefaults } from "./constants";
import { RounderProps } from "./types";

const blobTop = gkeyframes`
  50% {
    top: 0;
    left: 50%;
  }
  75%, 100% {
    top: 50%;
    left: 0;
  }
`;
const blobBottom = gkeyframes`
    25%, 50%, 75% {
        top: 50%;
        left: 100%;
    }
    100% {
        top: 0;
        left: 50%;
    }
`;
const blobLeft = gkeyframes`
    25% {
        top: 50%;
        left: 0;
    }
    50%, 100% {
        top: 100%;
        left: 50%;
    }
`;
const blobMover = gkeyframes`
    0%, 100% {
        top: 0;
        left: 50%;
    }
    25% {
        top: 50%;
        left: 100%;
    }
    50% {
        top: 100%;
        left: 50%;
    }
    75% {
        top: 50%;
        left: 0;
    }
`;

const Container = gstyled("div")<RounderProps>`
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
  position: relative;
  & > div {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border: 2px solid ${(props) => props.color};
    width: ${(props) => (props.size ? props.size / 3 : 10)}px;
    height: ${(props) => (props.size ? props.size / 3 : 10)}px;
    border-radius: 50%;
  }
  & > div:nth-child(1) {
    top: 0;
    animation: ${blobTop} 1s infinite ease-in;
  }
  & > div:nth-child(2) {
    top: 100%;
    animation: ${blobBottom} 1s infinite ease-in;
  }
  & > div:nth-child(3) {
    left: 0;
    animation: ${blobLeft} 1s infinite ease-in;
  }
  & > div:nth-child(4) {
    background: ${(props) => props.color};
    top: 0;
    animation: ${blobMover} 1s infinite ease-in;
  }
`;

const Triangle = ({ show = true, size = 40, color = rounderDefaults.color }: RounderProps): JSX.Element | null => {
  return show ? (
    <Container size={size} color={color}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </Container>
  ) : null;
};

export { Triangle };
