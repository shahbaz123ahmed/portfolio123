import styled from "@emotion/styled";

export const Card = styled.div`
  display: grid;
  grid-gap: 2.5rem;
  margin-bottom: 3.5rem;
  grid-template-columns: 1fr;
  padding: 2.25rem;
  background: #ffffff;
  border: 1px solid rgba(174, 191, 223, 0.4);
  border-radius: 24px;
  box-shadow: 0 12px 35px rgba(70, 116, 233, 0.06);
  transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);

  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 22px 50px rgba(70, 116, 233, 0.12);
    border-color: rgba(71, 115, 236, 0.5);
  }

  @media (min-width: 992px) {
    grid-template-columns: 1.15fr 1fr;
    align-items: center;
  }

  @media (max-width: 600px) {
    padding: 1.5rem;
    grid-gap: 1.5rem;
  }
`;

export const CardLeft = styled.div`
  justify-self: center;
  width: 100%;
  height: 100%;
  min-height: 240px;
  max-height: 340px;
  overflow: hidden;
  border-radius: 18px;
  border: 1px solid rgba(174, 191, 223, 0.3);
  background: #f4f8fe;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 18px;
    transition: transform 0.4s ease;
  }

  &:hover img {
    transform: scale(1.03);
  }
`;

export const CardRight = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  h4 {
    font-size: 1.65rem;
    font-weight: 700;
    color: #080e2b;
    letter-spacing: -0.02em;
    margin-bottom: 0.5rem;
  }

  p {
    font-weight: 400;
    max-width: 95%;
    margin-top: 6px;
    margin-bottom: 1.25rem;
    color: #4d5a83;
    line-height: 1.65;
    font-size: 0.98rem;
    text-align: start;
  }

  @media (max-width: 992px) {
    align-items: center;
    p {
      text-align: center;
    }
  }
`;

export const BtnGroup = styled.div`
  margin-top: 1.25rem;
  display: flex;
  align-items: center;
  gap: 12px;
  flex-wrap: wrap;
`;

export const TechCardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  gap: 6px;

  @media (max-width: 992px) {
    justify-content: center;
  }
`;

export const TechCard = styled.div`
  border-radius: 20px;
  background-color: #eef3ff;
  border: 1px solid rgba(71, 115, 236, 0.18);
  padding: 6px 14px;
  font-size: 13px;
  font-weight: 500;
  color: #4773ec;
  cursor: default;
  transition: all 0.2s ease;

  &:hover {
    background-color: #4773ec;
    color: #ffffff;
  }
`;
