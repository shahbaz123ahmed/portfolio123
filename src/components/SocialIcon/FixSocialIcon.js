import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import styled from "@emotion/styled";
import ScrollAnimation from "react-animate-on-scroll";

const SocialContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 1.5rem;
  transform: translateY(-50%);
  z-index: 100;

  ul {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    list-style: none;
    padding: 0;
    margin: 0;
  }

  a {
    font-size: 1.3rem;
    color: #4d5a83;
    width: 44px;
    height: 44px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(255, 255, 255, 0.9);
    backdrop-filter: blur(8px);
    border: 1px solid rgba(174, 191, 223, 0.45);
    border-radius: 50%;
    box-shadow: 0 6px 18px rgba(70, 116, 233, 0.08);
    transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);

    &:hover {
      color: #ffffff;
      background: #4773ec;
      border-color: #4773ec;
      transform: translateY(-3px) scale(1.08);
      box-shadow: 0 10px 24px rgba(70, 116, 233, 0.25);
    }
  }

  @media screen and (max-width: 1000px) {
    display: none;
  }
`;

function FixSocialIcon() {
  return (
    <SocialContainer>
      <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
        <ul>
          <li className="item">
            <a
              href="https://www.linkedin.com/in/shahbaz-ahmed-872680215/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
          </li>
          <li className="item">
            <a
              href="https://github.com/shahbaz123ahmed"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
          </li>
        </ul>
      </ScrollAnimation>
    </SocialContainer>
  );
}

export default FixSocialIcon;
