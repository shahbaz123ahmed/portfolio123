import React from "react";
import { FaBars } from "react-icons/fa";
import { Link as ScrollLink } from "react-scroll";
import styled, { keyframes } from "styled-components";

// Define the fade animation using keyframes
const fadeAnimation = keyframes`
  0% {
    opacity: 0; // Start invisible
  }
  50% {
    opacity: 1; // Fully visible
  }
  100% {
    opacity: 0; // Back to invisible
  }
`;

export const Nav = styled.nav`
  background: transparent;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 10;
`;

export const NavLink = styled(ScrollLink)`
  color: rgb(119, 119, 121);
  display: flex;
  font-size: 1.2rem;
  align-items: center;
  height: 100%;
  cursor: pointer;

  &:hover {
    color: #f6f6f6;
  }
`;

export const Logo = styled.div`
  margin-top: 450px; // Set the desired top margin
  margin-right: 200px; // Set the desired left margin

  img {
    width: 100px; // Set the width of the logo 
    height: 100px; // Set the height of the logo
    border-radius: 15px; // Add border-radius for rounded corners
    transition: transform 0.2s, opacity 0.3s; // Smooth transition for transform and opacity
    animation: ${fadeAnimation} 2s infinite; // 2s duration, repeat infinitely
    
    &:hover {
      transform: scale(1.1); // Scale up the logo on hover
      opacity: 0.8; // Slightly reduce opacity on hover
    }
  }
`;


export const Bars = styled(FaBars)`
  display: none;
  color: #fff;
  font-size: 1.8rem;
  cursor: pointer;

  @media screen and (max-width: 768px) {
    display: block;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -24px;
  

  .menu-item + .menu-item {
    margin-left: 1rem;
     
  }

  @media screen and (max-width: 768px) {
    display: none;
  }
`;


export const NavBtn = styled.div`
  display: flex;
  align-items: center;
  margin-right: 24px;
  background-color: grey; /* Set background color to gold */
  color: white; /* Set text color to white for contrast */
  padding: 5px 5px; /* Add padding for better appearance */
  border-radius: 15px; /* Rounded corners */
  transition: transform 0.3s ease, background-color 0.3s ease; /* Transition for scaling and color */

  transform: scale(1); /* Initial scale */

  &:hover {
    transform: scale(1.1); /* Scale to 110% on hover */
    background-color: black; /* Slightly brighter gold on hover */
  }

  @media screen and (max-width: 768px) {
    display: none;
  }
`;


const Header = ({ toggle }) => {
  return (
    <div className="Container" style={{ padding: 0 }}>
      <Nav>
        <Logo to="/">
          <img src="/assets/images/hello.png" alt="logo" />
        </Logo>
        <NavMenu>
          <NavLink className="menu-item" to="projects" aria-label="Projects">
            Projects
          </NavLink>

          <NavLink className="menu-item" to="about" aria-label="About">
            About
          </NavLink>
          <NavLink className="menu-item" to="contact" aria-label="Contact">
            Contact
          </NavLink>
          
        </NavMenu>
        <NavBtn>
          <a
            className="btn PrimaryBtn"
            href="https://lime-claresta-71.tiiny.site"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Resume"
          >
            Resume
          </a>
        </NavBtn>
        <Bars onClick={toggle} aria-label="Toggle navigation" />
      </Nav>
    </div>
  );
};

export default Header;
