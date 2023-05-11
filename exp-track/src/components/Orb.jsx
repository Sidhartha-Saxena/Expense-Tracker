import React from "react";
import styled, { keyframes } from "styled-components";

import { useEffect, useState } from "react";

const useWindowSize = () => {
  const [size, setSize] = useState([window.innerWidth, window.innerHeight]);

  useEffect(() => {
    const updateSize = () => {
      setSize([window.innerWidth, window.innerHeight]);
    };
    window.addEventListener("resize", updateSize);

    return () => window.removeEventListener("resize", updateSize);
  }, []);

  return {
    width: size[0],
    height: size[1],
  };
};
function Orb() {
  const { width, height } = useWindowSize();
  return <OrbStyled height={height} width={width}></OrbStyled>;
}

const OrbStyled = styled.div`
  width: 75vh;
  height: 75vh;
  position: absolute;
  border-radius: 50%;
  margin-left: -37vh;
  margin-top: -37vh;
  background: linear-gradient(180deg, #f56692 0%, #f2994a 100%);
  filter: blur(250px);
  animation: moveOrb 30s alternate linear infinite;

  @keyframes moveOrb {
    0% {
      transform: translate(0, 0);
    }
    25% {
      transform: translate(
        ${(props) => props.width}px,
        ${(props) => props.height / 2}px
      );
    }
    50% {
      transform: translate(0, ${(props) => props.height}px);
    }
    75% {
      transform: translate(
        ${(props) => props.width}px,
        ${(props) => props.height / 2}px
      );
    }
    100% {
      transform: translate(0, 0);
    }
  }
`;
export default Orb;
