import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";

// Zigzag Motion Animation
const zigzag = keyframes`
  0% {
    transform: translateX(0) translateY(0);
  }
  25% {
    transform: translateX(-8px) translateY(-8px);
  }
  50% {
    transform: translateX(8px) translateY(-4px);
  }
  75% {
    transform: translateX(-4px) translateY(-10px);
  }
  100% {
    transform: translateX(0) translateY(0);
  }
`;

// Fade in animation
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

// Underline fade out animation
const underlineFadeOut = keyframes`
  0% {
    width: 100%;
    opacity: 1;
  }
  100% {
    width: 0%;
    opacity: 0;
  }
`;

export const ContactWrapper = styled.div`
  margin-top: 5rem;
`;

export const Image = styled.img`
  max-width: 120px;
  margin: 0 auto;
  margin-bottom: 1rem;
  border-radius: 25px;
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
  box-shadow: 0 4px 8px rgba(255, 0, 0, 0.6);
  animation: ${fadeIn} 0.5s ease-in-out;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 6px 12px rgba(255, 0, 0, 0.8);
  }
`;

export const Technologies = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-right: auto;
  margin-left: auto;
  margin-bottom: -2rem;
  gap: 20px;
`;

export const Tech = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 100px;
  min-width: 100px;
  margin-bottom: 2rem;
  position: relative;
  cursor: pointer;

  /* Continuous zigzag motion */
  animation: ${zigzag} 3s ease-in-out infinite;
  animation-delay: ${(props) => props.delay || "0s"};

  /* Staggered delays for each icon */
  &:nth-of-type(1) {
    animation-delay: 0s;
  }
  &:nth-of-type(2) {
    animation-delay: 0.2s;
  }
  &:nth-of-type(3) {
    animation-delay: 0.4s;
  }
  &:nth-of-type(4) {
    animation-delay: 0.6s;
  }
  &:nth-of-type(5) {
    animation-delay: 0.8s;
  }
  &:nth-of-type(6) {
    animation-delay: 1s;
  }
  &:nth-of-type(7) {
    animation-delay: 1.2s;
  }
  &:nth-of-type(8) {
    animation-delay: 1.4s;
  }
  &:nth-of-type(9) {
    animation-delay: 1.6s;
  }
  &:nth-of-type(10) {
    animation-delay: 1.8s;
  }
  &:nth-of-type(11) {
    animation-delay: 2s;
  }
  &:nth-of-type(12) {
    animation-delay: 2.2s;
  }
  &:nth-of-type(13) {
    animation-delay: 2.4s;
  }
  &:nth-of-type(14) {
    animation-delay: 2.6s;
  }
  &:nth-of-type(15) {
    animation-delay: 2.8s;
  }
  &:nth-of-type(16) {
    animation-delay: 3s;
  }
  &:nth-of-type(17) {
    animation-delay: 3.2s;
  }
  &:nth-of-type(18) {
    animation-delay: 3.4s;
  }
  &:nth-of-type(19) {
    animation-delay: 3.6s;
  }
  &:nth-of-type(20) {
    animation-delay: 3.8s;
  }
  &:nth-of-type(21) {
    animation-delay: 4s;
  }

  /* Green underline - visible by default */
  &::after {
    content: "";
    position: absolute;
    bottom: -8px;
    left: 50%;
    transform: translateX(-50%);
    width: 100%;
    height: 3px;
    background: linear-gradient(90deg, #00ff88, #00cc66);
    border-radius: 2px;
    box-shadow: 0 0 10px rgba(0, 255, 136, 0.5);
    transition: all 0.3s ease;
  }

  /* Hover effect - scale up and fade out underline */
  &:hover {
    transform: scale(1.2) translateY(-10px);
    animation: none; /* Stop zigzag on hover */

    &::after {
      animation: ${underlineFadeOut} 0.5s ease forwards;
    }

    /* Hover effect for image */
    img {
      transform: scale(1.1);
      filter: drop-shadow(0 4px 8px rgba(0, 255, 136, 0.3));
    }

    /* Hover effect for text */
    div {
      color: #00cc66;
      font-weight: 700;
      transform: scale(1.05);
    }
  }
`;

export const TechImg = styled.img`
  height: 50px;
  width: 50px;
  padding-bottom: 5px;
  transition: all 0.3s ease;
  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1));
`;

export const TechName = styled.div`
  font-size: 14px;
  font-weight: 500;
  color: #2c3e50;
  transition: all 0.3s ease;
  margin-top: 5px;
`;
