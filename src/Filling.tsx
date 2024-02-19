import * as React from "react";
import { rounderDefaults } from "./constants";
import { RounderProps } from "./types";
import { keyframes as gkeyframes, styled as gstyled } from "goober";
const containerAnimation = gkeyframes`
   0% {
		transform: rotate(0deg);
	}
	25% {
		transform: rotate(180deg);
	}
	50% {
		transform: rotate(180deg);
	}
	75% {
		transform: rotate(360deg);
	}
	100% {
		transform: rotate(360deg);
	}
`;
const innerAnimation = gkeyframes`
	0% {
		height: 0%;
	}
	25% {
		height: 0%;
	}
	50% {
		height: 100%;
	}
	75% {
		height: 100%;
	}
	100% {
		height: 0%;
	}
`;

const Container = gstyled("div")<RounderProps>`
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
  position: relative;
  border: 4px solid ${(props) => props.color};
  animation: ${containerAnimation} 3s infinite ease;
  & > div {
    vertical-align: top;
    display: inline-block;
    width: 100%;
    background-color: ${(props) => props.color};
    animation: ${innerAnimation} 3s infinite ease-in;
  }
`;

const Filling = ({ show = true, size = 40, color = rounderDefaults.color }: RounderProps): JSX.Element | null => {
  return show ? (
    <Container size={size} color={color}>
      <div></div>
    </Container>
  ) : null;
};

export { Filling };
