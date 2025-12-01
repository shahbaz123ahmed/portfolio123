import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";

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

// Shimmer effect
const shimmer = keyframes`
  0% {
    box-shadow: 0 4px 8px rgba(0, 0, 255, 0.3);
  }
  50% {
    box-shadow: 0 8px 16px rgba(0, 0, 255, 0.6);
  }
  100% {
    box-shadow: 0 4px 8px rgba(0, 0, 255, 0.3);
  }
`;

export const CertificateWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr); /* 4 columns */
  gap: 2rem;
  margin: 2rem auto;
  padding: 2rem;
  max-width: 1400px;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(3, 1fr); /* 3 columns on tablets */
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr); /* 2 columns on mobile */
    gap: 1.5rem;
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr; /* 1 column on small mobile */
    gap: 1rem;
  }
`;

export const CertificateHeading = styled.h2`
  grid-column: 1 / -1; /* Span across all columns */
  text-align: center;
  font-weight: 700;
  font-size: 2.5rem;
  color: #2c3e50;
  margin-bottom: 1rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

export const CertificateItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 2px solid #e0e0e0;
  border-radius: 16px;
  padding: 1.5rem;
  background: linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%);
  box-shadow: 0 4px 8px rgba(0, 0, 255, 0.3);
  transition: all 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  animation: ${fadeIn} 0.6s ease-in-out;
  animation-delay: ${props => props.index * 0.1}s;
  animation-fill-mode: both;
  cursor: pointer;
  height: 100%; /* Equal height for all cards */
  min-height: 400px; /* Minimum height */

  &:hover {
    transform: translateY(-15px) scale(1.05);
    box-shadow: 0 12px 24px rgba(255, 99, 71, 0.8);
    border-color: #ff6347;
    animation: ${shimmer} 1.5s infinite;
  }

  /* Hover effect for image inside */
  &:hover img {
    transform: scale(1.1);
    filter: brightness(1.1);
  }

  /* Hover effect for title inside */
  &:hover h3 {
    color: #ff6347;
    transform: scale(1.05);
  }
`;

export const CertificateImageWrapper = styled.div`
  width: 100%;
  height: 200px; /* Fixed height for all images */
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  border-radius: 12px;
  background: #f0f0f0;
  margin-bottom: 1rem;
`;

export const CertificateImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover; /* Ensures image covers the area without distortion */
  border-radius: 12px;
  transition: all 0.4s ease;
`;

export const CertificateTitle = styled.h3`
  margin-top: auto; /* Push to bottom */
  text-align: center;
  font-size: 1rem;
  font-weight: 600;
  color: #2c3e50;
  line-height: 1.4;
  min-height: 60px; /* Fixed height for titles */
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
`;

