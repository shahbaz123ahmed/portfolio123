import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: scale(0.8);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`;

const ScrollButton = styled.div`
  position: fixed;
  bottom: 30px;
  right: 30px;
  width: 58px;
  height: 58px;
  cursor: pointer;
  z-index: 1000;
  animation: ${fadeIn} 0.3s ease-in-out;
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);

  &:hover {
    transform: translateY(-4px) scale(1.08);
  }

  &:hover .tooltip {
    opacity: 1;
  }

  &:active {
    transform: scale(0.95);
  }

  @media (max-width: 768px) {
    width: 50px;
    height: 50px;
    bottom: 20px;
    right: 20px;
  }
`;

const CircleProgress = styled.svg`
  width: 100%;
  height: 100%;
  transform: rotate(-90deg);
  filter: drop-shadow(0 8px 20px rgba(70, 116, 233, 0.22));
`;

const CircleBackground = styled.circle`
  fill: #ffffff;
  stroke: rgba(174, 191, 223, 0.35);
  stroke-width: 3.5;
`;

const CircleProgressBar = styled.circle`
  fill: none;
  stroke: url(#scroll-gradient);
  stroke-width: 3.5;
  stroke-linecap: round;
  stroke-linejoin: round;
  transition: stroke-dashoffset 0.2s ease;
`;

const PercentageText = styled.div`
  position: absolute;
  top: 48%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 13px;
  font-weight: 700;
  color: #4674e9;
  letter-spacing: -0.3px;
  text-align: center;
  line-height: 1;

  @media (max-width: 768px) {
    font-size: 11px;
  }
`;

const UpArrowIcon = styled.div`
  position: absolute;
  bottom: 8px;
  left: 50%;
  transform: translateX(-50%);
  font-size: 9px;
  color: #7a94df;
  font-weight: 700;

  @media (max-width: 768px) {
    font-size: 8px;
    bottom: 6px;
  }
`;

const Tooltip = styled.div`
  position: absolute;
  bottom: 72px;
  right: 0;
  background: #080e2b;
  color: #ffffff;
  padding: 6px 12px;
  border-radius: 8px;
  font-size: 12px;
  white-space: nowrap;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.25s ease;
  box-shadow: 0 4px 12px rgba(8, 14, 43, 0.15);

  &::after {
    content: "";
    position: absolute;
    top: 100%;
    right: 20px;
    border: 5px solid transparent;
    border-top-color: #080e2b;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const toggleVisibility = () => {
      const scrollTop = window.pageYOffset;
      const docHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const scrollPercent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;

      setScrollProgress(scrollPercent);
      setIsVisible(scrollTop > 250);
    };

    window.addEventListener("scroll", toggleVisibility);
    toggleVisibility();

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const radius = 24;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (scrollProgress / 100) * circumference;

  return (
    <>
      {isVisible && (
        <ScrollButton onClick={scrollToTop}>
          <Tooltip className="tooltip">Scroll to top</Tooltip>
          <CircleProgress viewBox="0 0 60 60">
            <defs>
              <linearGradient
                id="scroll-gradient"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <stop offset="0%" stopColor="#7d9efa" />
                <stop offset="100%" stopColor="#4674e9" />
              </linearGradient>
            </defs>
            <CircleBackground cx="30" cy="30" r={radius} />
            <CircleProgressBar
              cx="30"
              cy="30"
              r={radius}
              strokeDasharray={circumference}
              strokeDashoffset={offset}
            />
          </CircleProgress>
          <PercentageText>{Math.round(scrollProgress)}%</PercentageText>
          <UpArrowIcon>▲</UpArrowIcon>
        </ScrollButton>
      )}
    </>
  );
};

export default ScrollToTop;