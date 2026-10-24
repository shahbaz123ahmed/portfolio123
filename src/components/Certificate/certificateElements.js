import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";

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

export const CertificateWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  margin: 4rem auto;
  padding: 0 2rem;
  max-width: 1300px;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 860px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
    padding: 0 1.5rem;
  }

  @media (max-width: 520px) {
    grid-template-columns: 1fr;
    gap: 1.25rem;
    padding: 0 1rem;
  }
`;

export const CertificateHeading = styled.h2`
  grid-column: 1 / -1;
  text-align: center;
  font-weight: 700;
  font-size: clamp(30px, 3.5vw, 42px);
  color: #080e2b;
  margin-bottom: 2rem;
  letter-spacing: -0.03em;
  position: relative;

  &::after {
    content: "";
    display: block;
    width: 44px;
    height: 3px;
    background: #4674e9;
    border-radius: 3px;
    margin: 12px auto 0;
  }
`;

export const CertificateItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid rgba(174, 191, 223, 0.4);
  border-radius: 22px;
  padding: 1.25rem;
  background: #ffffff;
  box-shadow: 0 8px 24px rgba(70, 116, 233, 0.05);
  transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
  animation: ${fadeIn} 0.6s ease-in-out;
  animation-delay: ${(props) => props.index * 0.08}s;
  animation-fill-mode: both;
  cursor: pointer;
  height: 100%;
  min-height: 340px;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 20px 45px rgba(70, 116, 233, 0.14);
    border-color: #4773ec;
  }

  &:hover img {
    transform: scale(1.05);
  }

  &:hover h3 {
    color: #4773ec;
  }
`;

export const CertificateImageWrapper = styled.div`
  width: 100%;
  height: 190px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  border-radius: 14px;
  background: #f4f8fe;
  border: 1px solid rgba(174, 191, 223, 0.25);
  margin-bottom: 1rem;
`;

export const CertificateImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  padding: 8px;
  transition: all 0.35s ease;
`;

export const CertificateTitle = styled.h3`
  margin-top: auto;
  text-align: center;
  font-size: 0.95rem;
  font-weight: 600;
  color: #080e2b;
  line-height: 1.45;
  min-height: 52px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.25s ease;
`;
