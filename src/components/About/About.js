import React from "react";
import { stackList } from "../../data/ProjectData";
import {
  Image,
  Technologies,
  Tech,
  TechImg,
  TechName,
  ContactWrapper,
} from "./AboutElements";
import ScrollAnimation from "react-animate-on-scroll";
function About() {
  return (
    <ContactWrapper id="about">
      <div className="Container">
        <div className="SectionTitle">About Me</div>
        <div className="BigCard">
          <ScrollAnimation animateIn="fadeInLeft">
            <Image
              src={(process.env.PUBLIC_URL || "") + "/assets/images/coverpic.png"}
              onError={(e) => {
                if (!e.target.dataset.fallbackTried) {
                  e.target.dataset.fallbackTried = "1";
                  e.target.src = (process.env.PUBLIC_URL || "") + "/coverpic.png";
                }
              }}
              alt="Shahbaz Ahmed"
            />
          </ScrollAnimation>
          <div className="AboutBio">
            <ScrollAnimation animateIn="fadeInLeft">
              Hello! My name is <strong>Shahbaz Ahmed</strong>. a Full Stack Developer passionate about building modern, responsive, and user-friendly web applications.
            </ScrollAnimation>

            <br /><br />

            <ScrollAnimation animateIn="fadeInLeft">
              I enjoy turning ideas into practical digital solutions using modern technologies, writing clean and maintainable code, and continuously improving my skills to build reliable, high-quality web experiences.
            </ScrollAnimation>

            <br /><br />

            <ScrollAnimation animateIn="fadeInLeft">
              <div className="tagline2">
                I have become confident using the following technologies:
              </div>
            </ScrollAnimation>


            <Technologies>
              {stackList.map((stack, index) => (
                <ScrollAnimation animateIn="fadeInLeft" key={index}>
                  <Tech key={index} className="tech">
                    <TechImg src={stack.img} alt={stack.name} />
                    <TechName>{stack.name}</TechName>
                  </Tech>
                </ScrollAnimation>
              ))}

              {/* New Technology Icons */}
              <ScrollAnimation animateIn="fadeInLeft">
                <Tech className="tech">
                  <TechImg src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" alt="Redux" />
                  <TechName>Redux</TechName>
                </Tech>
              </ScrollAnimation>

              <ScrollAnimation animateIn="fadeInLeft">
                <Tech className="tech">
                  <TechImg src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg" alt="Sass" />
                  <TechName>Sass</TechName>
                </Tech>
              </ScrollAnimation>

              <ScrollAnimation animateIn="fadeInLeft">
                <Tech className="tech">
                  <TechImg src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" alt="Docker" />
                  <TechName>Docker</TechName>
                </Tech>
              </ScrollAnimation>

              <ScrollAnimation animateIn="fadeInLeft">
                <Tech className="tech">
                  <TechImg src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg" alt="GraphQL" />
                  <TechName>GraphQL</TechName>
                </Tech>
              </ScrollAnimation>

              <ScrollAnimation animateIn="fadeInLeft">
                <Tech className="tech">
                  <TechImg src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg" alt="Jest" />
                  <TechName>Jest</TechName>
                </Tech>
              </ScrollAnimation>

              <ScrollAnimation animateIn="fadeInLeft">
                <Tech className="tech">
                  <TechImg src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/webpack/webpack-original.svg" alt="Webpack" />
                  <TechName>Webpack</TechName>
                </Tech>
              </ScrollAnimation>
            </Technologies>
          </div>

        </div>
      </div>
    </ContactWrapper>
  );
}

export default About;
