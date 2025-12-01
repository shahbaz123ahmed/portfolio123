import styled, { keyframes } from "styled-components";
import { Link as LinkScroll } from "react-scroll";

const fadeInLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const textGlow = keyframes`
  0%, 100% {
    text-shadow: 0 0 10px rgba(255, 0, 0, 0.5), 0 0 20px rgba(255, 0, 0, 0.3);
  }
  50% {
    text-shadow: 0 0 20px rgba(255, 0, 0, 0.8), 0 0 30px rgba(255, 0, 0, 0.5);
  }
`;

const fadeInOut = keyframes`
  0%, 100% {
    opacity: 0.7;
  }
  50% {
    opacity: 1;
  }
`;

const pulse = keyframes`
  0%, 100% {
    transform: translate(-50%, 0);
  }
  50% {
    transform: translate(-50%, -10px);
  }
`;

export const HeroContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  height: 100vh;
  position: relative;
  z-index: 1;

  @media screen and (max-width: 768px) {
    padding: 0 20px;
  }
`;

export const HeroWrapper = styled.div`
  max-width: 1400px;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  gap: 80px;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 30px;
  }
`;

export const HeroLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  text-align: left;
  padding-left: 50px;

  @media screen and (max-width: 768px) {
    padding-left: 0;
  }

  h1 {
    font-size: 3.5rem;
    color: #fff;
    margin-bottom: 1rem;
    font-weight: 700;

    @media screen and (max-width: 768px) {
      font-size: 2.5rem;
    }
  }

  h5 {
    font-size: 1.5rem;
    color: #c0c0c0;
    font-weight: 400;
    line-height: 1.5;

    @media screen and (max-width: 768px) {
      font-size: 1.2rem;
    }
  }
`;

export const WelcomeText = styled.h2`
  font-size: 1.8rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  animation: ${fadeInLeft} 1s ease-out;
  letter-spacing: 0.5px;
  line-height: 1.4;

  .welcome {
    color: #ff4444;
    animation: ${textGlow} 2s ease-in-out infinite;
    font-weight: 700;
  }

  color: #ffffff;

  .portfolio {
    color: #ff4444;
    animation: ${textGlow} 2s ease-in-out infinite;
    animation-delay: 0.5s;
    font-weight: 700;
  }

  @media screen and (max-width: 768px) {
    font-size: 1.4rem;
    margin-bottom: 1rem;
  }

  @media screen and (max-width: 480px) {
    font-size: 1.2rem;
  }
`;

export const HeroRight = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Image = styled.img`
  width: 400px;
  height: 400px;
  border-radius: 50%;
  object-fit: cover;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.5);
  border: 5px solid rgba(255, 255, 255, 0.1);
  animation: ${fadeInOut} 3s ease-in-out infinite;

  &:hover {
    animation-play-state: paused;
    opacity: 1;
    box-shadow: 0 15px 50px rgba(102, 126, 234, 0.6);
    transform: scale(1.05);
    transition: all 0.3s ease;
  }

  @media screen and (max-width: 768px) {
    width: 300px;
    height: 300px;
  }

  @media screen and (max-width: 480px) {
    width: 250px;
    height: 250px;
  }
`;

export const ScrollDown = styled(LinkScroll)`
  position: fixed;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
  cursor: pointer;
  z-index: 999;
  animation: ${pulse} 2s ease-in-out infinite;

  @media screen and (max-width: 768px) {
    bottom: 20px;
  }
`;

export const ScrollLink = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #ff4444;
  font-size: 1.1rem;
  font-weight: 600;
  text-shadow: 0 0 10px rgba(255, 68, 68, 0.5);
  transition: all 0.3s ease;
  white-space: nowrap;

  &:hover {
    color: #ff6666;
    text-shadow: 0 0 20px rgba(255, 68, 68, 0.8);
    transform: scale(1.1);
  }

  img {
    width: 35px;
    height: 35px;
    margin-top: 8px;
    filter: brightness(0) saturate(100%) invert(48%) sepia(79%) saturate(2476%) hue-rotate(336deg) brightness(100%) contrast(119%);
    animation: bounce 2s infinite;
  }

  @keyframes bounce {
    0%,
    20%,
    50%,
    80%,
    100% {
      transform: translateY(0);
    }
    40% {
      transform: translateY(-10px);
    }
    60% {
      transform: translateY(-5px);
    }
  }

  @media screen and (max-width: 768px) {
    font-size: 0.95rem;
    
    img {
      width: 28px;
      height: 28px;
    }
  }
`;


