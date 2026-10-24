import React from "react";
import styled from "@emotion/styled";

const FooterSection = styled.footer`
  background: #ffffff;
  border-top: 1px solid rgba(174, 191, 223, 0.35);
  width: 100%;
  padding: 3rem 0;
  position: relative;
`;

const FooterContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
  text-align: center;

  img {
    height: 32px;
    width: auto;
    object-fit: contain;
    margin-bottom: 4px;
  }

  p {
    color: #4d5a83;
    font-size: 0.95rem;
    margin: 0;
  }

  .copyright {
    color: #7a87aa;
    font-size: 0.85rem;
    letter-spacing: 0.05em;
  }

  a {
    color: #4773ec;
    font-weight: 500;
    &:hover {
      text-decoration: underline;
    }
  }
`;

function Footer() {
  return (
    <FooterSection>
      <div className="Container">
        <FooterContent>
          <img src="/assets/images/hello-theme.png" alt="Shahbaz" />
          <p>
            Crafting responsive web applications & interactive digital experiences.
          </p>
          <p className="copyright">
            © {new Date().getFullYear()} Shahbaz Ahmed · All Rights Reserved
          </p>
        </FooterContent>
      </div>
    </FooterSection>
  );
}

export default Footer;
