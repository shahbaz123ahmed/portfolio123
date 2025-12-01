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

const pulse = keyframes`
  0%, 100% {
    box-shadow: 0 0 0 0 rgba(57, 134, 250, 0.7);
  }
  50% {
    box-shadow: 0 0 0 15px rgba(57, 134, 250, 0);
  }
`;

const ScrollButton = styled.div`
  position: fixed;
  bottom: 30px;
  right: 30px;
  width: 70px;
  height: 70px;
  cursor: pointer;
  z-index: 1000;
  animation: ${fadeIn} 0.3s ease-in-out;
  transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);

  &:hover {
    transform: scale(1.15);
    animation: ${pulse} 1.5s infinite;
  }

  /* Show tooltip on hover */
  &:hover .tooltip {
    opacity: 1;
  }

  &:active {
    transform: scale(0.95);
  }

  @media (max-width: 768px) {
    width: 60px;
    height: 60px;
    bottom: 20px;
    right: 20px;
  }
`;

const CircleProgress = styled.svg`
  width: 100%;
  height: 100%;
  transform: rotate(-90deg);
  filter: drop-shadow(0 6px 15px rgba(57, 134, 250, 0.4));
`;

const CircleBackground = styled.circle`
  fill: rgba(255, 255, 255, 0.95);
  stroke: rgba(57, 134, 250, 0.3);
  stroke-width: 4;
`;

const CircleProgressBar = styled.circle`
  fill: none;
  stroke: url(#gradient);
  stroke-width: 4;
  stroke-linecap: round;
  stroke-linejoin: round;
  transition: stroke-dashoffset 0.3s ease;
`;

const PercentageText = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 16px;
  font-weight: 800;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  letter-spacing: -0.5px;
  text-align: center;
  line-height: 1;
  
  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const UpArrowIcon = styled.div`
  position: absolute;
  bottom: 8px;
  left: 50%;
  transform: translateX(-50%);
  font-size: 10px;
  color: #667eea;
  font-weight: 700;
  
  @media (max-width: 768px) {
    font-size: 9px;
    bottom: 6px;
  }
`;

const Tooltip = styled.div`
  position: absolute;
  bottom: 85px;
  right: 0;
  background: rgba(0, 0, 0, 0.85);
  color: white;
  padding: 8px 12px;
  border-radius: 8px;
  font-size: 12px;
  white-space: nowrap;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.3s ease;
  
  &::after {
    content: '';
    position: absolute;
    top: 100%;
    right: 20px;
    border: 6px solid transparent;
    border-top-color: rgba(0, 0, 0, 0.85);
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
      const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;

      setScrollProgress(scrollPercent);
      setIsVisible(scrollTop > 300);
    };

    window.addEventListener("scroll", toggleVisibility);
    toggleVisibility(); // Initial check
    
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  const radius = 28;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (scrollProgress / 100) * circumference;

  return (
    <>
      {isVisible && (
        <ScrollButton onClick={scrollToTop}>
          <Tooltip className="tooltip">Click to scroll to top</Tooltip>
          <CircleProgress viewBox="0 0 70 70">
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#667eea" />
                <stop offset="50%" stopColor="#764ba2" />
                <stop offset="100%" stopColor="#f093fb" />
              </linearGradient>
            </defs>
            <CircleBackground
              cx="35"
              cy="35"
              r={radius}
            />
            <CircleProgressBar
              cx="35"
              cy="35"
              r={radius}
              strokeDasharray={circumference}
              strokeDashoffset={offset}
            />
          </CircleProgress>
          <PercentageText>
            {Math.round(scrollProgress)}%
          </PercentageText>
          <UpArrowIcon>▲</UpArrowIcon>
        </ScrollButton>
      )}
    </>
  );
};

export default ScrollToTop;