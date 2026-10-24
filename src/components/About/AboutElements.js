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

export const ContactWrapper = styled.div`
  margin-top: 5rem;
  margin-bottom: 5rem;
`;

export const Image = styled.img`
  width: 170px;
  height: auto;
  aspect-ratio: 1126 / 1397;
  object-fit: cover;
  object-position: top center;
  margin: 0 auto 1.75rem;
  border-radius: 25px;
  border: 4px solid #ffffff;
  display: block;
  transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
  box-shadow: 0 16px 36px rgba(70, 116, 233, 0.16), 0 4px 12px rgba(8, 14, 43, 0.04);
  animation: ${fadeIn} 0.5s ease-in-out;

  &:hover {
    transform: scale(1.04);
    box-shadow: 0 20px 42px rgba(70, 116, 233, 0.22);
  }

  @media (max-width: 768px) {
    width: 140px;
    border-radius: 20px;
  }
`;

export const Technologies = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 16px;
  margin: 2rem auto 0;
  max-width: 950px;
`;

export const Tech = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 105px;
  min-height: 100px;
  padding: 16px 8px;
  border-radius: 18px;
  background: #ffffff;
  border: 1px solid rgba(174, 191, 223, 0.4);
  box-shadow: 0 6px 18px rgba(70, 116, 233, 0.04);
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  cursor: pointer;

  &:hover {
    transform: translateY(-6px);
    border-color: #4773ec;
    box-shadow: 0 14px 30px rgba(70, 116, 233, 0.14);
    background: #fbfdff;

    img {
      transform: scale(1.1);
    }

    div {
      color: #4773ec;
      font-weight: 600;
    }
  }
`;

export const TechImg = styled.img`
  height: 42px;
  width: 42px;
  object-fit: contain;
  margin-bottom: 8px;
  transition: all 0.3s ease;
  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.06));
`;

export const TechName = styled.div`
  font-size: 13px;
  font-weight: 500;
  color: #080e2b;
  transition: all 0.3s ease;
  text-align: center;
`;
