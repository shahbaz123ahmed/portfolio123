import styled from "@emotion/styled";

export const ContactWrapper = styled.div`
  margin-top: 5rem;
  margin-bottom: 6rem;
`;

export const Email = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
  row-gap: 1.5rem;
  column-gap: 2rem;

  span {
    font-size: 1.25rem;
    font-weight: 500;
    color: #080e2b;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;
